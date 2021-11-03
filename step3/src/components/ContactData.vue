<template>
  <div>
    <h3>{{ title }}</h3>
    <p>Phone: {{ showName }}</p>
    <p><small>Name: {{ showPhone }}</small></p>
    <button @click="toggleInfo">Show / Hide</button>
    <button @click="changeTitleNow">change title</button>
  </div>
</template>

<script>
  import EventBus from '../event_bus.js'

  function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
      }
        return result;
  }

  export default {
    props: ['title'],
    name: 'ContactData',
    data() {
      return {
        phone: '0983379782',
        name: 'Tran van sy',
        status_show: false
      }
    },
    computed: {
      showName: function() {
        if(this.status_show) {
          return this.name;
        }
        return '********************';
      },
      showPhone: function() {
        if(this.status_show) {
          return this.phone;
        }
        return '********************';
      }
    },
    methods: {
      toggleInfo: function() {
        this.status_show = !this.status_show;
        EventBus.$emit('changeMyName', 'Hello hehehehehehehe !!!!!!!!!!!')
      },
      changeTitleNow: function() {
        this.$emit('update:title', makeid(1000))
      }
    }
  }
</script>