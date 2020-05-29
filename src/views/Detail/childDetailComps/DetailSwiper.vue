<!-- DetailSwiper -->
<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item,index) in detailSwiperImages" :key="index"  style="width: 100%; height: 200px; overflow: hidden">
      <img v-lazy="item"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';

  export default {
    name: "DetailSwiper",
    props: {
      detailSwiperImages: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  /* .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  } */
</style>