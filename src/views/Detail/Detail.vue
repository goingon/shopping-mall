<!-- Detail -->
<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content">
      <detail-swiper :detailSwiperImages = "detailSwiperImages"/>
      <detail-goods-info :goodsInfo = "goodsInfo"/>
      <div style="border-top: 5px solid #eee"></div>
      <DetailShopInfo :shopInfo = "shopInfo"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import DetailNavBar from './childDetailComps/DetailNavBar'
  import DetailSwiper from './childDetailComps/DetailSwiper'
  import DetailGoodsInfo from './childDetailComps/DetailGoodsInfo'
  import DetailShopInfo from './childDetailComps/DetailShopInfo'

  import { getDetailInfoes, goodsInfo, shopInfo } from 'network/detail'
  export default {
    name: "Detail",
    data() {
      return {
        iid: '',
        detailSwiperImages: [],
        goodsInfo: {},
        shopInfo: {}
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShopInfo
    },
    methods: {

    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      this.iid = this.$route.params.iid
      getDetailInfoes(this.iid).then(res => {
        console.log(res.result)
        const data = res.result || ''
        this.detailSwiperImages = data.itemInfo.topImages
        this.goodsInfo = new goodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new shopInfo(data.shopInfo)
      })
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      console.log('father M ---- >' + this.goodsInfo)
    },
    destroyed() {
      console.log('father D ---- >' )
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  #detail {
    position: relative;
    height: 100vh;
    background-color: #fff;
    z-index: 99;
  }
  .content {
    /* height: calc(100%-93px);
    overflow: hidden;
    margin-top: 45px; */
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>