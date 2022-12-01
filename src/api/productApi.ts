import axios from "axios"; 

const productApi = {
    async getAllProduct() {
        const response = await axios.get("http://localhost:3000/get/all/product")
        return response;
    },
    async getProductById(id: any):Promise<any> {
        const response = await axios.get(`http://localhost:3000/get/product/${id}`)
        return response; 
    } 
}

export default productApi; 