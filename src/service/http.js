import { config } from '@vue/test-utils';
import axios from 'axios';
import qs from 'qs';

const serivce = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 7000, // 请求超时时间
  method: 'get',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 请求拦截器
serivce.interceptors.request.use(
  (config) => {
    const { method } = config;
    if (method.toUpperCase === 'POST') {
      config.params = qs.stringify(config.params);
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
serivce.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 公共请求方法
 * @param {*} url: 请求地址
 * @param {*} method: 请求方式
 * @param {*} params: 请求参数
 */
const http = function (url, method, params) {
  return serivce({ url, method: method, params }).then((res) => {
    return res;
  });
};

export default http;
