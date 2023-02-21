<template>
  <div class="banner-wrap">
    <div
      v-if="banners"
      class="banner-wrap-bg"
      :style="{ 'background-image': 'url(' + banners[bannerConfig.active].picBgUrl + ')' }"
    ></div>
    <div class="banner">
      <div
        :class="['banner-item', bannerConfig.active === index ? 'active' : '']"
        v-for="(banner, index) in banners"
        :key="banner.songid"
      >
        <img :src="banner.picUrl" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref, reactive, toRefs } from 'vue';
import homeApi from '@service/api/homeApi';

// 轮播图配置
const bannerConfig = reactive({
  active: 0,
  delay: 3000
});

// 轮播图数据
const banners = ref(null);
// 查询首页轮播图
const fetchBanners = function () {
  homeApi.getHomeBanner().then((response) => {
    banners.value = response || [];
  });
};

let timer = 0;
// 自动轮播
const autoSlideBanner = function () {
  const { active } = toRefs(bannerConfig);
  const bannerLen = banners.value.length;
  if (active.value < bannerLen - 1) {
    active.value++;
  } else {
    active.value = 0;
  }
};

onMounted(() => {
  // 查询首页轮播图
  fetchBanners();

  //   自动轮播
  const { delay } = toRefs(bannerConfig);
  timer = setInterval(() => {
    autoSlideBanner();
  }, delay.value);
});

onBeforeUnmount(() => {
  clearInterval(timer);
  timer = 0;
});
</script>

<style lang="scss" scoped>
.banner-wrap {
  width: 100%;
  height: 285px;
  position: relative;
  .banner-wrap-bg {
    width: 100%;
    height: 285px;
    position: absolute;
    z-index: 1;
    background-size: 6000px;
    background-position: center center;
  }
  .banner {
    width: 982px;
    height: 285px;
    position: relative;
    margin: 0 auto;
    z-index: 3;
    .banner-item {
      width: 100%;
      height: 285px;
      display: none;
      overflow: hidden;
      &.active {
        display: block;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
