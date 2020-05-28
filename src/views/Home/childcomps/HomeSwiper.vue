<!-- HomeSwiper -->
<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item) in banners" :key="item.id">
      <a :href="item.link">
        <img v-lazy="item.image" style="width: 100%; height: 200px; " @load="imageLoaded" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    methods: {
      imageLoaded() {
        if(!this.isLoad){
          this.$emit('swiperImagesLoaded')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>