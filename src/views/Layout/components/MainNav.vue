<template>
  <ul class="main-nav">
    <li
      :class="activeIndex === index ? 'active' : ''"
      v-for="(nav, index) in navs"
      @click="handlerClickNav(nav, index)"
      :key="index"
    >
      {{ nav.name }}
      <sup v-if="nav.icon" :class="['icon', `icon-${nav.icon}`]"></sup>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 当前活动菜单索引
const activeIndex = ref(null);
// 菜单配置
const navs = [
  { name: '发现音乐', path: '/' },
  { name: '我的音乐', path: '/my' },
  { name: '关注', path: '/friend' },
  { name: '商城', path: '/' },
  { name: '音乐人', path: '/' },
  { name: '下载客户端', path: '/download', icon: 'hot' }
];

const router = useRouter();
// 菜单点击
const handlerClickNav = function (nav, index) {
  const { path } = nav;
  activeIndex.value = index;
  // 跳转路由
  router.push({
    path: path
  });
};
</script>

<style lang="scss" scoped>
.main-nav {
  display: inline-flex;
  li {
    font-size: 14px;
    color: #ccc;
    padding: 0 19px;
    text-align: center;
    line-height: 70px;
    position: relative;
    @extend .cursor;
    .icon {
      display: block;
      position: absolute;
      top: 21px;
      left: 100px;
      width: 28px;
      height: 19px;
      &.icon-hot {
        background-position: -190px 0;
        @extend .topbar-bg;
      }
    }
    &:hover,
    &.active {
      color: #fff;
      background: #000;
    }
  }
}
</style>
