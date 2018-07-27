<template>
  <div>
    <h1>Index 组件</h1>
    <h5 v-text="site"></h5>
    <h5 v-html="url"></h5>
    <h5>{{details()}}</h5>
    <h5>{{data}}</h5>
  </div>
</template>

<script>
  export default {
    props:["data"],
    data() {
      return{
        site: "菜鸟教程",
        url: "www.runoob.com",
        alexa: "10000"
      }
    },
    methods: {
      details: function () {
        return this.site + " - 学的不仅是技术，更是梦想！";
      }
    }
  }


</script>

<style scoped>

</style>
