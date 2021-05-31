<template>
  <div class="container">
    <div id="map"></div>
  </div>
</template>

<script>
import axios from 'axios'
import L from 'leaflet'

export default {
  data() {
    return {
      map: null,
      center: [37.0902, -95.7129],
      zoom: 5,
      mapboxAccessToken: 'pk.eyJ1IjoibGlvbm5hcnRhIiwiYSI6ImNrcDJjanBmNjFqMHcyb213NjlzYzJvaHgifQ.GLBCmJTmjCBql0vAb4arpw',
    }
  },
  mounted() {
    this.map = L.map("map", {
      center: this.center,
      zoom: this.zoom
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + this.mapboxAccessToken, {
      id: 'mapbox/light-v9',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    axios.get('https://raw.githubusercontent.com/lulumalik/choropleth/master/public/us.json')
      .then((res) => {
        L.geoJSON(res.data, {
          style: this.style
        }).addTo(this.map)
      });
  }, methods: {
    densityToColor(density) {
      return (
        density > 1000 ? '#800026' :
        density > 500  ? '#BD0026' :
        density > 200  ? '#E31A1C' :
        density > 100  ? '#FC4E2A' :
        density > 50   ? '#FD8D3C' :
        density > 20   ? '#FEB24C' :
        density > 10   ? '#FED976' :
                         '#FFEDA0'
      );
    },
    style(feature) {
      return {
        fillColor: this.densityToColor(feature.properties.density),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    width: 100vw;
    height: 100vh;
  }
</style>
