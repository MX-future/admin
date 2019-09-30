<template>
    <div class="display">
      <h1>Projects Introduce</h1>
      <msg-card class="allcard" v-for="(item,index) in CardMsg.length" :key="item.id" :Index=index :Msg=CardMsg />
    </div>
</template>

<script>
  import MsgCard from '../components/MsgCard'
    export default {
        name: "DisPlay",
      data(){
        return {
          CardMsg: [
            { imgurl: '../../../static/img/0.jpeg',
              title: 'Vue+vant+node实现一个简单的音乐搜索器',
              desc: '使用Hbuilder将vue项目打包为手机App，主要功能是通过搜索歌曲名获取歌曲下载地址，使用node封装接口',
              classify: 'Vue+vant',
              pageurl: 'https://mp.weixin.qq.com/s/fiUSZ5xH_l4YrUDIPfwHBA'
            },
            { imgurl: '../../../static/img/1.jpeg',
              title: 'Puppeteer小案例---爬取ES6教程并批量保存为PDF',
              desc: '主要实现思路是分析好网页结构，提取所需内容交由Puppeteer处理，更新实现了合并功能',
              classify: 'node',
              pageurl: 'https://mp.weixin.qq.com/s/XN0iI-Ojc82y02bQYi8Cdw'
            },
            { imgurl: '../../../static/img/2.jpeg',
              title: 'vue移动端组件库 Vant初体验',
              desc: '使用Vue+Vant制作的手机端翻译工具，同样使用Hbuilder打包，初步熟悉了移动端UI组件Vant的使用',
              classify: 'Vue+vant',
              pageurl: 'https://mp.weixin.qq.com/s/SZEQPg3DDGSP4EgKum_WZQ'
            },
            { imgurl: '../../../static/img/3.jpeg',
              title: 'node+MongoDB实现简单的注册登录',
              desc: '使用ejs作为视图模板引擎，MongoDB存储用户信息，实现一个简单的注册登录功能，提供简单的用户输入验证',
              classify: 'node',
              pageurl: 'https://mp.weixin.qq.com/s/F4d3Aj8nUfL5-D62iiSl3A'
            },
            { imgurl: '../../../static/img/4.jpeg',
              title: '基于SQLite的Android记事本',
              desc: '当初学习Android时所制作的一个小软件，原生开发，使用手机自带数据库SQLite存储数据，配合数据库操作框架LitePal，小巧便捷',
              classify: 'Android',
              pageurl: 'https://mp.weixin.qq.com/s/lemAQWTThx3u6zypjo7www'
            },
            { imgurl: '../../../static/img/5.jpeg',
              title: 'ionic开发之记事本',
              desc: '使用跨平台框架ionic制作的一个简单记事本，主要功能有笔记的增删查改',
              classify: 'ES6',
              pageurl: 'https://mp.weixin.qq.com/s/vgbZueTea4eF5zanggMJqg'
            },
            { imgurl: '../../../static/img/6.jpeg',
              title: '用jQuery制作一个简单的轮播图',
              desc: '使用JQuery实现一个常见的轮播图',
              classify: 'JQuery',
              pageurl: 'https://mp.weixin.qq.com/s/CcSoZP8M6s4wLVqH6oY7cg'
            }
          ]
        }
      },
        components: {
          MsgCard
        },
    }
</script>

<style scoped>
  .display{
    text-align: center;
  }
  .display h1{
    margin-top: 30px;
    color: aliceblue;
  }
  .allcard{
    display: inline-block;
  }


</style>
