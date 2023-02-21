<template>
  <div class="login-wrap" v-if="isShow">
    <div class="login-box">
      <h3 class="login-title">
        登录
        <i class="icon-close" @click="close"></i>
      </h3>
      <div class="login-content">
        <div class="content">
          <div class="content-desc">
            <img
              class="desc-image"
              src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
              alt=""
            />
            <div class="qrcode-box">
              <h3>扫码登陆</h3>
              <div class="qrcode">
                <canvas width="128" height="128"></canvas>
              </div>
              <p>使用 <a href="/download">网易云音乐APP</a> 扫码登录</p>
            </div>
          </div>
          <a href="javascript:;" class="btn-other-login">选择其他登录模式</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineExpose } from 'vue';
import useLoginModal from '@/hooks/LoginModalHooks.js';

const isShow = ref(true); // 是否显示登录弹窗
/**
 * 显示登录弹窗
 * @param {*} show: 是否显示 true | false
 */
const open = function () {
  isShow.value = true;
};

/**
 * 隐藏登录弹窗
 */
const close = function () {
  isShow.value = false;
  const { close } = useLoginModal();
  close();
};

defineExpose({
  /**
   * 使用setup语法的RFC，是私有的，必须主动暴露属性，外部才可以访问
   * 例如通过:$refs, $parents, 组件注册 等...
   */
  isShow,
  open,
  close
});
</script>

<style lang="scss" scoped>
.login-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9997;
  background: rgba($color: #000000, $alpha: 0.5);
  pointer-events: auto;
  .login-box {
    width: 530px;
    box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
    position: relative;
    z-index: 9998;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login-title {
      position: relative;
      margin: 0;
      padding: 0 45px 0 18px;
      height: 38px;
      line-height: 38px;
      z-index: 10;
      border-bottom: 1px solid #191919;
      border-radius: 4px 4px 0 0;
      background: #2d2d2d;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      .icon-close {
        position: absolute;
        z-index: 20;
        top: 16px;
        right: 20px;
        width: 10px;
        height: 10px;
        overflow: hidden;
        text-indent: -9999px;
        cursor: pointer;
        background: url(@/assets/images/login-title-bg.png) no-repeat;
        background-position: 0 -95px;
      }
    }
    .login-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: auto;
      padding: 0;
      border: 1px solid #d8d8d8;
      border-width: 0 1px 1px;
      border-radius: 0 0 4px 4px;
      background: #fff;
      .content {
        display: flex;
        height: 326px;
        @include flexLayout(center, center, column);
        .btn-other-login {
          display: block;
          width: 118px;
          height: 30px;
          margin: 20px auto 0;
          font-size: 12px;
          border: 1px solid #979797;
          border-radius: 15px;
          line-height: 27px;
          text-align: center;
          color: rgba(0, 0, 0, 0.8);
        }
        .content-desc {
          @include flexLayout;
          .desc-image {
            width: 125px;
            height: 220px;
          }

          .qrcode-box {
            position: relative;
            margin-left: 25px;
            width: 200px;
            text-align: center;
            h3 {
              font-size: 18px;
              font-weight: 500;
              color: #333;
            }
            .qrcode {
              width: 138px;
              height: 138px;
              padding: 4px;
              margin: 13px auto;
              pointer-events: auto;
              canvas {
                background: #ff6600;
              }
            }
            p {
              font-size: 12px;
              width: 200px;
              line-height: 17px;
              color: rgba(0, 0, 0, 0.4);
              a {
                color: #0c73c2;
              }
            }
          }
        }
      }
    }
  }
}
</style>
