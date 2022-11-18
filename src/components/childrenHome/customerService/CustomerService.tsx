import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function CustomerService() {
  return (
    <>
      <div className="my-[48px]">
        <div className="container px-[12px] mx-auto">
          <div className="block md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1	lg:gap-[18px]">
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <LocalShippingIcon className="font-size-flexible-icon" />
              </div>
              <div className="style-text-service-above">Vận Chuyển Nhanh</div>
              <div className="style-text-service-under">Chi phí hợp lý, giao hàng nhanh chóng</div>
            </div>
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <AdminPanelSettingsIcon  className="font-size-flexible-icon"/>
              </div>
              <div className="style-text-service-above">Bảo Mật Thông Tin</div>
              <div className="style-text-service-under">Bảo mật 100% thông tin khách hàng</div>
            </div>
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <CreditScoreIcon  className="font-size-flexible-icon"/>
              </div>
              <div className="style-text-service-above">Thanh Toán Nhanh Chóng & Dễ Dàng</div>
              <div className="style-text-service-under">
                Thanh toán nhanh chóng và dễ dàng với rất nhiều phương thức
              </div>
            </div>
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <SupportAgentIcon  className="font-size-flexible-icon"/>
              </div>
              <div className="style-text-service-above">Chăm Sóc Khách Hàng</div>
              <div className="style-text-service-under">
                Dịch vụ chăm sóc khách hàng luôn được đặt lên hàng đầu
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
