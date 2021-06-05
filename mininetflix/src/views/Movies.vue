<template>
<div class="c-Main__container">
    <h1>Mini Netflix</h1>
    <div class="c-Main__wrapper">
        <div v-for="poster in posters" class="c-Main__block" :key="poster">
            <img :src="poster.posterURL" width="200px" height="200px" v-on:click="goToDetailsPage(poster.imdbID)">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Movies',
    data() {
        return {
            posters: []
        };
    },
    mounted: function() {
        let imdbIds = ['tt0848228', 'tt2294629', 'tt0499549', 'tt1375666', 'tt1190080']

        for(var i=0; i < imdbIds.length; i++) {
            var self = this;
            self.posters.push({
                posterURL: 'http://img.omdbapi.com/?i='+imdbIds[i]+'&apikey=18e276e3&h=500',
                imdbID: imdbIds[i]
            })
        }
    },
    methods: {
        goToDetailsPage: function(id) {
            this.$router.push("/movie/"+id);
        }
    }
}
</script>

<style>
.c-Main__container {
    margin: 1em;
}

.c-Main__container h1 {
    color: #E50815;
}

.c-Main__wrapper {
    margin: 3em 0;
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
}

.c-Main__block {
    border-radius: 6px;
    margin: 0 1em 1em 0;
    cursor: pointer;
    border: 1px solid #303030;
}
</style>