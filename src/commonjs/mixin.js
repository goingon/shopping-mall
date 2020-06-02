import { debounce } from 'commonjs/util'

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImageListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoaded', this.itemImageListener)
    console.log('1： mixin itemImgLoaded on')
  },
  beforeDestroy() {
    this.$bus.$off('itemImgLoaded', this.itemImageListener)
    console.log('4： mixin beforeDestroy itemImgLoaded off')
  },
  activated() {
    this.$bus.$on('itemImgLoaded', this.itemImageListener)
    console.log('6： mixin activated itemImgLoaded on')
  },
  deactivated() {
    this.$bus.$off('itemImgLoaded', this.itemImageListener)
    console.log('3： mixin deactivated itemImgLoaded off')
  }
}