<template>
    <div class="artdetail">
        <div class="art_title">
            <h1>{{item.title}}</h1>
        </div>
        <div class="content" v-html='item.content'>
            {{item.content}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArtDetail',
    data() {
        return {
            item: []
        }
    },
    mounted() {
        //路由接受值
      this.item = this.$route.query.Item;
    }
}
</script>

<style scoped>
    .art_title{
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    .content{
        width: 40%;
        margin: 20px auto;
        background: rgba(240,255,255,0.8);
        min-height: 700px;
        padding: 40px;
        border-radius: 30px;
        font-size: 18px;
    }
</style>
