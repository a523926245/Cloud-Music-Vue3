<template>
  <div class="suggest-data-cell" v-if="datas">
    <div class="suggest-cell-l">
      <i :class="['cell-icon', type]"></i>
      <span>{{ typeLabel }}</span>
    </div>
    <div class="suggest-cell-r">
      <p class="suggest-cell-item" v-for="(item, index) in datas" :key="index">
        {{ item.name }}{{ curItemArtists(item) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  type: String, // 展示类型
  datas: Array // 展示数据源
});

// 当前展示类型名称
const typeLabel = computed(() => {
  const { type } = props;
  const typeConfigs = {
    songs: '单曲',
    artists: '歌手',
    albums: '专辑',
    playlists: '歌单'
  };
  return typeConfigs[type];
});

// 当前展示信息歌手
const curItemArtists = function (item) {
  const { artists, artist } = item;
  let artistsNames = '';
  let artistArray = artists || [];
  if (artist) {
    artistArray = [artist];
  }
  // 无艺术家
  if (!artistArray.length) {
    return artistsNames;
  }
  // 拼接多个艺术家名字
  artistsNames = artistArray
    .map((k) => {
      return k.name;
    })
    .join(' ');

  return artistsNames ? `-${artistsNames}` : artistsNames;
};
</script>

<style lang="scss" scoped>
.suggest-data-cell {
  display: flex;
  .suggest-cell-l {
    width: 63px;
    min-width: 63px;
    padding: 10px 0 0 10px;
    line-height: 17px;
    font-weight: normal;
    display: flex;
    align-items: flex-start;
    .cell-icon {
      width: 14px;
      height: 15px;
      margin: 2px 4px 0 0;
      display: inline-block;
      @extend .icon;
      &.songs {
        background-position: -35px -300px;
      }
      &.artists {
        background-position: -50px -300px;
      }
      &.albums {
        background-position: -35px -320px;
      }
      &.playlists {
        background-position: -50px -320px;
      }
    }
  }
  .suggest-cell-r {
    flex: 1;
    margin-top: -1px;
    padding: 6px 0 5px;
    border-top: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
    overflow: hidden;
    .suggest-cell-item {
      display: block;
      text-indent: 12px;
      line-height: 24px;
      position: relative;
      max-width: 100%;
      @include ellipsis;
      @extend .cursor;
      &:hover {
        background: #e2e2e2;
      }
      &::after {
        @extend .pseudo-class;
        bottom: 0;
        width: 100%;
        height: 0;
        left: 0;
      }
    }
  }
}
</style>
