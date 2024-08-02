import axios from "axios";
import { accountService } from "./account.service";

// Paramétrage de base d'axios
const Axios = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use((request) => {
  if (accountService.isLogged()) {
    request.headers.Authorization = "Bearer " + accountService.getToken();
  }
  return request;
});


// Intercepteur de réponse API pour vérification de la session
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      accountService.logout();
      window.location = "/auth/login";
    } else {
      return Promise.reject(error);
    }
  }
);

//_____________________________a tester ___________________________________________//
// Intercepteur de config FormData pour récupérer les données formaData multiples

// axios.interceptors.request.use(
//   (config) => {
//     if (config.data instanceof FormData) {
//         config.headers['Content-Type'] = 'multipart/form-data';
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // //Autre intercepteur pour formData

// axios.interceptors.request.use(config => {
//     if (config.data instanceof FormData) {
//       Object.assign(config.headers, config.data.getHeaders());
//     }
//     return config;
//   });

export default Axios;
