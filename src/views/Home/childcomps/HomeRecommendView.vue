<!-- HomeRecommendView -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default  {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
         default() {
           return []
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
  .recommend {
    display: flex;
    text-align: center;
    font-size: 14px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
    margin: 15px 0 30px;
  }
  .recommend-item img {
    width: 70px;
    margin-bottom: 4px;
  }
</style>