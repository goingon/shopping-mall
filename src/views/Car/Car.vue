<!-- Car -->
<template>
  <div id="cart">
    <NavBar class="navbar">
      <div slot="centerbar">购物车({{cartLength}})</div>
    </NavBar>
    <CartList />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"

  import CartList from "./childCartComps/CartList"

  import { mapGetters } from 'vuex'

  export default {
    name: "Car",
    data() {
      return {
        
      }
    },
    components: {
      NavBar,
      CartList
    },
    methods: {
      
    },
    computed: {
      /* 另一种映射vuex的store的getters到计算属性使用,使用对象自定义名称
        ...mapGetters({
          length: 'cartLength',
          list: 'cartList']
          })
      */
      ...mapGetters(['cartLength'])
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  #cart {
    height: 100vh;
  }
  .navbar {
    position: relative;
    background: var(--color-tint);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    z-index: 9;
  }
</style>