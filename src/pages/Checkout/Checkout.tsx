import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks/hooks";
import { Link } from "react-router-dom";
import _ from "lodash";
import { dataCart } from "../../store/cart/cartSlice";

export default function Checkout() {
  const { t } = useTranslation(["common", "user", "order", "product"]);
  const [value, setValue] = useState("fast");
  const [value2, setValue2] = useState("cod");
  const cartItems = useAppSelector(dataCart);
  const [finalCart, setFinalCart] = useState<any>();

  console.log("cartItems: ", cartItems);

  // NHÓM CÁC SẢN PHẨM CÙNG ID, COLOR, SIZE VÀO CÙNG 1 ARRAY KHI USER THÊM SẢN PHẨM VÀO GIỎ HÀNG
  useEffect(() => {
    const groupProductById = _.groupBy(cartItems, (i) => `"${i.id}+${i.color}+${i.size}"`);
    const arrayProduct = Object.values(groupProductById);
    setFinalCart(arrayProduct);
  }, [cartItems]);

  // TÍNH GIÁ TẤT CẢ CÁC SẢN PHẨM
  const flatFinalCart = finalCart?.flat(Infinity);
  const priceCart = flatFinalCart?.reduce(
    (acc: any, curValue: any) => acc + curValue.quantity * curValue.price,
    0
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className="py-[100px]">
        {finalCart?.length > 0 ? (
          <div className="container mx-auto px-[12px]">
            <div className="block xl:flex gap-[50px]">
              {/* FORM THÔNG TIN VẬN CHUYỂN */}
              <form className="xl:basis-[50%]">
                <div className="uppercase pb-[16px] mb-[18px] border-b-[1px] border-b-solid border-b-[#e1e1e1] text-[24px] font-semibold">
                  {t("common:billDetail")}
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("user:name")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <input
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      disabled
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("user:phoneNumber")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <input
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      disabled
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("user:address")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <input
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      disabled
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("order:shipping")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="fast" control={<Radio />} label="Nhanh" />
                        <FormControlLabel value="low" control={<Radio />} label="Thường" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("order:payment")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value2}
                        onChange={handleChange2}
                      >
                        <FormControlLabel value="cod" control={<Radio />} label="COD" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </form>

              {/* TÍNH GIÁ SẢN PHẨM KHI NGƯỜI DÙNG ĐÃ THÊM SẢN PHẨM TỪ PHIỂN ĐĂNG NHẬP TRƯỚC ĐÓ */}
              <div className="xl:basis-[50%] pt-[30px] xl:pt-0 px-[12px]">
                <div className="uppercase pb-[16px] border-b-[1px] border-b-solid border-b-[#d7d7d7] text-[24px] font-semibold mb-[20px]">
                  {t("order:yourOrder")}
                </div>
                <div className="flex justify-between items-center mb-[18px] font-bold text-[#212529]">
                  <span>{t("product:product")}</span>
                  <span>{t("order:total")}</span>
                </div>
                {/* SẢN PHẨM */}
                {finalCart.map((data: any, index: any) => {
                  let quantity = 0;
                  for (const i of data) {
                    quantity = quantity + i.quantity;
                  }
                  return (
                    <div className="" key={index}>
                      <div className="mb-[20px] pb-[20px] border-b-[1px] border-b-solid border-[#d7d7d7]">
                        <div className="flex justify-between mb-[15px]">
                          <div className="flex flex-wrap">
                            {data[0].product_name} x {data[0].quantity}. {t("common:variant")}:{" "}
                            {data[0].size}, {data[0].color}
                          </div>
                          <div>${data[0].price * quantity}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* GIÁ */}
                <div className="pb-[28px] border-b-[1px] border-b-solid border-b-[#d7d7d7] mb-[20px]">
                  <div className="flex justify-between items-center">
                    <div className="text-[#212529] font-bold">{t("order:subtotal")}</div>
                    <div className="text-[#e53637] font-bold">${priceCart}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-[#212529] font-bold">{t("order:feeShipping")}</div>
                    <div className="text-[#e53637] font-bold">$5</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-[#212529] font-bold">{t("order:total")}</div>
                    <div className="text-[#e53637] font-bold">${priceCart + 5}</div>
                  </div>
                </div>
                <div className="">
                  <button className="py-[12px] bg-black w-[100%]">
                    <span className="text-white font-semibold">{t("order:placeOrder")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container px-[12px] mx-auto">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-[30px]">{t("common:cartNoItem")}</div>
              <Link to="/store/shirt" className="">
                <button className="px-[35px] py-[14px] border-solid border-[1px] border-[#ccc]">
                  <span className="uppercase">{t("common:buyNow")}</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
