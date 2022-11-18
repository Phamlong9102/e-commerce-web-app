import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/bundle";

export default function BannerPage() {
  SwiperCore.use([Navigation, Autoplay, EffectFade]);

  return (
    <>
      <div className="">
        <Swiper
        // loop={true}
        // modules={[Navigation, Autoplay, EffectFade]}
        // grabCursor={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // effect={"fade"}
        >
          <SwiperSlide>
            <div className="h-[300px] lg:h-[800px] banner-01 relative mt-[75px] lg:mt-[114px] select-none	">
              <div className="container mx-auto px-[12px]">
                <div className="pt-[40px] lg:pt-[220px]">
                  <div className="text-white mb-[48px] font-semibold font-size-banner-flexible  leading-[28px]">
                    2022 Winter Collection For Men
                  </div>
                  <div className=""></div>
                  <div className="mb-[16px]">
                    <span className="text-white text-[16px] font-normal	">
                      A brand-new products collection for 2022 winter
                    </span>
                  </div>
                  <div className="">
                    <button className="flex justify-between items-center gap-[8px] py-[4px] md:py-[8px] px-[8px] md:px-[24px] bg-black">
                      <span className="text-white text-[16px] ">Mua ngay</span>
                      <ArrowForwardIcon sx={{ color: "#fff" }} />
                    </button>
                  </div>
                  <div className="absolute top-[92%] flex gap-[40px] text-white">
                    <Link to="/">
                      <FacebookIcon sx={{ fontSize: "22px" }} />
                    </Link>
                    <Link to="/">
                      <TwitterIcon sx={{ fontSize: "22px" }} />
                    </Link>
                    <Link to="/">
                      <PinterestIcon sx={{ fontSize: "22px" }} />
                    </Link>
                    <Link to="/">
                      <InstagramIcon sx={{ fontSize: "22px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
