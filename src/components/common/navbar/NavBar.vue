<!-- NavBar组件 -->
<template>
  <div class="navbar">
    <div class="left">
      <slot name="leftbar"></slot>
    </div>
    <div class="center">
      <slot name="centerbar"></slot>
    </div>
    <div class="right">
      <slot name="rightbar"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */
  .navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 3px rgba(22, 21, 21, .5);
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
</style>