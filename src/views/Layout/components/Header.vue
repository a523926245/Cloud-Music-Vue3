<template>
  <div class="header">
    <!-- 头部主菜单 -->
    <div class="header-box">
      <div class="header-body">
        <div class="header-l">
          <div class="logo">
            <a href="/#"></a>
          </div>
          <!-- 主菜单 -->
          <MainNav></MainNav>
        </div>
        <div class="header-r">
          <!-- 搜索入口 -->
          <Search></Search>
          <!-- 创作者中心 -->
          <a href="/login" class="t-creator-center">创作者中心</a>
          <!-- 登录 -->
          <Login></Login>
        </div>
      </div>
    </div>
    <!-- 头部子菜单 -->
    <div class="header-subNav"></div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

import MainNav from '@/views/Layout/components/MainNav.vue';
import Login from '@/views/Layout/components/Login/Login.vue';
import Search from '@/views/Layout/components/Search/Search.vue';
import globalApi from '@service/api/globalApi';

onMounted(() => {
  globalApi.getUserInfo({ uid: 32953014 }).then((res) => {
    console.log('[ res :]', res);
  });
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #c20c0c;
  .header-box {
    height: 70px;
    background: #242424;
    border-bottom: #000;
    .header-body {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .header-l {
        .logo {
          float: left;
          width: 176px;
          height: 69px;
          @extend .topbar-bg;
          background-position: 0 0;
          a {
            float: left;
            width: 157px;
            height: 100%;
            padding-right: 20px;
            text-indent: -9999px;
          }
        }
      }
      .header-r {
        display: flex;
        align-items: center;
        font-size: 12px;

        .t-creator-center {
          width: 90px;
          height: 32px;
          margin-left: 12px;
          box-sizing: border-box;
          padding-left: 16px;
          border: 1px solid #4f4f4f;
          background-position: 0 -140px;
          line-height: 33px;
          color: #ccc;
          border-radius: 20px;
          &:hover {
            color: #fff;
            border: 1px solid #fff;
          }
        }
      }
    }
  }
  .header-subNav {
    height: 35px;
  }
}
</style>
