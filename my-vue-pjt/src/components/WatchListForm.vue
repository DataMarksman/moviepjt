<template>
  <div>
    <div>
      <h2>보고 싶은 영화</h2>
    </div>
    <input type="text" 
    v-model="inputtedmovie"
    @keyup.enter="inputMovie"
    >
    <button @click="inputMovie">Add</button>
    
  </div>
</template>

<script>
export default {
  name:'WatchListForm',
  data() {
    return {
      inputtedmovie : null
    }
  },
  methods: {
    inputMovie() {
      this.$store.commit('INPUT_MOVIE', this.inputtedmovie)
      this.inputtedmovie = null
      
    }
  }
}
</script>

<style>

</style>