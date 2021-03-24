
const app = new Vue({
  el: '#app',
  data: {
    message: "Hello!!",
    firstName: "Daisuke",
  }
})

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleDateString()
  }
})

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  }
})

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Run' },
      { text: 'Practice' },
      { text: 'Read Book' },
    ]
  }
})

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: "Hello, Vue.js!!",
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello!!',
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
