// axios的封装处理

// 1、根域名配置
// 2、超市请求
// 3、请求拦截器 / 响应拦截器
import axios from "axios";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});


// 请求拦截器（在请求发送执之前)
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截器（在响应返回到客户端之前)
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { request };
