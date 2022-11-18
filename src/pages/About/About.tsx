import aboutBanner from "../../assets/images/aboutBanner.jpg";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/about3.jpg";
import about4 from "../../assets/images/about4.jpg";

export default function About() {
  return (
    <>
      <div className="pt-[74px] pb-[40px]">
        <div className="container px-[12px] mx-auto">
          <div>
            <img src={aboutBanner} alt="" />
          </div>
          <div className="mt-[24px] md:grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 lg:gap-[18px]	 ">
            <div className="py-[16px]">
              <div className="font-semibold text-[24px]">Who We Are ?</div>
              <span className="text-[16px] font-normal leading-[25px] ">
                Contextual advertising programs sometimes have strict policies that need to be
                adhered too. Let’s take Google as an example.
              </span>
            </div>
            <div className="py-[16px]">
              <div className="font-semibold text-[24px]">What We Do ?</div>
              <span className="text-[16px] font-normal leading-[25px] ">
                In this digital generation where information can be easily obtained within seconds,
                business cards still have retained their importance.
              </span>
            </div>
            <div className="py-[16px]">
              <div className="font-semibold text-[24px]">Why Choose Us ?</div>
              <span className="text-[16px] font-normal leading-[25px] ">
                Contextual advertising programs sometimes have strict policies that need to be
                adhered too. Let’s take Google as an example.
              </span>
            </div>
          </div>
          <div className="pt-[50px] flex flex-col items-center pb-[28px]">
            <div className="text-[14px] default-color font-bold uppercase tracking-[2px]">
              Our team
            </div>
            <div className="text-[36px] font-semibold">Meet Our Team</div>
          </div>
          {/* Out team */}
          <div className="container mx-auto">
            <div className="md:grid md:grid-rows-2 md:grid-cols-2	xl:grid-rows-1 xl:grid-cols-4">
              <div className="mb-[16px] px-[12px]">
                <img src={about1} alt="" />
                <div className="pt-[12px] text-[24px] font-medium ">John Smith</div>
                <div className="text-[14px] font-normal">Fashion Design</div>
              </div>
              <div className="mb-[16px] px-[12px]">
                <img src={about2} alt="" />
                <div className="pt-[12px] text-[24px] font-medium ">Christine Wise</div>
                <div className="text-[14px] font-normal">C.E.O</div>
              </div>
              <div className="mb-[16px] px-[12px]">
                <img src={about3} alt="" />
                <div className="pt-[12px] text-[24px] font-medium ">Sean Robbins</div>
                <div className="text-[14px] font-normal">Manager</div>
              </div>
              <div className="mb-[16px] px-[12px]">
                <img src={about4} alt="" />
                <div className="pt-[12px] text-[24px] font-medium ">Lucifer</div>
                <div className="text-[14px] font-normal">Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
