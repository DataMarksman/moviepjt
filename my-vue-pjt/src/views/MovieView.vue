<template>
  <div>
    <h1>나옴?</h1>
    <MovieCard 
    v-for="movie in movies" 
    :key="movie.id"
    :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'


export default {
  name: 'MovieView',
  data() {
    return {
      movies: this.$store.state.movies
    }
  },
  components: {
    MovieCard
  },
  methods: {
    getInfo() {
      this.$store.dispatch("getInfo")
      
    }
  },
  mounted() {
    this.getInfo()
    
  },
}
</script>
