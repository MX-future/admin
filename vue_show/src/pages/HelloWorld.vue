<template>
  <div class="hello">
    <some-msg/>
  </div>
</template>

<script>
  import SomeMsg from '../components/SomeMsg'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components: {
    SomeMsg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
