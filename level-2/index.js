let data = {
  author: 'van sy'
}
Vue.component('my-template', {
  props: ['title', 'content'],
  data: function() {
    return {...data}
  },
  methods: {
    changeAuthor: function() {
      this.author = this.title;
    }
  },
  template: `
    <div>
      <div>{{ title }}</div>
      <div>{{ content }}</div>
      <div>{{ author }}</div>
      <button @click="changeAuthor">change author now</button>
    </div>
  `
})


Vue.component('my-template-2', {
  props: ['title', 'content'],
  data: function() {
    return {...data}
  },
  methods: {
    changeAuthor: function() {
      this.author = this.title;
    }
  },
  template: `
    <div>
      <div>{{ title }}</div>
      <div>{{ content }}</div>
      <div>{{ author }}</div>
      <button @click="changeAuthor">change author now</button>
    </div>
  `
})

new Vue({
  el: '#app',
  data: {
    posts: [
      {
        id: 1,
        title: 'Day la bai viet so 1!',
        content: 'Xin chao day la noi dung bai viet so 1!'
      },
      {
        id: 2,
        title: 'Day la bai viet so 2!',
        content: 'Xin chao day la noi dung bai viet so 2!'
      },
      {
        id: 3,
        title: 'Day la bai viet so 3!',
        content: 'Xin chao day la noi dung bai viet so 3!'
      },
      {
        id: 4,
        title: 'Day la bai viet so 4!',
        content: 'Xin chao day la noi dung bai viet so 4!'
      }
    ]
  },
  beforeCreate: function() {
    console.log('heheheh')
  }
})