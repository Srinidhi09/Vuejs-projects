<template>
  <div class="c-Main__containerr">
    <div class="c-Main__poster-wrap">
      <img :src="posterUrl" alt="">
      <h3>{{movieDetails.Title}}</h3>
    </div>
    <div class="c-Main__detail-body">
      <p><em>imDb Rating</em>: {{movieDetails.imdbRating}}/10</p>
      <p><em>imDb Votes</em>: {{movieDetails.imdbVotes}}</p>
      <p><em>Runtime</em>: {{movieDetails.Runtime}}</p>
      <p><em>Rated</em>: {{movieDetails.Rated}}</p>
      <p><em>Released</em>: {{movieDetails.Released}}</p>
      <p><em>Country</em>: {{movieDetails.Country}}</p>
      <p><em>BoxOffice</em>: {{movieDetails.BoxOffice}}</p>
      <p><em>Language</em>: {{movieDetails.Language}}</p>
      <p><em>Actors</em>: {{movieDetails.Actors}}</p>
      <p><em>Director</em>: {{movieDetails.Director}}</p>
      <p><em>Writer</em>: {{movieDetails.Writer}}</p>
      <p><em>Genre</em>: {{movieDetails.Genre}}</p>
      <p><em>Awards</em>: {{movieDetails.Awards}}</p>
      <p><em>Production</em>: {{movieDetails.Production}}</p>
      <p><em>Plot</em>: {{movieDetails.Plot}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MovieDetails',
  data() {
    return {
        storeMovieList: [],
        posterUrl: 'http://img.omdbapi.com/?i='+this.$route.params.id+'&apikey=18e276e3&h=520'
    };
  },
  computed: {
    movieDetails() {
      let storyMovieFinal = {};
      this.storeMovieList.forEach(storeMovie =>{
        if (storeMovie.imdbID === this.$route.params.id) {
          storyMovieFinal = storeMovie;
        }
      })
      return storyMovieFinal;
    }
  },
   mounted() {
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
    isExist : function(){
      for(var i=0; i < this.storeMovieList.length; i++){
        if( this.storeMovieList[i].imdbID == this.$route.params.id){
          return true;
        }
      }
      return false;
    }
  }
}
</script>

<style>
.c-Main__containerr{
  color: #fff;
  display: flex;
  width: 85%;
  margin: 1em auto;
}

.c-Main__poster-wrap {
  margin-right: 1em;
  border: 1px solid #303030;
}

.c-Main__poster-wrap img {
  margin-bottom: 1em;
}

.c-Main__detail-body {
  text-align: justify;
}
</style>