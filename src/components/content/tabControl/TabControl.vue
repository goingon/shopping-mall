<!-- TabControl -->
<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(title,index) in titles"
      :key="index"
      @click="showCurrent(index) ">
      <span :class="{active: currentIndex === index}"> {{ title }} </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      showCurrent(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .tab-control {
    display: flex;
    position: sticky;
    top: 44px;
    left: 0;
    right: 0;
    text-align: center;
    color: #000;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 0 5px;
    padding-bottom: 3px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }
</style>