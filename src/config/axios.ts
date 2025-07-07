import { BASE_URL } from "@/constants/endpoints";
import axios from "axios";
import { showToast } from "@/utils/index";
const token = "MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4";

const axiosHandler = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Basic  ${token}`,
    "Content-Type": "application/json",
  },
});
axiosHandler.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      showToast("اتصال به سرور برقرار نیست");
    } else if (error.response.status >= 500) {
      showToast("مشکلی در سرور اتفاق افتاده است.");
    }

    return Promise.reject(error);
  }
);
export default axiosHandler;
