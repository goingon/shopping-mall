<!-- CartListItem -->
<template>
  <div class="cart-list-item">
    <div class="cart-list-item-check">
      <CartCheckButton/>
    </div>
    <img :src="product.image" alt="">
    <div class="cart-list-item-text">
      <div class="cart-list-item-text-title"> <div class="ellipsis">{{product.title}}</div> </div>
      <div class="cart-list-item-text-desc"> <div class="ellipsis">{{product.desc}}</div> </div>
      <div class="cart-list-item-text-price"><span class="left">￥{{product.price}}</span><span class="right">X {{product.count}}</span></div>
    </div>
  </div>
</template>

<script>
  import CartCheckButton from './CartCheckButton'
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    },
    components: {
      CartCheckButton
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
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;  /* 设置为伸缩盒子模型 */
    -webkit-line-clamp: 1;  /* 设置如果文字比一行多，第一行行显示省略号，配合设置盒子的高度height为两行文字的高度 */
    -webkit-box-orient: vertical;  /* 设置或者检索伸缩盒子对象的子元素的排列方式 */
    margin-bottom: 5px;
  }
  .cart-list-item {
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }
  .cart-list-item-check {
    transform: translatey(50%);
  }
  .cart-list-item img {
    width: 80px;
    padding-left: 5px;
  }
  .cart-list-item-text {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cart-list-item-text-title {
    flex: 1;
    font-size: 14px;
    color: #333;
  }
  .cart-list-item-text-desc {
    flex: 1;
    font-size: 12px;
    color: #999;
  }
  .cart-list-item-text-price {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .cart-list-item-text-price .left {
    color: var(--color-tint);
  }
</style>