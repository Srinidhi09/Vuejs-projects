import Vue from 'vue'
import Router from 'vue-router'
import Movies from './views/Movies.vue'
import MovieDetails from './views/MovieDetails.vue'

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
})
export default router