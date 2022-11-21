import axios from "axios"; 

const userApi = {
    async login(data: any): Promise<any> {
        const response = await axios.post("http://localhost:3000/login", {username: data.payload.userName, password: data.payload.password})
        return response;
    },
    async register(data: any): Promise<any> {
        const response = await axios.post("http://localhost:3000/register", {userName: data.payload.userName, email: data.payload.email, password: data.payload.password})
        return response;
    } 
}

export default userApi; 



