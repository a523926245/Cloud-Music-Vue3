import homeUrls from './homeUrl';

export const Urls = {
  getLoginStatus: '/login/status', // 获取用户详情
  getUserInfo: '/user/detail', // 登录状态
  loginOut: '/logout', // 退出登录

  ...homeUrls
};
