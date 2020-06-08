<!-- CartTotalBar -->
<template>
  <div class="cart-total-bar">
    <div class="cart-total-bar-check">
      <CartCheckButton :isChecked="isCheckedAll" @click.native="checkedAll"/>
    </div>
    <div class="cart-total-bar-all">
      <span>全选</span>
      <span class="cart-total-bar-all-total">合计：</span>
      <span class="cart-total-bar-all-price">{{totalPrice}}</span>
    </div>
    <span class="cart-total-bar-all-calc">去结算({{checkedLength}})</span>
  </div>
</template>

<script>
  import CartCheckButton from './CartCheckButton'
import { mapGetters } from 'vuex'
  export default {
    name: "CartTotalBar",
    data() {
      return {
        
      }
    },
    components: {
      CartCheckButton
    },
    methods: {
      checkedAll() {
        if(this.isCheckedAll) {
          this.cartList.forEach(item => item.isChecked = false)
        } else {
          this.cartList.forEach(item => item.isChecked = true)
        }
      }
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + (this.cartList.filter(item => item.isChecked)
          .reduce((preValue, item) => {
            return preValue + item.price*item.count
          }, 0)).toFixed(2)
      },
      checkedLength() {
        return this.cartList.filter(item => item.isChecked).length
      },
      isCheckedAll() {
        return this.cartList.length ? this.cartList.length === this.checkedLength : false
      }
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
  .cart-total-bar {
    position: fixed;
    bottom: 49px;
    padding-left:5px;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #ddd;
    color: #333;
  }
  .cart-total-bar-check {
    display: inline-block;
    width: 25px;
    transform: translateY(55%);
  }
  .cart-total-bar-all {
    display: inline-block;
    line-height: 40px;
  }
  .cart-total-bar-all-total {
    padding-left: 20px;
  }
  .cart-total-bar-all-price {
    font-size: 14px;
    color: var(--color-tint);
  }
  .cart-total-bar-all-calc {
    float: right;
    padding: 0 5px;
    background-color: var(--color-tint);
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
</style>