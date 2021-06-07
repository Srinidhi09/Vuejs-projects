<template>
<div class="c-Home__container">
    <h1>Mini Netflix</h1>
    <div class="c-Home__wrapper">
        <div v-for="poster in posters" class="c-Home__block" :key="poster.imdbID">
            <img :src="poster.posterURL" width="200px" height="200px" v-on:click="goToDetailsPage(poster.imdbID)">
        </div>
    </div>
</div>
</template>

<script>
import '../scss/_components.home-page.scss'
import {
    imdbIds,
    getPosterUrl
} from '../utils/constants';

export default {
    name: 'Movies',
    data() {
        return {
            posters: []
        };
    },
    created () {
        for(var i=0; i < imdbIds.length; i++) {
            var self = this;
            self.posters.push({
                posterURL: getPosterUrl(imdbIds[i],'400'),
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