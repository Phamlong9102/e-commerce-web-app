import axios from "axios";

const aboutApi = {
  async getDataAbout() {
    const response: any = await axios.get("http://localhost:3002/about");
    return response;
  },
};

export default aboutApi;
