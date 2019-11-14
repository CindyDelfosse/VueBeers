import Axios from 'axios'

const url = 'https://api.irail.be/'
//cont urlStation = 'liveboard/?'
//const key = '?key=afbac2827f8e61f8b0ec1422c74c8781'
const format = '?format=json'

export default {
    getStations() {
        return Axios.get(url + 'stations' + format).then(response => response.data)
    },
    getTrains(idGare) {
        return Axios.get(url + 'liveboard/?id=' + idGare + '&format=json').then(response => response.data)
    }
}