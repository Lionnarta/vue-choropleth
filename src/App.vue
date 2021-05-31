<template>
  <div id="app">
    <Map/>
  </div>
</template>

<script>
import Map from './components/Maps.vue'

export default {
  name: 'App',
  components: {
    Map
  }
}
</script>
<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>
