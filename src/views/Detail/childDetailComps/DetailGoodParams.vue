<!-- DetailGoodParams -->
<template>
  <div v-if="goodParams && Object.keys(goodParams).length" class="good-params">
    <ul>
      <li v-for="(item,index) in goodParams.sizeParams" :key="index" class="good-params-size">
        <span v-for="(param,index) in item" :key="index">{{param}}</span>
      </li>
    </ul>
    <ul>
      <li class="good-params-factory" v-for="(item,index) in goodParams.factoryParams" :key="index">
        <span class="good-params-factory-name left"> {{item.key}} </span>
        <span class="good-params-factory-content right"> {{item.value}} </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodParams",
    props: {
      goodParams: {
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
  .good-params {
    padding: 20px 5px 0;
    border-top: 5px solid #ddd;
    font-size: 12px;
  }
  .good-params-size {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    color: #666;
  }
  .good-params-size:last-child {
    border-bottom: 3px solid #ddd;
  }
  .good-params-size span {
    flex: 1;
  }
  .good-params-factory {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    color: #666;
  }
  .good-params-factory-name {
    width: 80px;
  }
  .good-params-factory-content {
    text-align: left;
    color: var(--color-tint);
  }
</style>