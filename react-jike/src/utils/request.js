// axios的封装处理

// 1、根域名配置
// 2、超市请求
// 3、请求拦截器 / 响应拦截器
import axios from "axios";
import { getToken, removeToken } from "./token";
import router from "@/router";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 50000,
});


// 请求拦截器（在请求发送执之前)
request.interceptors.request.use(
  (config) => {
    // token注入
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截器（在响应返回到客户端之前)
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    // 监听10
    if (err.response.status === 401) {
      removeToken()
      router.navigate('/login')
      window.location.reload()
    }
    // if (err.response.status === 401) {
    //   removeToken();
    //   router.navigate("/login");
    //   window.location.reload();
    // }
    return Promise.reject(err);
  }
);

export { request };
