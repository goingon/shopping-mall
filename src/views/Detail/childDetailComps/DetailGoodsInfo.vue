<!-- DetailGoodsInfo -->
<template>
  <div class="goods-info" v-if="goodsInfo && Object.keys(goodsInfo).length !== 0">
    <h5>{{goodsInfo.title}}</h5>
    <div class="goods-info-price">
      <span class="new-price">{{goodsInfo.realPrice}}</span>
      <span class="old-price"><del>{{goodsInfo.oldPrice}}</del></span>
      <span class="old-discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="godds-info-num">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length-1].name }}</span>
    </div>
    <div class="godds-info-other">
      <span class="godds-info-other-item" v-for="index in goodsInfo.services.length-1" :key="index">
         <img :src="goodsInfo.services[index-1].icon" alt=""/>
         <span>{{ goodsInfo.services[index-1].name }} </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfo: {
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
  .goods-info {
    padding: 0 5px;
  }
  .goods-info h5 {
    margin: 10px 0 10px;
    font-weight: 500;
  }
  .goods-info-price .new-price {
    font-size: 18px;
    color: var(--color-tint);
    font-weight: 600;
  }
  .goods-info-price .old-price {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    color: #999;
  }
  .goods-info-price .old-discount {
    display: inline-block;
    padding: 2px 5px;
    height: 14px;
    line-height: 14px;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    border-radius: 10px;
  }
  .godds-info-num {
    display: flex;
    margin-top: 15px;
    padding-bottom: 5px;
    border-bottom:  1px solid #eee;
    font-size: 12px;
    color: #999;
  }
  
  .godds-info-num span {
    flex: 1;
  }
  .godds-info-num span:nth-child(2) {
    text-align: center;
  }
  .godds-info-num span:last-child {
    text-align: right;
  }
  .godds-info-other {
    display: flex;
    padding: 20px 0;
    color: #333;
    font-size: 10px;
  }
  .godds-info-other-item {
    flex: 1
  }
  .godds-info-other-item:nth-child(2) {
    text-align: center;
  }
  .godds-info-other-item:last-child {
    text-align: right;
  }
  .godds-info-other-item img {
    width: 10px;
  }
</style>