<template>
  <div class="card col-4">
    <img :src="imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{movie.title}}</h5>
      <p class="card-text">{{movie.overview}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'MovieCard',
  props:{
    movie : Object
  },
  computed: {
    imgUrl() {
      return `https://image.tmdb.org/t/p/w185${this.movie.poster_path}`
    }
  }
}
</script>

<style>
.card {
  width: 300px;
}
</style>