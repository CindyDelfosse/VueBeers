<template>
    <div>
        <h1 class="title">Gare de {{gare.gare}} </h1>
        <p> {{gare.id}}</p>
        <hr>
        <button @click="ajouterFav(gare.id)" >Ajouter aux favoris</button>
        <hr>
        {{ trains }}
    </div>
    
</template>

<script>

import Gare from '@/services/RailService.js'
export default {
    created () {
          Gare.getTrains(this.gare.id).then(response => {
            //alert(response)
            this.trains = response.departures.departure
            })

            if (localStorage.garesFavoris) {
                this.favs = JSON.parse(localStorage.garesFavoris)
            }
        },
    data() {
        return {
            gare: {
                id: this.$route.params.id,
                gare: this.$route.params.gare.name
            },
            trains: [],
            favs: []
        }
    },
    methods: {
        ajouterFav(gareId) {
            //alert('Ajout fav')
            this.favs.push(gareId)
            this.updateStorage()
        },
        updateStorage() {
            localStorage.setItem("garesFavoris", JSON.stringify(this.favs))
        }
    }
}
</script>
