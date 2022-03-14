import axios from "axios";


export const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/",
    params : {
        'api_key':"521babd36b4e171155f7d0cbc7032f74"
      }
})

axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  