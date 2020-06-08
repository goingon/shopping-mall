<!-- CartCheckButton -->
<template>
  <div class="cart-check-button" :class="{'product-checked': isChecked}">
    <img src="~assets/images/cart/checked.svg" alt=""  v-show="isChecked">
  </div>
</template>

<script>
  export default {
    name: "CartCheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    },
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
    width: 15px;
    height: 15px;
    border: 2px solid #999;
    border-radius: 50%;
    transform: translatey(-50%);
  }
  .product-checked {
    border-color: lightcoral;
  }
  .cart-check-button img {
    width: 15px;
    height: 15px;
  }
</style>