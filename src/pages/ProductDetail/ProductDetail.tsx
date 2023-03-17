import SwiperCore, { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import RelatedProduct from "../../components/ChildrenProduct/RelatedProduct/RelatedProduct";
import FeedBack from "../../components/ChildrenProduct/FeedBack/FeedBack";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import LoadingModal from "../../components/Loading/Loading";
import { useTranslation } from "react-i18next";
import CircleIcon from "@mui/icons-material/Circle";
import { Size } from "../../models/product";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { token } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import { CartItem } from "../../models/cart";
import { cartActions } from "../../store/cart/cartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { listFavoriteActions } from "../../store/list-favorite/listFavoriteSlice";
import { listProductFavorite } from "../../store/list-favorite/listFavoriteSlice";

export default function ProductDetail() {
  const { t } = useTranslation(["common"]);
  SwiperCore.use([Autoplay, Navigation, Thumbs]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataProductDetail, setDataProductDetail] = useState<any>([]);
  const productId = useParams();
  const idProduct = Object.values(productId);
  const currentIdProduct = idProduct[0];
  const [selectedColor, setSelectedColor] = useState<any>();
  const [selectedSize, setSelectedSize] = useState<Size>();
  const [selectQuantity, setSelectQuantity] = useState<number>(1);
  const dataUser = useAppSelector(token);
  const dispatch = useAppDispatch();
  const listFavoriteProduct = useAppSelector(listProductFavorite);
  const finalFavoriteProduct = listFavoriteProduct?.flat(Infinity);

  // SCROLL TOP
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // CALL API PROUDUCT BY ID
  useEffect(() => {
    if (!currentIdProduct) return;
    (async () => {
      setLoading(true);
      try {
        const response: any = await productApi.getProductById(currentIdProduct);
        setDataProductDetail(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [currentIdProduct]);

  // DATA PRODUCT DETAILS
  const productDetail = dataProductDetail?.data;

  // HÀM CHỌN MÀU
  const handleColorSelect = useCallback((color: any) => {
    setSelectedColor(color);
  }, []);

  // THANH MÀU
  const colorBar = useMemo(
    () =>
      productDetail &&
      productDetail.color.map(
        (color: any) =>
          color.isAvailable && (
            <div key={color.color_name}>
              <CircleIcon
                className={`circle-style ${
                  color.color_name === selectedColor && "circle-style-active"
                }`}
                onClick={() => {
                  if (color.isAvailable) handleColorSelect(color.color_name);
                }}
                sx={{ color: `${color.color_name}`, fontSize: "26px" }}
              />
            </div>
          )
      ),
    [productDetail, selectedColor]
  );

  // HÀM CHỌN SIZE
  const handleSizeSelect = useCallback((size: Size) => {
    setSelectedSize(size);
  }, []);

  // THANH SIZE
  const sizeBar = useMemo(
    () =>
      productDetail &&
      productDetail.size.map((size: any) => (
        <span
          key={size.size_name}
          className={`size-square ${size.isAvailable ? "size-in-stock" : "size-out-stock"} ${
            size.size_name === selectedSize && "size-active"
          }`}
          onClick={() => {
            if (size.isAvailable) handleSizeSelect(size.size_name);
          }}
        >
          {size.size_name}
        </span>
      )),
    [productDetail, selectedSize]
  );

  // HÀM TĂNG SỐ LƯỢNG
  const handleIncreaseQuantity = useCallback(() => {
    if (productDetail) {
      if (selectQuantity >= productDetail.quantity) {
        toast.warning(t("common:limitQuantityReached"));
      } else {
        setSelectQuantity(selectQuantity + 1);
      }
    }
  }, [productDetail, selectQuantity]);

  // HÀM GIẢM SỐ LƯỢNG
  const handleDecreaseQuantity = useCallback(() => {
    if (selectQuantity >= 2) {
      setSelectQuantity(selectQuantity - 1);
    }
  }, [selectQuantity]);

  // HÀM THÊM SẢN PHẨM VÀO GIỎ HÀNG
  const handleAddToCart = useCallback(() => {
    if (!dataUser) {
      toast.warning(`${t("common:mustLogin")}`);
      return;
    }
    if (!selectedColor) {
      toast.warning(`${t("common:selectOneColor")}`);
      return;
    }
    if (!selectedSize) {
      toast.warning(`${t("common:selectOneSize")}`);
      return;
    }
    if (dataUser && selectedColor && selectedSize) {
      const cartItem: CartItem = {
        id: productDetail.id,
        product_name: productDetail.product_name,
        image_url: productDetail.image_url.image_url_01,
        price: productDetail.price,
        quantity: selectQuantity,
        color: selectedColor,
        size: selectedSize,
      };
      // console.log(cartItem);
      dispatch(cartActions.addCartStart(cartItem));
    }
  }, [dataUser, selectQuantity, selectedColor, selectedSize]);

  // THÊM SẢN PHẨM VÀO WISH-LIST
  const addToFavoriteList = useCallback(
    (e: any) => {
      dispatch(listFavoriteActions.addProductToFavoriteListStart(productDetail));
    },
    [productDetail]
  );

  // LẤY RA ID CỦA TẤT CẢ SẢN PHẨM TRONG WISH LIST
  const checkId = finalFavoriteProduct.some((item: any) => item.id === currentIdProduct);

  const removeFromFavoriteList = useCallback(
    (e: any) => {
      dispatch(listFavoriteActions.removeProductFromFavoriteStart(currentIdProduct));
    },
    [currentIdProduct]
  );

  return (
    <>
      {loading && <LoadingModal />}
      {productDetail && (
        <div className="lg:pt-[10px]">
          <div className="container mx-auto px-[12px]">
            <div className="block xl:flex xl:gap-[50px]">
              <div className="xl:flex-[0_0_auto] xl:w-[50%]">
                {/* Big Swiper */}
                <div className="big-swiper">
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                    thumbs={{
                      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    grabCursor={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className="opacity-1">
                      <div className="">
                        <img className="" src={productDetail?.image_url?.image_url_01} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="opacity-1">
                      <div className="">
                        <img className="" src={productDetail?.image_url?.image_url_02} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="opacity-1">
                      <div className="">
                        <img className="" src={productDetail?.image_url?.image_url_03} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="opacity-1">
                      <div className="">
                        <img className="" src={productDetail?.image_url?.image_url_04} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* Small Swiper */}
                <div className="small-slider">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                  >
                    <SwiperSlide className="">
                      <div className="">
                        <img
                          className="swiper-slide swiper-slide-thumb-active"
                          src={productDetail?.image_url?.image_url_01}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                      <div className="">
                        <img
                          className="swiper-slide swiper-slide-thumb-active"
                          src={productDetail?.image_url?.image_url_02}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                      <div className="">
                        <img
                          className="swiper-slide swiper-slide-thumb-active"
                          src={productDetail?.image_url?.image_url_03}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                      <div className="">
                        <img
                          className="swiper-slide swiper-slide-thumb-active"
                          src={productDetail?.image_url?.image_url_04}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="xl:flex-[0_0_auto] xl:w-[50%] xl:pt-[60px]">
                <div className="">
                  <div className="text-[36px] text-[#111] font-semibold mb-[25px] uppercase">
                    {productDetail?.product_name}
                  </div>
                </div>
                <div className="mb-[16px]">
                  <span className="text-[30px] text-[#212529]">{productDetail?.price}$</span>
                </div>
                <div className="mb-[16px]">
                  <span className="">
                    {t("product:quantity")}: {productDetail?.quantity}
                  </span>
                </div>

                {/* CHỌN MÀU */}
                <div className="flex mb-[16px]">{colorBar}</div>

                {/* CHỌN SIZE */}
                <div className="flex flex-wrap gap-[10px] mb-[20px]">{sizeBar}</div>

                {/* THÊM VÀO DANH SÁCH YÊU THÍCH */}
                {checkId ? (
                  <div className="pb-[12px]">
                    <FavoriteIcon
                      onClick={removeFromFavoriteList}
                      className="text-[red] cursor-pointer"
                      sx={{ fontSize: "25px" }}
                    />
                  </div>
                ) : (
                  <div className="pb-[12px]">
                    <FavoriteIcon
                      onClick={addToFavoriteList}
                      className="text-black hover:text-[red] cursor-pointer"
                      sx={{ fontSize: "25px" }}
                    />
                  </div>
                )}

                {/* TĂNG GIẢM SỐ LƯỢNG */}
                <div className="flex mb-[16px]">
                  {/* GIẢM SỐ LƯỢNG */}
                  <div
                    onClick={handleDecreaseQuantity}
                    className="flex items-center justify-center w-[36px] h-[36px] border-[1px] border-solid border-[#777373] border-r-0 cursor-pointer text-[24px]"
                  >
                    <span className="text-[24px]">-</span>
                  </div>
                  {/* CURRENT VALUE */}
                  <div className="w-[40px] flex h-[36px] justify-center items-center border-[1px] border-solid border-[#777373] cursor-pointer">
                    <span className="text-[16px]">{selectQuantity}</span>
                  </div>
                  {/* TĂNG SỐ LƯỢNG */}
                  <div
                    onClick={handleIncreaseQuantity}
                    className="w-[36px] flex h-[36px] justify-center items-center border-[1px] border-solid border-[#777373] border-l-0 cursor-pointer"
                  >
                    <span className="text-[24px]">+</span>
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  {/* NÚT THÊM VÀO GIỎ HÀNG */}
                  <div className="">
                    <button
                      onClick={handleAddToCart}
                      className="text-[#dc3545] hover:text-white  bg-white hover:bg-[#dc3545] border-[1px] border-[#dc3545] border-solid px-[16px] py-[8px] rounded-[8px] transition-button"
                    >
                      <span className="text-[18px] font-semibold">{t("common:addToCart")}</span>
                    </button>
                  </div>

                  {/* NÚT MUA NGAY */}
                  {/* <div className="">
                    <button className="bg-[#dc3545] border-[1px] border-solid px-[16px] py-[8px] rounded-[8px]">
                      <span className="text-white text-[18px] font-semibold">
                        {t("common:buyNow")}
                      </span>
                    </button>
                  </div> */}
                </div>
                {/* MÔ TẢ SẢN PHẨM */}
                <div className="mt-[40px]">
                  <div className="font-semibold">{t("common:description")}</div>
                  <div className="flex flex-col">
                    <span className="">{productDetail?.description?.description_1}</span>
                    <span className="">
                      {productDetail?.description?.description_2?.description_2_1}
                      <p>{productDetail?.description?.description_2?.description_2_2}</p>
                      <p>{productDetail?.description?.description_2?.description_2_3}</p>
                    </span>
                    <span className="">
                      {productDetail?.description?.description_3?.description_3_1}
                      <p className="">
                        {productDetail?.description?.description_3?.description_3_2}
                      </p>
                      <p className="">
                        {productDetail?.description?.description_3?.description_3_3}
                      </p>
                      <p className="">
                        {productDetail?.description?.description_3?.description_3_4}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SẢN PHẨM LIÊN QUAN */}
            <RelatedProduct />

            {/* ĐÁNH GIÁ */}
            {productDetail && <FeedBack productDetail={productDetail} />}
          </div>
        </div>
      )}
    </>
  );
}
