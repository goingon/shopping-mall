<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="centerbar">购够购</div>
    </nav-bar>
    <home-swiper :banners='banners'/>
    <home-recommend-view :recommends = 'recommends'/>
    <week-fashion/>
    <tab-control :titles="['流行','新款','精选']" />
    <ul>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
      <li>123234</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import HomeSwiper from './childcomps/HomeSwiper'
  import HomeRecommendView from './childcomps/HomeRecommendView'
  import WeekFashion from './childcomps/WeekFashion'

  import { getHomeMultidata } from 'network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        images: [
          {id: '1', image: require('assets/images/swipe/1.jpg')},
          {id: '2', image: require('assets/images/swipe/2.jpg')},
          {id: '3', image: require('assets/images/swipe/3.jpg')}
        ]
      }
    },
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      HomeRecommendView,
      WeekFashion
    },
    mounted() {
      getHomeMultidata().then(res => {
        console.log(res)
        console.log(res.data.banner.list)
        this.banners = res ? res.data.banner.list : this.images
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 45px;
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
</style>
