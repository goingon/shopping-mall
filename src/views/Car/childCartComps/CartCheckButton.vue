<!-- CartCheckButton -->
<template>
  <div class="cart-check-button">
    <img src="~assets/images/cart/checked.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CartCheckButton",
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
  .cart-check-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translatey(-50%);
  }
  .cart-check-button img {
    width: 20px;
    height: 20px;
  }
</style>