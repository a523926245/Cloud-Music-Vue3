<template>
  <!-- 轮播图 -->
  <div class="banner-wrap">
    <!-- 轮播图全屏背景 -->
    <div
      v-if="banners"
      class="banner-wrap-bg"
      :style="{ 'background-image': 'url(' + banners[bannerConfig.active].picBgUrl + ')' }"
    ></div>
    <!-- 轮播区域容器 -->
    <div class="banner-content">
      <!-- 切换按钮 -->
      <div class="banner-btn prev" @click="onPrev"></div>
      <div class="banner-btn next" @click="onNext"></div>
      <!-- 轮播图片 -->
      <div class="banner-img" @mouseenter="onBanMouseEnter" @mouseleave="onBanMouseLeave">
        <img
          :class="['banner-item', bannerConfig.active === index ? 'active' : '']"
          v-for="(banner, index) in banners"
          :key="banner.songid"
          :src="banner.picUrl"
          alt=""
        />
      </div>
      <!-- 下载客户端 -->
      <div class="download">
        <a href="/download" class="download-btn"></a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref, reactive, toRefs } from 'vue';
import homeApi from '@service/api/homeApi';

// 轮播图配置
const bannerConfig = reactive({
  active: 0, // 当前活动图片索引
  delay: 5000 // 轮播间隔
});

// 轮播图数据
const banners = ref(null);
// 查询首页轮播图
const fetchBanners = function () {
  homeApi.getHomeBanner().then((response) => {
    banners.value = response || [];
  });
};

/**
 * 图片切换
 * @param {String} action next:向下切换 prev:向上切换
 */
const toogleImage = function (action = 'next') {
  const { active } = toRefs(bannerConfig);
  const bannerLen = banners.value.length;
  action === 'next' ? active.value++ : active.value--;
  if (active.value > bannerLen - 1) {
    active.value = 0;
  } else if (active.value < 0) {
    active.value = bannerLen - 1;
  }
};

// 定时器
let timer = 0;
/**
 *控制轮播定时器
 * @param {Boolean} stop true:停止  false:启动
 */
const handlerInterval = function (stop = true) {
  // 停止轮播
  if (stop) {
    clearInterval(timer);
    timer = 0;
    return;
  }
  //   自动轮播
  const { delay } = toRefs(bannerConfig);
  timer = setInterval(() => {
    toogleImage();
  }, delay.value);
};

// 进入轮播区域
const onBanMouseEnter = function () {
  // 停止定时器
  handlerInterval(true);
};

// 退出轮播区域
const onBanMouseLeave = function () {
  //   启动定时器
  handlerInterval(false);
};

// 切换上一张
const onPrev = function () {
  toogleImage('prev');
  handlerInterval(true);
  let changeTimer = setTimeout(() => {
    handlerInterval(false);
    changeTimer && clearTimeout(changeTimer);
    changeTimer = 0;
  }, 100);
};

// 切换下一张
const onNext = function () {
  toogleImage('next');
  handlerInterval(true);
  let changeTimer = setTimeout(() => {
    handlerInterval(false);
    changeTimer && clearTimeout(changeTimer);
    changeTimer = 0;
  }, 100);
};

onMounted(() => {
  // 查询首页轮播图
  fetchBanners();
  //   启动定时器
  handlerInterval(false);
});

onBeforeUnmount(() => {
  //   停止定时器
  handlerInterval(true);
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
  .banner-content {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 9;
    .banner-btn {
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -31px;
      width: 37px;
      height: 63px;
      background: url('../../../assets/images/banner.png') no-repeat;
      @extend .cursor;
      &.prev {
        left: 0;
        background-position: 0 -360px;
        &:hover {
          background-position: 0 -430px;
        }
      }
      &.next {
        right: 0;
        background-position: 0 -507px;
        &:hover {
          background-position: 0 -577px;
        }
      }
    }
    .banner-img {
      width: 982px;
      height: 285px;
      position: relative;
      margin: 0 auto;
      z-index: 3;
      .banner-item {
        width: 730px;
        height: 285px;
        display: none;
        &.active {
          display: block;
          animation: fade-in 0.5s linear 0s 1;
        }
      }
    }
    .download {
      position: absolute;
      top: 0;
      z-index: 20;
      right: 57px;
      width: 254px;
      height: 285px;
      background: url('../../../assets/images/download.png') no-repeat left top;
      .download-btn {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        &:hover {
          background: url('../../../assets/images/download.png');
          background-position: 0 9947px;
        }
      }
      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
        font-size: 12px;
      }
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
