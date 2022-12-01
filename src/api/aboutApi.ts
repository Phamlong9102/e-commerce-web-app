import axios from "axios";
import { AboutData } from "../models/about";

const aboutApi = {
  async getDataAbout() {
    const response: AboutData = await axios.get("http://localhost:3000/get/data/about");
    return response;
  },
};

export default aboutApi;
