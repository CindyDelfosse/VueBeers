<template>
    <section>
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true">
                <b-icon
                    pack="fas"
                    icon="sync-alt"
                    size="is-large"
                    custom-class="fa-spin">
                </b-icon>
            </b-loading>
        <b-table :data="tableDataSimple">         
            <template slot-scope="props">
                <b-table-column label="ID" width="40">
                    <a href="#" @click.prevent="theStation(props.row.id)" target="_blank" >{{ props.row.id }}</a> 
                </b-table-column>

                <b-table-column label="Brewery name">
                    <router-link :to="{name: 'gare', params: {id: props.row.id, gare: props.row}}">{{ props.row.name }}</router-link>                 
                </b-table-column>

                <b-table-column label="locationX">
                    {{ props.row.locationX }}
                </b-table-column>

                 <b-table-column label="locationY">
                    {{ props.row.locationY }}
                </b-table-column>

            </template>
        </b-table>
    </section>
</template>

 <script>
    //import Axios from 'axios'
    import Stations from '@/services/RailService.js'
    export default {
        name: 'home',
        created () {
          Stations.getStations().then(response => {
            //alert(response)
            let stations = []
            response.station.forEach(element => {
              let station = {}
              station.id = element.id
              station.name = element.name
              station.locationX = element.locationX
              station.locationY = element.locationY
              stations.push(station)
            });
            this.tableDataSimple = stations
            this.isLoading = false
            })
        },
        data() {
            const tableDataSimple = []

            return {
                tableDataSimple,
                isLoading: true,
                isFullPage: true
            }
        }, 
        methods : {
          theStation (id) {
            alert(id)
          }
        }
    }
</script>
