<template>
  <div>
    <h2>{{ title }}</h2>
    <app-header :title.sync="title"/>
  </div>
</template>

<script>
  import ContactData from './ContactData.vue'



  export default {
    name: 'Contact',
    components: {
      appHeader: ContactData
    },
    data: function() {
      return {
        title: 'Xin chao minh la tran van sy 9009'
      }
    }
  }
</script>
