import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//when there is a error, this error handler will be called first
//use Promise rejection to pass to catch block
//handle unexpected errors globally
axios.interceptors.response.use(null, error => {
  const expertedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expertedError) {
    logger.log("Logging the error", error);
    toast.error("an unexperted error occurred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
