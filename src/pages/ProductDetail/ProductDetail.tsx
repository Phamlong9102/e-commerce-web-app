import SwiperCore, { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import RelatedProduct from "../../components/ChildrenProduct/RelatedProduct/RelatedProduct";
import FeedBack from "../../components/ChildrenProduct/FeedBack/FeedBack";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import LoadingModal from "../../components/loadingModal/LoadingModal";
import { useTranslation } from "react-i18next";

export default function ProductDetail() {
  SwiperCore.use([Autoplay, Navigation, Thumbs]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  
  const [color, setColor] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleColor = (e: any) => {
    setColor((current) => !current);
  };
  const [color2, setColor2] = useState(false);
  const handleColor2 = (e: any) => {
    setColor2((current) => !current);
  };

  const [dataProductDetail, setDataProductDetail] = useState<any>([]);
  const productId = useParams();
  const idProduct = Object.values(productId);
  const currentIdProduct = idProduct[0];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentIdProduct]);

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
  const productDetail = dataProductDetail?.data;
  const { t } = useTranslation(["product", "common"]);

  return (
    <>
      {loading && <LoadingModal />}
      <div className="lg:pt-[10px]">
        <div className="container mx-auto px-[12px]">
          <div className="block xl:flex xl:gap-[50px]">
            <div className="xl:flex-[0_0_auto] xl:w-[50%]">
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
                      <img className="" src={productDetail?.imageUrl?.imageUrl01} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="opacity-1">
                    <div className="">
                      <img className="" src={productDetail?.imageUrl?.imageUrl02} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="opacity-1">
                    <div className="">
                      <img className="" src={productDetail?.imageUrl?.imageUrl03} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="opacity-1">
                    <div className="">
                      <img className="" src={productDetail?.imageUrl?.imageUrl04} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
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
                        src={productDetail?.imageUrl?.imageUrl01}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <div className="">
                      <img
                        className="swiper-slide swiper-slide-thumb-active"
                        src={productDetail?.imageUrl?.imageUrl02}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <div className="">
                      <img
                        className="swiper-slide swiper-slide-thumb-active"
                        src={productDetail?.imageUrl?.imageUrl03}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <div className="">
                      <img
                        className="swiper-slide swiper-slide-thumb-active"
                        src={productDetail?.imageUrl?.imageUrl04}
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
                  {productDetail?.productName}
                </div>
              </div>
              <div className="mb-[16px]">
                <span className="text-[30px] text-[#212529]">{productDetail?.price}$</span>
              </div>
              <div className="mb-[16px]">
                <span className="">{t("product:quantity")}: 30</span>
              </div>
              <div className="flex mb-[16px]">
                <div
                  style={{
                    border: color ? "3px solid #dc3545" : "1px solid #ccc",
                  }}
                  onClick={handleColor}
                  className="w-[24px] h-[24px] mr-[10px] bg-white rounded-[50%] cursor-pointer"
                ></div>
                <div
                  style={{
                    border: color2 ? "3px solid #dc3545" : "1px solid #ccc",
                  }}
                  onClick={handleColor2}
                  className="w-[24px] h-[24px] bg-black rounded-[50%] cursor-pointer"
                ></div>
              </div>
              <div className="flex flex-wrap gap-[10px] mb-[48px]">
                <span className="size-square">M</span>
                <span className="size-square">L</span>
                <span className="size-square">XL</span>
                <span className="size-square">2XL</span>
              </div>
              <div className="flex mb-[16px]">
                <div className="flex items-center justify-center w-[36px] h-[36px] border-[1px] border-solid border-[#777373] border-r-0 cursor-pointer text-[24px]">
                  <span className="text-[24px]">-</span>
                </div>
                <div className="w-[40px] flex h-[36px] justify-center items-center border-[1px] border-solid border-[#777373] cursor-pointer">
                  <span className="text-[16px]">1</span>
                </div>
                <div className="w-[36px] flex h-[36px] justify-center items-center border-[1px] border-solid border-[#777373] border-l-0 cursor-pointer">
                  <span className="text-[24px]">+</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="">
                  <button className="bg-white border-[1px] border-[#dc3545] border-solid px-[16px] py-[8px] rounded-[8px]">
                    <span className="text-[#dc3545] text-[18px] font-semibold	">{t("common:addToCart")}</span>
                  </button>
                </div>
                <div className="">
                  <button className="bg-[#dc3545] border-[1px] border-solid px-[16px] py-[8px] rounded-[8px]">
                    <span className="text-white text-[18px] font-semibold">{t("common:buyNow")}</span>
                  </button>
                </div>
              </div>
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
                    <p className="">{productDetail?.description?.description_3?.description_3_2}</p>
                    <p className="">{productDetail?.description?.description_3?.description_3_3}</p>
                    <p className="">{productDetail?.description?.description_3?.description_3_4}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <RelatedProduct />
          <FeedBack />
        </div>
      </div>
    </>
  );
}
