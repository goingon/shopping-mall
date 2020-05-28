<!-- BackTop -->
<template>
  <div class="back-top">
    <img src="~assets/images/common/up.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .back-top {
    position: fixed;
    bottom: 60px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: var(--color-tint);
    border-radius: 30px;
  }
  .back-top img {
    width: 40px;
    height: 40px;
  }
</style>