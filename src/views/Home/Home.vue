<template>
  <div>
    <nav-bar class="navbar">
      <div slot="centerbar">购够购</div>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childcomps/HomeSwiper'
import { getHomeMultidata } from 'network/home'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      images: [
        {id: '1', src: require('assets/images/swipe/1.jpg')},
        {id: '2', src: require('assets/images/swipe/2.jpg')},
        {id: '3', src: require('assets/images/swipe/3.jpg')}
      ]
    }
  },
  components: {
    NavBar,
    HomeSwiper
  },
  mounted() {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res ? res.banners: this.images;
    })
  }
}
</script>

<style scoped>
  .navbar {
    background: var(--color-tint);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
</style>
