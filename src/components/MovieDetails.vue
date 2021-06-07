<template>
<div>
  <div v-if="Object.keys(movieDetails).length" class="c-Detail">
    <h1>{{movieDetails.Title}} ({{movieDetails.Year}})</h1>
    <div class="c-Detail__container">
      <div class="c-Detail__poster-wrap">
        <img :src="posterUrl" alt="Movie poster">
        <router-link :to="{ name: 'Movies'}">Back To All Movies</router-link>
      </div>
      <div class="c-Detail__body">
        <p>{{movieDetails.Plot}}</p>
        <p>imDb Rating: <span>{{movieDetails.imdbRating}}/10 ({{movieDetails.imdbVotes}} votes)</span></p>
        <p>Runtime: <span>{{movieDetails.Runtime}}</span></p>
        <p>Rated: <span>{{movieDetails.Rated}}</span></p>
        <p>Released: <span>{{movieDetails.Released}} ({{movieDetails.Country}})</span></p>
        <p>Language: <span>{{movieDetails.Language}}</span></p>
        <p>Genre: <span>{{movieDetails.Genre}}</span></p>
        <p>Actors: <span>{{movieDetails.Actors}}</span></p>
        <p>Writers: <span>{{movieDetails.Writer}}</span></p>
        <p>Awards: <span>{{movieDetails.Awards}}</span></p>
      </div>
    </div>
  </div>
  <div v-else-if="noData" class="c-Detail c-Detail__no-data">
    <h2>{{noData}}</h2>
  </div>
</div>
</template>

<script>
import '../scss/_components.details-page.scss';
import {
    getPosterUrl
} from '../utils/constants';

export default {
  name: 'MovieDetails',
  data() {
    return {
        noData: null,
        movieDetails: {},
        id: this.$route.params.id,
        posterUrl: getPosterUrl(this.$route.params.id,'400')
    };
  },
   created() {
    // get filtered movie from store movies list
    const movie = this.$store.getters.getMovieById(this.id);

    // if movie is not present (initial load or new movie click)
    if (movie.length === 0) {
      // dispatch a store action 
      this.$store.dispatch('getMovieDetails', this.id).then((res) => {
        this.movieDetails = res;
      }).catch((err) => {
        this.noData = 'No Data Found';
        alert(err);
      })
    } else {
      this.movieDetails = movie[0];
    }
  }
}
</script>