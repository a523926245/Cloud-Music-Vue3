import http from '@service/http.js';
import { Urls } from '@/config/web.config.js';

const homeApi = {
  // 获取轮播图
  getHomeBanner() {
    const banners = [
      {
        linkUrl: '/song',
        songid: 1997438791,
        picUrl: 'http://p1.music.126.net/GivmW0iwb_jj0ar-MCBjzQ==/109951168328786272.jpg?imageView&quality=89',
        picBgUrl: 'http://p1.music.126.net/GivmW0iwb_jj0ar-MCBjzQ==/109951168328786272.jpg?imageView&blur=40x20'
      },
      {
        linkUrl: '/song',
        songid: 2023989489,
        picUrl: 'http://p1.music.126.net/Ld1hMj3ab6g1PoJujpf-zg==/109951168328853352.jpg?imageView&quality=89',
        picBgUrl: 'http://p1.music.126.net/Ld1hMj3ab6g1PoJujpf-zg==/109951168328853352.jpg?imageView&blur=40x20'
      },
      {
        linkUrl: '/song',
        songid: 2016688503,
        picUrl: 'http://p1.music.126.net/2BTlvxRJXs92S8DmrbrpVQ==/109951168328935084.jpg?imageView&quality=89',
        picBgUrl: 'http://p1.music.126.net/2BTlvxRJXs92S8DmrbrpVQ==/109951168328935084.jpg?imageView&blur=40x20'
      },
      {
        linkUrl: '/song',
        songid: 2023200133,
        picUrl: 'http://p1.music.126.net/Ug-qp5hGwN_qgiBCaO_T9Q==/109951168328946422.jpg?imageView&quality=89',
        picBgUrl: 'http://p1.music.126.net/Ug-qp5hGwN_qgiBCaO_T9Q==/109951168328946422.jpg?imageView&blur=40x20'
      }
    ];
    return Promise.resolve(banners);
  },
  // 联想搜索推荐(音乐/视频/电台/用户)
  suggestSearch(params) {
    const response = http(Urls.suggest, 'GET', params);
    return response;
  }
};
export default homeApi;
