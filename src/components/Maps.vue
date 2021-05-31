<template>
  <div id="map">
    <div class="areaContainer">
      <div class="areaInfo">
        US State Population Density
        <div class="info">
          <template v-if="dataClick">
            <p class="info-content">{{ dataClick.name }}</p>
            <p class="info-content">{{ dataClick.density }} people/mi<sup>2</sup></p>
          </template>
          <template v-else>
            <p>Click state to get information</p>
          </template>
        </div>
      </div>
    </div>
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
      dataClick: null
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
          style: this.style,
          onEachFeature: this.onEachFeature
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
    },
    highlightedFeature(e) {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: '#423b3b',
        dashArray: '',
        fillOpacity: 0
      });

      if (!L.Browser.ie && !L.Browser.edge && !L.Browser.opera) {
        layer.bringToFront();
      }
    },
    resetFeature(e) {
      var layer = e.target;

      layer.setStyle({
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      })
    },
    infoFeature(e) {
      this.dataClick = e.target.feature.properties
    },
    onEachFeature(feature, layer) {
      layer.on({
        mouseover: this.highlightedFeature,
        mouseout: this.resetFeature,
        click: this.infoFeature
      });

      layer.bindTooltip(feature.properties.name, {
        direction: 'center',
        className: "my-labels",
      }).openTooltip()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .leaflet-tooltip {
    background: transparent;
    border: transparent;
    box-shadow: none;
    font-weight: bold;
    font-size: 18px;
  }
</style>
<style scoped>
  #map {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .areaContainer {
    position: relative; 
  }

  .areaInfo {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 15px;
    font-size: 20px;
    background: white;
    opacity: 0.8;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    text-align: center;
  }

  .info {
    font-size: 12px;
  }

  .info-content {
    font-weight: bold;
    font-size: 16px;
    text-align: left;
  }
</style>
