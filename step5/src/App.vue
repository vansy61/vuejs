<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
  },
  methods: {
    hello() {
      console.log("ok");
    },
  },
};
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
