import axios from "axios"
const axiosInstance = axios.create({
    baseURL:"https://elegwa.pythonanywhere.com/api",
    headers: {
        // incase you have access token 
        'Content-Type': 'application/json'
    }

})
export default axiosInstance