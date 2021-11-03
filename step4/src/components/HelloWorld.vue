<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p>{{msg}}</p>
    <slot></slot>
  </div>
</template>


<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        title: 'Hello, ahihi do ngox !',
        content: 'This is long content'
      }
    }
  }
</script>
<style scoped>
  h1 {
    color: blue;
  }
</style>