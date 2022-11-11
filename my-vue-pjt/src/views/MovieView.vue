<template>
  <div class="container">
    <h1>나옴?</h1>
    
    <div class="card-group row">
      <MovieCard 
      v-for="movie in movies" 
      :key="movie.id"
      :movie="movie"
      />
    </div>
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
      console.log(this.$store.state.movies)
    }
  },
  created() {
    this.getInfo()
    
  },
}
</script>
