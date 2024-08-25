import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getCookie, removeCookie, setCookie } from "../cookies/cookie";
import NotificationService from "../notification/NotificationService";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json, text/plain, */*, multipart/form-data",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (originalRequest.data instanceof FormData) {
      originalRequest.headers["Content-Type"] = "multipart/form-data";
    } else {
      originalRequest.headers["Content-Type"] = "application/json";
    }
    if (originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getCookie("refreshToken");
      if (refreshToken) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/auth/reissue`, {
            refreshToken,
          })
          .then((response) => {
            const newAccessToken = response.data.data.accessToken;
            const newRefreshToken = response.data.data.refreshToken;

            setCookie("accessToken", newAccessToken, { path: "/" });
            setCookie("refreshToken", newRefreshToken, {
              path: "/",
              maxAge: "2600000",
            });
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          })
          .catch((refreshError) => {
            NotificationService.error("토큰이 만료되었습니다.");
            setTimeout(() => {
              window.location.href = "/login";
            }, 100);
            removeCookie("accessToken");
            removeCookie("refreshToken");
            return Promise.reject(refreshError);
          });
      }
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
