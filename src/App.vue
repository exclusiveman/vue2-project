<template>
  <div id="app">
    <img src="./assets/img/fu.jpg">
 

    <div class="bottom-bar">
    <md-bottom-bar class="md-transparent" md-sync-route>
      <md-bottom-bar-item to="/components/home" md-label="Home" md-icon="home" @click="home()"></md-bottom-bar-item>
      <md-bottom-bar-item to="/components/dew" md-label="Dew" md-icon="face" @click="dew()"></md-bottom-bar-item>
    </md-bottom-bar>
  </div>

    <router-view></router-view>
<div>
  <v-footer>
    2017 Copyright <md-icon>copyright</md-icon> made with <md-icon class="md-accent">favorite</md-icon>
  </v-footer>
</div>
  </div>
  
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    home () {
      this.$router.push({ path: '/home' })
    },
    dew () {
      this.$router.push({ path: '/dew' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #736a6b;
  margin-top: 20px;
}

body {

  background:         linear-gradient(to top, #a1d3b0, #f6f1d3);
  background-color: #fff;
  height: 100vh;

  justify-content: center;
  
}

img {
   
  border-radius: 8%;
  box-shadow: 0 10px 20px #736a6b, 0 6px 6px #736a6b;
  
}
</style>
