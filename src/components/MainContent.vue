<template>
  <!--主页-->
  <div id="main-content" >
    <MainTop/>
    <MainCategory/>
    <MainFooter/>
  </div>
</template>

<script>
  import MainTop from './MainTop';
  import MainCategory from './MainCategory';
  import MainFooter from './MainFooter'

  export default {
    name: "main-content",
    components: {
      MainTop, MainCategory, MainFooter
    }
  }
</script>

<style scoped>

</style>
