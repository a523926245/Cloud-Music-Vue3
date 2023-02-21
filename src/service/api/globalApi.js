import http from '@service/http.js';
import { Urls } from '@/config/web.config.js';

const globalApi = {
  // 获取用户登录状态
  getLoginStatus(params) {
    const response = http(Urls.getLoginStatus, 'GET', params);
    return response;
  },

  // 获取用户详情
  getUserInfo(params) {
    const response = http(Urls.getUserInfo, 'GET', params);
    return response;
  },

  // 退出登录
  loginOut(params) {
    const response = http(Urls.loginOut, 'GET', params);
    return response;
  }
};
export default globalApi;
