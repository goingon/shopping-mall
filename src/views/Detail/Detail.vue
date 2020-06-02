<!-- Detail -->
<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="scroll">
      <detail-swiper :detailSwiperImages = "detailSwiperImages"/>
      <detail-goods-info :goodsInfo = "goodsInfo"/>
      <div style="border-top: 5px solid #eee"></div>
      <DetailShopInfo :shopInfo = "shopInfo"/>
      <DetailImagesList :imagesList = "imagesList"/>
      <DetailGoodParams :goodParams = "goodParams"/>
      <DetailCommentInfo :commentInfo = "commentInfo"/>
      <GoodsList :goods = "recommendData"/>
      <!-- {{vmodelData1}} -- {{vmodelData2}}  
      <InputEle v-model="vmodelData1" :myid="'1223'"/>
      <InputEle v-model="vmodelData2" :myid="'2242'"/> -->
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/showGoods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import DetailNavBar from './childDetailComps/DetailNavBar'
  import DetailSwiper from './childDetailComps/DetailSwiper'
  import DetailGoodsInfo from './childDetailComps/DetailGoodsInfo'
  import DetailShopInfo from './childDetailComps/DetailShopInfo'
  import DetailImagesList from './childDetailComps/DetailImagesList'
  import DetailGoodParams from './childDetailComps/DetailGoodParams'
  import DetailCommentInfo from './childDetailComps/DetailCommentInfo'
  
  import InputEle from './childDetailComps/InputEle'

  import { getDetailInfoes, goodsInfo, shopInfo, goodParams, getRecommend } from 'network/detail'
  import { debounce } from 'commonjs/util'
  import { itemListenerMixin } from 'commonjs/mixin'

  export default {
    name: "Detail",
    mixins:[itemListenerMixin],
    data() {
      return {
        iid: '',
        detailSwiperImages: [],
        goodsInfo: {},
        shopInfo: {},
        imagesList: {},
        goodParams: {},
        commentInfo: [],
        recommendData: [],
        detailImageListener: null,
        vmodelData1: 'lzq',
        vmodelData2: 'ldh'
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailImagesList,
      DetailGoodParams,
      DetailCommentInfo,
      GoodsList,
      InputEle
    },
    methods: {

    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      this.iid = this.$route.params.iid

      // 获取详情页面信息
      getDetailInfoes(this.iid).then(res => {
        // console.log(res.result)
        const data = res.result || ''
        // 获取轮播图信息
        this.detailSwiperImages = data.itemInfo.topImages
        
        // 获取商品信息
        this.goodsInfo = new goodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        
        // 获取店铺信息
        this.shopInfo = new shopInfo(data.shopInfo)

        // 获取页面图片信息
        this.imagesList = data.detailInfo

        // 获取商品参数
        this.goodParams = new goodParams(data.itemParams)

        // 获取评论信息
        this.commentInfo = data.rate.list
      })

      // 获取推荐信息
      getRecommend().then(res => {
        // console.log(res)
        this.recommendData = res.data.list
      })
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,200)

      this.detailImageListener = () => {
        refresh()
      }
      this.$bus.$on('detailImgLoaded',this.detailImageListener)
      console.log('2： detailImageListener on')
    },
    beforeDestroy() {
      this.$bus.$off('detailImgLoaded',this.detailImageListener)
      console.log('5： beforeDestroy detailImageListener off')
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