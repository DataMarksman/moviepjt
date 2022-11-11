<template>
  <div>
    <h1>나옴?</h1>
    <button @click="getInfo">이거</button>
    <MovieCard/>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'


export default {
  name: 'MovieView',
  components: {
    MovieCard
  },
  methods: {
    getInfo() {
      this.$store.dispatch("getInfo")
    }
  }
}
</script>
