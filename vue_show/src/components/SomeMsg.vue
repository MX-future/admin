<template>
  <div class="somemsg">
    <div class="avatar">
      <img src="../../static/img/avatar.jpeg" />
      <h1>MX巴赫</h1>
    </div>

    <div class="somebtn">
      <router-link to="/display"><button>项目介绍</button></router-link>
      <router-link to="/list"><button>文章列表</button></router-link>
      <button class="iconfont icon-github" @click="Goto"> GitHub</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SomeMsg',
    methods: {
      Goto(){
        window.open('https://github.com/MX-future');
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .avatar{
    width: 300px;
    height: 300px;
    margin: 80px auto;
    text-align: center;
  }
  .avatar img{
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  .avatar h1{
    margin-top: 30px;
    font-size: 50px;
  }

  .somebtn{
    width: 500px;
    height: 100px;
    margin: 230px auto;
    text-align: center;
  }
  .somebtn button{
    width: 90px;
    height: 45px;
    border-radius: 30px;
    outline: none;
    background: none;
    border: 2px solid white;
    color: white;
    margin: 20px;
  }
  .somebtn button:hover{
    border: none;
    background: lavender;
    color: black;
  }
  .somebtn button span{
    font-size: 16px;
  }
</style>
