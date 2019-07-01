<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="btn-group">
      <button type="button" class="btn btn-default">left</button>
      <button type="button" class="btn btn-default">center</button>
      <button type="button" class="btn btn-default">right</button>
    </div>
    <component-a></component-a>
  </div>
</template>
<script>

var ComponentA = {
  data: function (){
    return {
      count: 0
    }
  },
  template: '<button v-on:click="greet">You clicked me {{ count }} times.</button>',
  methods: {
    greet: function () {
      console.log('click ')
      $(function () {
        alert('123')
      })
    }
  }
}

export default {
  name: 'HelloWorld',
  components: {
    'component-a': ComponentA
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
