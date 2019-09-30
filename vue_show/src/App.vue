0<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background: url('../static/img/bg.jpg') fixed no-repeat;
    background-size: 100%,100%;
  }
  /*!*加层滤镜*!*/
  /*.lvjing{*/
    /*background: rgba(20,20,20,0.25);*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*z-index: -1;*/
  /*}*/

</style>
