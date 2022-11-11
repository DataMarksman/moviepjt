<template>
  <div>
    <MovieCard/>
  </div>
</template>

<script>
import MovieCard from '@/components/MoviCard.vue'
// @ is an alias to /src


export default {
  name: 'MovieView',
  components: {
    MovieCard
  }
}
</script>
