<template>
    <Card class='listcard' :bordered="false">
        <h2>{{this.Item.title}}</h2>
    </Card>
</template>

<script>
export default {
    name: 'ListCom',
    data() {
      return {

      }
    },
  props: ['Item']
}
</script>

<style scoped>
    .listcard{
        background: rgba(240,255,255,0.8);
    }
    h2{
        display: block;
        height: 60px;
        line-height: 60px;
    }
</style>
