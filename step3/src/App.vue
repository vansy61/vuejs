


<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Contact></Contact>
  </div>
</template>

<script>
  import Contact from './components/Contact.vue'

  export default {
    name: 'App',
    data() {
      return {
        title: 'Xin chao minh la van sy'
      }
    },
    components: {
      Contact
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
