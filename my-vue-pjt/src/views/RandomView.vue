<template>
  <div>
    <div>
    <button class="btn btn-primary">PICK</button>
    </div>
    <img :src="getImg" alt="" >
    <h5>{{movie.title}}</h5>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'RandomView',
  data() {
    return {
      movies: [],
      movie: {}
    }
  },
  methods: {
    getMovie() {
      this.movies = this.$store.state.movies
      this.movie = _.sample(this.movies)
    }
  },
  computed: {
    getImg() {
      return `https://image.tmdb.org/t/p/w185${this.movie.poster_path}`
    }
  },
  created() {
    this.getMovie()
  }
}
</script>

<style>

</style>
