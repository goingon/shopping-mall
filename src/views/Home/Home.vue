<template>
  <div>
    <nav-bar class="navbar">
      <div slot="centerbar">购够购</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {

    }
  },
  components: {
    NavBar
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
