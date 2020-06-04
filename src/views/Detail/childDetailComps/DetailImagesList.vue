<!-- DetailImagesList -->
<template>
  <div v-if="Object.keys(imagesList).length">
    <div class="detail-image-list-title">
      <span class="left"></span>
      <h5>{{imagesList.desc}}</h5>
      <span class="right"></span>
    </div>
    <div class="detail-image-list-content">
      <h5>{{imagesList.detailImage[0].key}}</h5>
      <div class="content-iamge" v-for="(src,index) in imagesList.detailImage[0].list" :key="index">
        <img :src="src" alt="" @load="imgLoaded">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailImagesList",
    props: {
      imagesList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    },
    components: {
        
    },
    methods: {
      imgLoaded() {
        this.$emit('detailImgLoaded')
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
      
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .detail-image-list-title {
    margin: 10px 0;
    font-size: 14px;
  }
  .detail-image-list-title span {
    position: relative;
    width: 100px;
    height: 1px;
    border-bottom: 1px solid #ccc;
    display: block;
  }
  .detail-image-list-title .left::before ,
  .detail-image-list-title .right::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #000;
    bottom: 0;
  }
  .detail-image-list-title .right::after {
    top: 0;
    right: 0;
  }
  .detail-image-list-title h5 {
    margin: 0;
    padding: 10px;
    text-align: justify;
    font-weight: 500;
  }
  .detail-image-list-content h5 {
    margin: 10px 0;
  }
  .content-iamge img {
    width: 100%;
  }
</style>