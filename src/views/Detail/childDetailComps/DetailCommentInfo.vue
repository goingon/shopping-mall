<!-- DetailCommentInfo -->
<template>
  <div  v-if="commentInfo && commentInfo.length" class="detail-comment-info">
    <div class="dc-info-title clear-fix">
      <span class="left">
        用户评论
      </span>
      <span class="right">
        更多
      </span>
    </div>
    <div class="dc-info-content" v-for="(item,index) in commentInfo" :key="index">
      <div class="dc-info-content-user">
        <img :src="item.user.avatar" alt="">
        <span> {{item.user.uname}} </span>
      </div>
      <p class="dc-info-content-comment">
        {{item.content}}
      </p>
      <div class="dc-info-content-good">
        <span class="dc-info-content-good-time"> {{item.created | showDate}} </span>
        <span> {{item.style}} </span>
      </div>
      <div class="dc-info-content-img">
        <span v-for="(img,index) in item.images" :key="index">
          <img :src="img" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from 'commonjs/util'
  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      showDate(value) {
        let nowDate = new Date(value * 1000)
        return formatDate(nowDate,'yyyy年MM月dd日')
      }
    }
  }
</script>

<style scoped>
/* @import url(); 引入css类 */
  .detail-comment-info {
    margin: 20px 0;
    padding: 10px 5px 0;
    border-top: 5px solid #ddd;
    border-bottom: 5px solid #ddd;
  }
  .dc-info-title {
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 2px solid #ddd;
  }
  .dc-info-content {
    margin-bottom: 20px;
  }
  .dc-info-content-user {
    padding: 5px 0;
    font-size: 12px;
    color: #333;
  }
  .dc-info-content-user img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 15px;
  }
  .dc-info-content-user span {
    padding-left: 5px;
  }
  .dc-info-content-comment {
    margin: 5px 0;
    font-size: 12px;
    color: #666;
  }
  .dc-info-content-good {
    padding: 5px 0;
    font-size: 12px;
    color: #999;
  }
  .dc-info-content-img img {
    width: 60px;
    margin-left: 5px;
  }
</style>