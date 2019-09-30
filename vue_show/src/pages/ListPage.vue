<template>
    <div class="listpage">
        <h1>文章列表</h1>
        <div class="item_list" v-for='item in dataList' :key='item.id' @click='toDetail(item)'>
            <list-com :Item='item'></list-com>
        </div>
    </div>
</template>

<script>
import ListCom from '../components/ListCom'
export default {
    name: 'ListPage',
    data(){
      return {
        dataList: []
      }
    },
    components: {
        ListCom
    },
    methods: {
        toDetail(item){
            this.$router.push({
                path: '/detail',
                query: {
                    Item: item
                }
            });
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/data')
        .then((res) => {
          console.log(res.data);
          this.dataList = res.data.data;
        }).catch((err) => {
          console.log('请求data接口失败',err)
      });
    }
}
</script>

<style scoped>
    .listpage{
        margin: 40px;
        text-align: center;
    }
    .item_list{
        width: 65%;
        margin: 10px auto;
    }

</style>

