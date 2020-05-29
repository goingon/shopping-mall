<!-- DetailShopInfo -->
<template>
  <div class="shop-info">
    <div class="shop-info-name">
        <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.shopName}} </span>
    </div>
    <div class="shop-info-other">
      <div class="shop-info-other-sellinfo">
        <div class="shop-info-other-sellinfo-left">
          <div class="num">{{shopInfo.sells}} </div>
          <div class="text">总销量 </div>
        </div>
        <div class="shop-info-other-sellinfo-right">
          <div class="num">{{shopInfo.goodsCount}} </div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-info-other-desc">
        <div class="descok" v-for="(item,index) in shopInfo.score" :key="index">
          <span>{{item.name}} </span>
          <span>{{item.score}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .shop-info {
    padding: 0 5px;
  }
  .shop-info-name {
    margin: 20px 0;
  }
  .shop-info-name img {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid #ddd;
    vertical-align: middle;
  }
  .shop-info-name span {
    padding-left: 10px;
    font-size: 14px;
    color: #333;
  }
  .shop-info-other {
    display: flex;
    text-align: center;
    font-size: 10px;
  }
  .shop-info-other-sellinfo {
    flex: 1;
    display: flex;
    text-align: center;
  }
  .shop-info-other-sellinfo-left {
    flex: 1;
  }
  .shop-info-other-sellinfo-right {
    flex: 1;
  }
  .shop-info-other-sellinfo .num {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .shop-info-other-desc {
    flex: 1;
  }
</style>