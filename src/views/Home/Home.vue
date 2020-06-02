<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="centerbar">购够购</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                  @tabClick="tabClick"
                  ref="tabcontrolout"
                  v-show="isTabControlShow"
                  class="show-tab-control"/>
    <scroll class="content"
            ref = "scroll"
            :probeType = "3"
            @scrollEvent = "scrollEvent"
            :pullUpLoad = "true"
            @getMoreData = "getMoreData">
      <home-swiper :banners='banners' @swiperImagesLoaded = 'swiperImagesLoaded' />
      <home-recommend-view :recommends = 'recommends'/>
      <week-fashion/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrolinner"/>
      <goods-list :goods="getCurrentGoodsData"/>
    <!-- <ul>
      <li>aaa1</li>
      <li>aaa2</li>
      <li>aaa3</li>
      <li>aaa4</li>
      <li>aaa5</li>
      <li>aaa6</li>
      <li>aaa7</li>
      <li>aaa8</li>
      <li>aaa9</li>
      <li>aaa10</li>
      <li>aaa11</li>
      <li>aaa12</li>
      <li>aaa13</li>
      <li>aaa14</li>
      <li>aaa15</li>
      <li>aaa16</li>
      <li>aaa17</li>
      <li>aaa18</li>
      <li>aaa19</li>
      <li>aaa20</li>
      <li>aaa21</li>
      <li>aaa22</li>
      <li>aaa23</li>
      <li>aaa24</li>
      <li>aaa25</li>
      <li>aaa26</li>
      <li>aaa27</li>
      <li>aaa28</li>
      <li>aaa29</li>
      <li>aaa30</li>
      <li>aaa31</li>
      <li>aaa32</li>
      <li>aaa33</li>
      <li>aaa34</li>
      <li>aaa35</li>
      <li>aaa36</li>
      <li>aaa37</li>
      <li>aaa38</li>
      <li>aaa39</li>
      <li>aaa40</li>
      <li>aaa41</li>
      <li>aaa42</li>
      <li>aaa43</li>
      <li>aaa44</li>
      <li>aaa45</li>
      <li>aaa46</li>
      <li>aaa47</li>
      <li>aaa48</li>
      <li>aaa49</li>
      <li>aaa50</li>
      <li>aaa51</li>
      <li>aaa52</li>
      <li>aaa53</li>
      <li>aaa54</li>
      <li>aaa55</li>
      <li>aaa56</li>
      <li>aaa57</li>
      <li>aaa58</li>
      <li>aaa59</li>
      <li>aaa60</li>
      <li>aaa61</li>
      <li>aaa62</li>
      <li>aaa63</li>
      <li>aaa64</li>
      <li>aaa65</li>
      <li>aaa66</li>
      <li>aaa67</li>
      <li>aaa68</li>
      <li>aaa69</li>
      <li>aaa70</li>
      <li>aaa71</li>
      <li>aaa72</li>
      <li>aaa73</li>
      <li>aaa74</li>
      <li>aaa75</li>
      <li>aaa76</li>
      <li>aaa77</li>
      <li>aaa78</li>
      <li>aaa79</li>
      <li>aaa80</li>
      <li>aaa81</li>
      <li>aaa82</li>
      <li>aaa83</li>
      <li>aaa84</li>
      <li>aaa85</li>
      <li>aaa86</li>
      <li>aaa87</li>
      <li>aaa88</li>
      <li>aaa89</li>
      <li>aaa90</li>
      <li>aaa91</li>
      <li>aaa92</li>
      <li>aaa93</li>
      <li>aaa94</li>
      <li>aaa95</li>
      <li>aaa96</li>
      <li>aaa97</li>
      <li>aaa98</li>
      <li>aaa99</li>
      <li>aaa100</li>
    </ul> -->
    </scroll>
    <back-top @click.native="backTop" ref="backtop" v-show="isBackTopshow"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/showGoods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childcomps/HomeSwiper'
  import HomeRecommendView from './childcomps/HomeRecommendView'
  import WeekFashion from './childcomps/WeekFashion'

  import { getHomeMultidata, getHomeGoodsLists } from 'network/home'
  import { debounce } from 'commonjs/util'
  import { itemListenerMixin } from 'commonjs/mixin'

  export default {
    name: 'Home',
    mixins: [itemListenerMixin],
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
        ],
        isBackTopshow: false,
        tabOffsetTop: 0,
        isTabControlShow: false,
        scrollY: 0
      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
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
      //点击栏目，切换数据
      tabClick(index) {
        // console.log(index)
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
        this.$refs.tabcontrolout.currentIndex = index
        this.$refs.tabcontrolinner.currentIndex = index
      },

      //返回顶部
      backTop() {
        this.$refs.scroll.scrollTo(0,0)
      },

      //加载更多数据
      getMoreData() {
        this.getHomeGoodsLists(this.currentTab)
      },

      //滚动事件，获取当前位置
      scrollEvent(position) {
        this.isBackTopshow = position.y <= -500 ? true : false
        this.isTabControlShow = (-position.y) >= this.tabOffsetTop
      },

      // 轮播图加载完成
      swiperImagesLoaded() {
        // 获取tab-control的位置
        // 所有的组件都有一个$el的属性，获取组件内部元素
        this.tabOffsetTop = this.$refs.tabcontrolinner.$el.offsetTop;
      },

      /** 
       * 获取轮播图和推荐数据
      */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res ? res.data.banner.list : this.images
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoodsLists(type) {
        let page = this.goods[type].page + 1
        getHomeGoodsLists(type, page).then(res => {
          this.goods[type].datas = this.goods[type].datas.concat(res.data.list)
          this.goods[type].page ++

          // this.$refs.scroll.finishPullUp()
          // 延迟两秒调用finishPullUp，即两秒后才会监听pullingUp事件，发起交易获取数据
          // 如果不延迟，可以在一页的多次上划，多次调用pullingUp交易获取数据
          debounce(this.$refs.scroll.finishPullUp,2000)()
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
      // const refresh = debounce(this.$refs.scroll.refresh,200)

      // this.$bus.$on('itemImgLoaded',() => {
      //   refresh()
      // })
      console.log('wo jin lai home')
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.scrollY,0)
    },
    deactivated() {
      // 记录页面当前坐标
      this.scrollY = this.$refs.scroll.getScrollY()
    },
    beforeDestroy() {
      // 因为keep-alive缓存了，离开不会调用这个方法
      this.$bus.$off('itemImgLoaded')
      console.log('beforeDestroy off')
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .navbar {
    /* 原生的时候才会有用，使用better-scroll后没用了 */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    position: relative;
    background: var(--color-tint);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    z-index: 9;
  }
  .show-tab-control {
    position: relative;
    z-index: 9;
  }
  .content {
    /* height: calc(100%-93px);
    overflow: hidden;
    margin-top: 45px; */
    position: absolute;
    top: 44px;
    bottom: 47px;
    left: 0;
    right: 0;
  }
</style>
