<template>
    <div class="msgcard" @click="Goto(PageIndex)">
      <div class="image">
        <img :src=CardMsg[PageIndex].imgurl />
      </div>
      <div class="desc">
        <span>{{CardMsg[PageIndex].title}}</span>
        <p>{{CardMsg[PageIndex].desc}}</p>
      </div>
      <div class="classify">
        <span>{{CardMsg[PageIndex].classify}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MsgCard",
      data(){
        return{
          PageIndex: '',
          CardMsg: []
        }
      },
      methods: {
          Goto(index){
            window.open(this.CardMsg[index].pageurl);
          }
      },
      beforeMount() {
          this.PageIndex = this.Index;
          this.CardMsg = this.Msg;
      },
      props: ['Index','Msg']
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.msgcard{
  width: 260px;
  height: 330px;
  margin: 40px;
}
.msgcard:hover{
  transform: scale(1.1);
}
.msgcard .image{
  width: 260px;
  height: 170px;
  position: relative;
}
.msgcard img{
  width: 260px;
  height: 170px;
}
/*.msgcard .image h3{*/
  /*position: absolute;*/
  /*left: 5px;*/
  /*bottom: 10px;*/
  /*color: indianred;*/
/*}*/


.msgcard .desc{
  width: 260px;
  height: 120px;
  background: rgb(230,240,240);
  text-align: center;
  border-bottom: 1px solid silver;
}
.msgcard .desc span{
  margin: 5px;
}
.msgcard .desc p{
  padding: 10px;
  color: gray;
  font-size: 14px;
}


.msgcard .classify{
  width: 260px;
  height: 40px;
  background: rgb(230,240,240);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
  opacity: 0.9;
}
.msgcard .classify span{
  display: inline-block;
  font-size: 1px;
  text-align: center;
  width: auto;
  height: 20px;
  line-height: 20px;
  background: linear-gradient(right,deepskyblue,dodgerblue);
  border-radius: 15px;
  color: aliceblue;
  margin-top: 6px;
  padding: 4px;
}
</style>
