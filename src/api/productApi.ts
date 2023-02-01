import axios from "axios";

const productApi = {
  async getAllProduct() {
    const response = await axios.get("http://localhost:3002/products/all");
    return response;
  },
  async getProductById(id: any): Promise<any> {
    const response = await axios.get(`http://localhost:3002/products/${id}`);
    return response;
  },
};

export default productApi;
