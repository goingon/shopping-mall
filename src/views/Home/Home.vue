<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="centerbar">购够购</div>
    </nav-bar>
    <scroll class="content">
      <home-swiper :banners='banners'/>
      <home-recommend-view :recommends = 'recommends'/>
      <week-fashion/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="getCurrentGoodsData"/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/showGoods/GoodsList'

  import HomeSwiper from './childcomps/HomeSwiper'
  import HomeRecommendView from './childcomps/HomeRecommendView'
  import WeekFashion from './childcomps/WeekFashion'

  import { getHomeMultidata, getHomeGoodsLists } from 'network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        currentTab: 'pop',
        goods: {
          pop: {
            page: 0,
            datas: []
          },
          new: {
            page: 0,
            datas: []
          },
          sell: {
            page: 0,
            datas: []
          }
        },
        images: [
          {id: '1', image: require('assets/images/swipe/1.jpg')},
          {id: '2', image: require('assets/images/swipe/2.jpg')},
          {id: '3', image: require('assets/images/swipe/3.jpg')}
        ]
      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      HomeSwiper,
      HomeRecommendView,
      WeekFashion
    },
    computed: {
      getCurrentGoodsData() {
        return this.goods[this.currentTab].datas
      }
    },
    methods: {
      /**  
       * 组件元素事件
      */
      tabClick(index) {
        console.log(index)
        switch(index){
          case 0:
            this.currentTab = 'pop'
            break
          case 1:
            this.currentTab = 'new'
            break
          case 2:
            this.currentTab = 'sell'
            break
          default:
            this.currentTab = 'pop'
            break
        }
      },

      /** 
       * 获取轮播图和推荐数据
      */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res)
          // console.log(res.data.banner.list)
          this.banners = res ? res.data.banner.list : this.images
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoodsLists(type) {
        let page = this.goods[type].page + 1
        getHomeGoodsLists(type, page).then(res => {
          console.log(res.data.list)
          console.log(this.goods)
          // this.goods[type].datas.push([...res.data.list])
          this.goods[type].datas = this.goods[type].datas.concat(res.data.list)
          this.goods[type].page ++
        })
      }
    },
    mounted() {

      //请求轮播图和推荐数据
      this.getHomeMultidata();

      //请求商品列表数据
      this.getHomeGoodsLists('pop');
      this.getHomeGoodsLists('new');
      this.getHomeGoodsLists('sell');
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    padding-top: 45px;
    height: 100vh;
  }
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--color-tint);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    z-index: 9;
  }
  .content {
    /* height: calc(100%-93px);
    overflow: hidden;
    margin-top: 45px; */
    position: absolute;
    top: 45px;
    bottom: 47px;
    left: 0;
    right: 0;
  }
</style>
