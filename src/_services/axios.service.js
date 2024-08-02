import axios from "axios";

const AxiosServ = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: { "Content-Type": "multipart/form-data" },
  });

  
  // AxiosServ.interceptors.request.use(
  //   config => {
  //     console.log('Request config:', config);
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );
  
  // AxiosServ.interceptors.response.use(
  //   response => {
  //     return response;
  //   },
  //   error => {
  //     console.log('Response error:', error);
  //     return Promise.reject(error);
  //   }
  // );
export default AxiosServ;