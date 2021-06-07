<template>
<div class="c-Home__container">
    <h1>Mini Netflix</h1>
    <div class="c-Home__wrapper">
        <div v-for="poster in posters" class="c-Home__block" :key="poster">
            <img :src="poster.posterURL" width="200px" height="200px" v-on:click="goToDetailsPage(poster.imdbID)">
        </div>
    </div>
</div>
</template>

<script>
import '../scss/_components.home-page.scss'

export default {
    name: 'Movies',
    data() {
        return {
            posters: []
        };
    },
    mounted: function() {
        let imdbIds = ['tt0454921', 'tt5753856', 'tt0111161', 'tt0944947', 'tt0386676', 'tt0398286', 'tt2294629', 'tt0903747'];
        for(var i=0; i < imdbIds.length; i++) {
            var self = this;
            self.posters.push({
                posterURL: 'http://img.omdbapi.com/?i='+imdbIds[i]+'&apikey=18e276e3&h=500',
                imdbID: imdbIds[i]
            });
        }
    },
    methods: {
        goToDetailsPage: function(id) {
            this.$router.push("/movie/"+id);
        }
    }
}
</script>