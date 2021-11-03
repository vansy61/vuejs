<template>
  <div id="app">
    <hello-world msg="Console protect detection !!!!">
      <h1>{{content}}</h1>
    </hello-world>
    <button @click="changeContent">change title now</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      content: 'Hello Word Protected Ahiiii!!!'
    }
  },
  methods: {
    changeContent() {
      this.content = 'Xin chao viet nam protected!!!'
    }
  }
}
</script>


<style scoped>
  h1 {
    color: red;
  }
</style>