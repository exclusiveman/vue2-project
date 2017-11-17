<template>
<div class="page-content-wrapper">
  <div class="hello">
    <h1><span v-bind:title="message">{{ msg }}</span></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <input type="text" id="data" v-model="inm">
    <p>The value of input is: {{ inm }}.</p>
    
    <a href="#/dew"><span class="glyphicon glyphicon-remove">.</span></a>
  </div>
</div>
</template>


<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to my Vue.js project',
      message: 'You loaded this page on ' + new Date(),
      inm: 'Hello World'
    }
  },

  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 80px;
}

ul {
  list-style-type: none;
  padding: 0px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
img {
  border-color: #42b983;
  border-width: 10px;
  border-style: solid;
  border-radius: 10%;
}
</style>
