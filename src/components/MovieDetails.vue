<template>
  <div class="c-Detail">
    <h1>{{movieDetails.Title}} ({{movieDetails.Year}})</h1>
    <div class="c-Detail__container">
      <div class="c-Detail__poster-wrap">
        <img :src="posterUrl" alt="Movie poster">
        <router-link :to="{ name: 'Movies'}">Back to all movies</router-link>
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
</template>

<script>
import '../scss/_components.details-page.scss'

export default {
  name: 'MovieDetails',
  data() {
    return {
        storeMovieList: [],
        posterUrl: 'http://img.omdbapi.com/?i='+this.$route.params.id+'&apikey=18e276e3&h=400'
    };
  },
  computed: {
    movieDetails() {
      let storeMovieFinal = {};
      this.storeMovieList.forEach(storeMovie =>{
        if (storeMovie.imdbID === this.$route.params.id) {
          storeMovieFinal = storeMovie;
        }
      })
      return storeMovieFinal;
    }
  },
   created() {
    this.storeMovieList = this.$store.getters.getMovieDetails;
    if (this.storeMovieList.length > 0){
       if (!this.isExist()) {
          this.$store.dispatch("getMovieDetails", {id: this.$route.params.id});
       }
    } else {
       this.$store.dispatch("getMovieDetails", {id: this.$route.params.id});
    }
  }, 
  methods : {
    isExist (){
      for(var i=0; i < this.storeMovieList.length; i++){
        if( this.storeMovieList[i].imdbID == this.$route.params.id){
          return true;
        }
      }
      return false;
    },
    redirectToHome() {
      window.location.href = '/';
    }
  }
}
</script>