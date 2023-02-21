import { defineStore } from 'pinia';

const userGlobalStore = defineStore('global', {
  state: () => ({
    isLogin: false,
    userInfo: {
      userAvatar: 'http://p4.music.126.net/pgUuNMZPYOVoCXgGAGsd1Q==/109951164926952014.jpg?param=30y30',
      userName: '姚朝阳',
      userAccout: 'a523926245',
      userId: 1234567
    }
  })
});

export default userGlobalStore;
