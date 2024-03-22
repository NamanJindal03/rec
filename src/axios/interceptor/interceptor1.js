import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://randomuser.me/'
})

axiosInstance.interceptors.request.use(
    (config) => {
        //logging
        //extracting gthe headers and appending it to the api
        //removing certain parameters or search params
        console.log(config);
        return config
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response);
        return response
    }
)

export default axiosInstance;