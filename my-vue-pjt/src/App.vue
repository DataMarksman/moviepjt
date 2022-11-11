<template>
  <div id="app">
    <router-link :to="{ name: 'movies'}">movies</router-link> |
    <router-link :to="{ name: 'random'}">random</router-link> |
    <router-link :to="{ name: 'watch'}">watch-list</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
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
