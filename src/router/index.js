import Vue from 'vue'
import Router from 'vue-router'
import Movies from '../components/Movies.vue'
import MovieDetails from '../components/MovieDetails.vue'

Vue.use(Router);

const routes = [
{
    path: '/',
    name: 'Movies',
    component: Movies
},
{
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails
}]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router