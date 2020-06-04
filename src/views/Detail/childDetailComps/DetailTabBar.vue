<!-- DetailTabBar -->
<template>
  <div class="detail-tabbar">
    <div class="detail-tabbar-left left">
      <div class="detail-tabbar-left-icon">
        <img src="~assets/images/detail/cservice.svg" alt="">
        <span>客服</span>
      </div>
      <div class="detail-tabbar-left-icon">
        <img src="~assets/images/detail/shop.svg" alt="">
        <span>店铺</span>
      </div>
      <div class="detail-tabbar-left-icon">
        <img src="~assets/images/detail/collection.svg" alt="">
        <span>收藏</span>
      </div>
    </div>
    <div class="detail-tabbar-right right">
      <div class="detail-tabbar-shoppingcar">加入购物车</div>
      <div class="detail-tabbar-buying">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTabBar",
    data() {
      return {
        
      }
    },
    components: {
        
    },
    methods: {
      
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .detail-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    width: 100%;
    background-color: #fff;
  }
  .detail-tabbar-left,
  .detail-tabbar-right {
    display: flex;
    width: 50%;
    height: 49px;
    font-size: 12px;
    text-align: center;
  }
  .detail-tabbar-left-icon {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .detail-tabbar-left-icon img {
    width: 20px;
    padding-bottom: 3px;
  }
  .detail-tabbar-shoppingcar {
    flex: 1;
    background-color: rgb(240, 240, 58);
    line-height: 49px;
  }
  .detail-tabbar-buying {
    flex: 1;
    background-color:var(--color-tint);
    line-height: 49px;
    color: #fff;
    font-weight: 600;
  }
</style>