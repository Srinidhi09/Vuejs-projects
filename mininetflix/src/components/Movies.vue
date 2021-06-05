<template>
<div class="c-Main__container">
    <h1>Netflix</h1>
    <div class="c-Main__wrapper">
        <div v-for="tp in titleAndPoster" class="c-Main__block" :key="tp">
            <img :src="tp.posterPath" width="200px" height="200px">
            <h3>{{tp.title}}</h3>
        </div>
    </div>
</div>
</template>

<script>
//import axios from 'axios';

export default {
  name: 'Movies',
  data() {
    return {
        titleAndPoster: []
    };
  },
  mounted: function() {
    // Avengers, frozen, avatar, inception, 2012 
    let imdbIds = ['tt0848228', 'tt2294629', 'tt0499549', 'tt1375666', 'tt1190080'];

    for(var i=0; i < imdbIds.length; i++) {
        var self = this;
        let movieUrl = 'http://www.omdbapi.com/?i='+imdbIds[i]+'&apikey=18e276e3';
        let posterUrl = 'http://img.omdbapi.com/?i='+imdbIds[i]+'&apikey=18e276e3&h=500';

        console.log(movieUrl);
        console.log(posterUrl);

        self.$http.get(movieUrl).then(function(response){
            if(response.status == "200"){
                self.titleAndPoster.push({
                    title: response.data.Title,
                    posterPath: posterUrl
                });
            }
        });
    }
  }
}
</script>

<style>
.c-Main__container {
    margin: 1em;
}
.c-Main__wrapper {
    display: flex;
    justify-content: space-between;
}
</style>