<!-- CartList -->
<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <ul>
        <CartListItem v-for="item in cartList" :key="item.iid" :product = "item"/>
      </ul>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'

  import { mapGetters } from 'vuex'
  export default {
    name: "CartList",
    data() {
      return {
        scrollY: 0
      }
    },
    components: {
      Scroll,
      CartListItem
    },
    methods: {
      
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.scrollY,0)
    },
    deactivated() {
      // 记录页面当前坐标
      this.scrollY = this.$refs.scroll.getScrollY()
      console.log(this.scrollY)
    },
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
    padding: 0 5px;
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>