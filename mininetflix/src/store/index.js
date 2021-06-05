import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
movieDetails: []
}

const getters =  {
    getMovieDetails: state => {
      return state.movieDetails
    }
}

//to handle actions
const actions = {
    getMovieDetails({ commit }, { id }) {
        axios.get('http://www.omdbapi.com/?i='+id+'&apikey=18e276e3').then(response => {
            commit('SET_MOVIE_DETAILS', response.data)
        })
    }
}

//to handle mutations
const mutations = {
    SET_MOVIE_DETAILS(state, movieDetails) {
        state.movieDetails.push(movieDetails)
    }
}

//export store module
export default new Vuex.Store({
state,
getters,
actions,
mutations
})