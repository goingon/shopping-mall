import { debounce } from 'commonjs/util'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImageListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoaded', this.itemImageListener)
    console.log('1： mixin itemImgLoaded on')
  },
  beforeDestroy() {
    this.$bus.$off('itemImgLoaded', this.itemImageListener)
    console.log('4： mixin beforeDestroy itemImgLoaded off')
  },
  activated() {
    //this.$bus.$on('itemImgLoaded', this.itemImageListener)
    //console.log('6： mixin activated itemImgLoaded on')
  },
  deactivated() {
    this.$bus.$off('itemImgLoaded', this.itemImageListener)
    console.log('3： mixin deactivated itemImgLoaded off')
  }
}

export const backTopMixin = {
  data() {
    return {
      isBackTopShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}