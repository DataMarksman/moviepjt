import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const api_key = process.env.VUE_APP_API_KEY
const URL = `https://api.themoviedb.org/3/movie/top_rated`

export default new Vuex.Store({
  state: {
    movies: [],
    inputtedmovies: [],
  },
  getters: {
  },
  mutations: {
    GET_INFO(state, movies){
      state.movies = movies
    },
    INPUT_MOVIE(state, inputtedmovie) {
      state.inputtedmovies.push(inputtedmovie)
    }
  },
  actions: {
    getInfo() {
      axios({
        method: 'get',
        url: URL,
        params: {
          api_key: api_key,
          language: 'ko-KR',
          page: 1,
        }
      })
      .then(res => {
        this.commit('GET_INFO', res.data.results)
        
      })
      .catch(err => {
        console.log(URL)
        console.log(err)
      })
    }
  },
  modules: {
  }
})
