<template>
  <div class="suggest-provp" v-if="showProvp">
    <!-- 跳转用户搜索入口 -->
    <p class="suggest-keywords">
      <span>搜{{ suggestKeywords }} 相关用户 ></span>
    </p>
    <!-- 联想搜索结果展示 -->
    <div class="suggest-result">
      <div v-if="suggestData">
        <!-- 单曲/歌手/专辑/歌单 -->
        <SuggestDataCell
          :type="orderKey"
          :datas="suggestData[orderKey]"
          v-for="orderKey in suggestData.order"
          :key="orderKey"
        ></SuggestDataCell>
      </div>
      <div class="suggest-result-empty" v-else>无结果</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import SuggestDataCell from '@views/Layout/components/Search/SuggestDataCell.vue';

// 定义props
const props = defineProps({
  suggestKeywords: String, // 联想搜索关键字
  suggestData: Object, // 联系数据
  // 是否显示弹框
  showProvp: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.suggest-provp {
  top: 38px;
  width: 240px;
  position: absolute;
  z-index: 120;
  left: 0;
  box-sizing: border-box;
  border: 1px solid #bebebe;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px 0 rgb(255 255 255 / 90%);
  .suggest-keywords {
    height: 40px;
    padding: 11px 10px;
    border-bottom: 1px solid #e2e2e2;
    span {
      @extend .cursor;
      &:hover {
        background: #e3e5e7;
        color: #666;
        text-decoration: underline;
      }
    }
  }
  .suggest-result {
    .suggest-result-empty {
      padding: 11px 10px;
    }
  }
}
</style>
