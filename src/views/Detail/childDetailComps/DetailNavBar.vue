<!-- DetailNavBar -->
<template>
  <nav-bar class="detail-navbar">
    <div slot="leftbar" class="left-bar" @click="back">
      <img src="~assets/images/common/left.svg"/>
    </div>
    <div class="center-bar" slot="centerbar">
      <div class="center-bar-title" v-for="(title,index) in titles"
                :key="index" 
                :class="{active: index === currentIndex}"
                @click="navClick(index)"> {{title}} </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    props: {
      detailIndex: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
        NavBar
    },
    methods: {
      back() {
        this.$router.back()
        // this.$router.go(-1)
      },
      navClick(index) {
        this.currentIndex = index
        this.$emit('detailNavClick',index)
      }
    },
    watch: {
      detailIndex(val) {
        this.currentIndex = val
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .detail-navbar {
    z-index: 999;
    position: relative;
    background-color: #fff;
  }
  .active {
    color: var(--color-high-text);
  }
  .left-bar {
    text-align: center;
  }
  .left-bar img {
    margin-top: 14px;
    width: 15px;
  }
  .center-bar {
    display: flex;
  }
  .center-bar-title {
    flex: 1;
    text-align: center;
    font-size: 13px;
    line-height: 44px;
  }
</style>