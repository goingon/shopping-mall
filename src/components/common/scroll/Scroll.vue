<!-- Scroll -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },

      finishPullUp() {
        // console.log('调用后，可以监听pullingUp事件，不调用不能监听pullingUp不能刷新数据')
        this.scroll && this.scroll.finishPullUp()
      },

      refresh() {
        // console.log('调用后刷新，重新计算content高度，防止拉不到最后')
        this.scroll && this.scroll.refresh()
      },

      // 获取当前位置的y坐标
      getScrollY() {
        return this.scroll && this.scroll.y
      }
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      // 1、创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // this.scroll.scrollTo(0,0)

      // 2、监听滚动事件，获取滚动位置
      if(this.probeType == 2 || this.probeType == 3) {
        this.scroll.on('scroll', position => {
          this.$emit('scrollEvent',position)
        })
      }

      // 3、监听scroll滚动到底部
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('getMoreData')
        })
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  
</style>