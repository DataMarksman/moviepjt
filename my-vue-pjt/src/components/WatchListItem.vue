<template>
  <div>
    <div v-for="(movie, index) in inputtedmovies" :key=index>
      <p> {{ movie }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'WatchListItem',
  data() {
    return {
      
    }
  },
  computed: {
    inputtedmovies() {
      return  this.$store.state.inputtedmovies
    }
  }
}
</script>

<style>

</style>