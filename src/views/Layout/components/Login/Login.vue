<template>
  <!-- 登录按钮 -->
  <a class="t-login" @click="login" v-if="!isLogin">登录</a>
  <!-- 用户信息 -->
  <div class="t-user" v-else>
    <!-- 头像 -->
    <img class="t-user-avatar" :src="userInfo.userAvatar" alt="" />
    <!-- 用户面板 -->
    <ul class="t-m-lists">
      <li v-for="(nav, index) in userNav" :key="index" @click="onNavClick(nav)">
        <i :class="nav.icon"></i>
        {{ nav.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import userGlobalStore from '@store/global';
import useLoginModal from '@/hooks/LoginModalHooks.js';

// 使用路由
const $Router = useRouter();

// 读取store
const { isLogin, userInfo } = userGlobalStore();

// 用户菜单数据
const userNav = ref([
  { name: '我的主页', icon: 'icon-hm', path: '/user/home', count: 0 },
  { name: '我的消息', icon: 'icon-msg', path: '/msg', count: 0 },
  { name: '我的等级', icon: 'icon-level', path: '/user/level', count: 0 },
  { name: 'VIP会员', icon: 'icon-mbr', path: '/member', count: 0 },
  { name: '个人设置', icon: 'icon-st', path: '/user/update', count: 0 },
  { name: '实名认证', icon: 'icon-verify', path: '/user/verfiy?', count: 0 },
  { name: '退出', icon: 'icon-ex', path: '', count: 0 }
]);

// 点击登录
const { open } = useLoginModal();
const login = function () {
  open();
};

// 点击个人信息菜单
const onNavClick = function ({ path }) {
  if (!path) {
    return;
  }
  $Router.push(path);
};

// 退出登录
const loginOut = function () {};
</script>

<style lang="scss" scoped>
.t-login,
.t-user {
  @extend .cursor;
  color: #787878;
  margin-left: 20px;
}
.t-login {
  &:hover {
    color: #999;
    text-decoration: underline;
  }
}
.t-user {
  height: 45px;
  margin-top: 20px;
  position: relative;
  &:hover {
    .t-m-lists {
      display: block;
    }
  }
  .t-user-avatar {
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    background: #f5f5f5;
  }
  .t-m-lists {
    width: 158px;
    position: absolute;
    top: 38px;
    right: -64px;
    background: #2b2b2b;
    border: 1px solid #202020;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    z-index: 100;
    display: none;
    li {
      position: relative;
      height: 38px;
      box-sizing: border-box;
      overflow: hidden;
      padding-left: 24px;
      color: #ccc;
      line-height: 39px;
      @include flexLayout(flex-start);
      @extend .cursor;
      &:hover {
        background: #353535;
        text-decoration: none;
        color: #fff;
      }
      i {
        float: left;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        @extend .userlist-bg;
        &.icon-hm {
          background-position: 0 -80px;
        }
        &.icon-msg {
          background-position: -20px -120px;
        }
        &.icon-level {
          background-position: 0 -100px;
        }
        &.icon-mbr {
          background-position: 0 -221px;
        }
        &.icon-st {
          background-position: 0 -140px;
        }
        &.icon-verify {
          background-position: -20px -142px;
        }
        &.icon-ex {
          background-position: 0 -200px;
        }
      }
    }
  }
}
</style>
