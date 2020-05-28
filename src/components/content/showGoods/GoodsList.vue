<!-- GoodsList -->
<template>
  <div class="goods-lists">
    <goods-list-item v-for="item in goods" :key="item.iid" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        
      }
    },
    components: {
      GoodsListItem
    },
    methods: {
      
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      // console.log('------->' + this.goods)
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .goods-lists {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    padding: 0 5px;
  }

</style>