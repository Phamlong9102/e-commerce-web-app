import axios from "axios";

const bannerApi = {
  async getDataBanner() {
    const response: any = await axios.get("http://localhost:3000/get/banner");
    return response;
  },
};

export default bannerApi;
