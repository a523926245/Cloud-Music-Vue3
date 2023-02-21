<template>
  <!-- 搜索 -->
  <div class="t-search">
    <!-- 搜索入口 -->
    <div class="t-search-box">
      <div class="search-input-wrap">
        <input
          type="text"
          class="t-search-input"
          :placeholder="placeholderText"
          @input="debouceFuzzySearch"
          @focus="onInputFocus"
          @blur="onInputBlur"
        />
      </div>
    </div>
    <!-- 联想搜索结果 -->
    <SuggestSearchProvp
      :suggest-data="suggestHandler.suggestData"
      :suggest-keywords="suggestHandler.suggestKeyWords"
      :show-provp="suggestHandler.showProvp"
    ></SuggestSearchProvp>
  </div>
</template>

<script setup>
import { debounce } from '@utils/utils';
import { ref, reactive, toRefs } from 'vue';
import homeApi from '@service/api/homeApi.js';
import SuggestSearchProvp from '@views/Layout/components/Search/SuggestSearchProvp.vue';

const placeholderText = ref('音乐/视频/电台/用户'); // 输入框占位文案

// 联想搜索行为
const suggestHandler = reactive({
  suggestKeyWords: '', // 联想搜索关键字
  suggestData: null, // 联想搜索结果
  showProvp: false // 是否显示联想结果面板
});

// 联想搜索推荐(音乐/视频/电台/用户)
const debouceFuzzySearch = debounce((e) => {
  const { value } = e.target;
  suggestHandler.suggestKeyWords = value;
  homeApi
    .suggestSearch({
      keywords: value
    })
    .then((res) => {
      suggestHandler.suggestData = res.data.result;
      suggestHandler.showProvp = !!suggestHandler.suggestData;
    });
});

// 输入框聚焦事件
const onInputFocus = function () {
  // 不能对reactive定义的相应变量直接使用解构
  const { suggestData } = toRefs(suggestHandler);
  placeholderText.value = '';

  // 有联想数据时显示联想结果面板,否则不显示
  suggestHandler.showProvp = !!suggestData.value;
};

// 输入框失焦事件
const onInputBlur = function () {
  placeholderText.value = '音乐/视频/电台/用户';
  // 失焦隐藏联想结果面板
  suggestHandler.showProvp = false;
};
</script>

<style lang="scss" scoped>
.t-search {
  width: 158px;
  height: 32px;
  position: relative;
  .t-search-box {
    height: 32px;
    border-radius: 32px;
    @extend .topbar-bg;
    background-position: 0 -99px;
    background-color: #fff;
    .search-input-wrap {
      padding: 3px 0 0 30px;
      .t-search-input {
        width: 95%;
        padding: 0;
        background: transparent;
        border: 0;
        color: #333;
        line-height: 16px;
        margin-top: 5px;
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
  }
}
</style>
