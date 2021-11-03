<template>
  <div>
    <h2>{{ title }}</h2>
    <app-header :title.sync="title"/>
  </div>
</template>

<script>
  import ContactData from './ContactData.vue'
  import EventBus from '../event_bus.js'


  export default {
    name: 'Contact',
    components: {
      appHeader: ContactData
    },
    data() {
      return {
        title: 'Xin chao minh la tran van sy 9009'
      }
    },
    created() {
      EventBus.$on('changeMyName', this.changeMyName)
    },
    methods: {
      changeMyName(e) {
        this.title = e;
      },
    }
  }
</script>
