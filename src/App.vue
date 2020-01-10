<template>
  <div id="app">    
<h1>Hello world</h1>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import axios from "axios";


export default {
  name: 'app',
  data(){
    return{
      items: [],
    }
  },
  methods:{
    
  },//close methods
  components: {
    // Chart
  }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
