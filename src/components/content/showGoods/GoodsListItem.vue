<!-- GoodsListItem -->
<template>
  <div class="goods-list-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
      <p class="goods-list-item-title"> {{ goodsItem.title }} </p>
      <div class="num">
        <span class="price">{{ goodsItem.price }} </span>
        <span class="cfav">{{ goodsItem.cfav }} </span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .goods-list-item {
    flex: 40%;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-bottom: 10px;
    font-size: 12px;
  }
  .goods-list-item:nth-child(odd){
    padding-right:5px;
  }
  .goods-list-item:nth-child(even){
    padding-left:5px;
  }
  .goods-list-item-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;  /* 设置为伸缩盒子模型 */
    -webkit-line-clamp: 1;  /* 设置如果文字比两行多，第二行显示省略号，配合设置盒子的高度height为两行文字的高度 */
    -webkit-box-orient: vertical;  /* 设置或者检索伸缩盒子对象的子元素的排列方式 */
    margin-bottom: 5px;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 8px;
  }
  .goods-list-item:hover img {
    box-shadow: 1px 1px 5px #666;
  }
  .goods-list-item .num {
    color: var(--color-tint);
  }
  .goods-list-item .num .price {
    margin-right: 20px;
  }
</style>