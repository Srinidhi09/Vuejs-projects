import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
    getMovieUrl
} from '../utils/constants';

Vue.use(Vuex);

//to handle state
const state = {
    movieDetailsList: []
}

//to handle getters
const getters =  {
    getMovieById: state => {
        // filter movies 
        return id => state.movieDetailsList.filter(item => item.imdbID === id)
    }
}

//to handle actions
const actions = {
    getMovieDetails({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios.get(getMovieUrl(id)).then(response => {
                if (response.status === 200) {
                    // handle OMDB errors
                    if (response.data.Response === "False") {
                        reject(response.data.Error)
                    }
                    commit('POPULATE_MOVIES', response.data);
                    resolve(response.data)
                } else {
                    reject('Non 200 response from OMDB api call. response code: ' + response.status)
                }
            }).catch( err => {
                reject('Error occurred on invoking an API call' + err)
            })
        })
    }
}

//to handle mutations
const mutations = {
    POPULATE_MOVIES(state, movie) {
        state.movieDetailsList.push(movie);
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})