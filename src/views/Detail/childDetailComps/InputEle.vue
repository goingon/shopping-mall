<!-- InputEle -->
<template>
  <div>
    <input type="text" name="passInput" :id="myid" :value = "vmodelData" @input="$emit('changeData',$event.target.value)">
  </div>
</template>

<script>
  export default {
    name: "InputEle",
    model: {
      prop: 'vmodelData',
      event: 'changeData'
    },
    props: {
      vmodelData: {
        type: String,
        default() {
          return ''
        }
      },
      myid: ''
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
  
</style>