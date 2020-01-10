<template>
  <div id="app">    
    <HelloWorld :msg="items"></HelloWorld>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import axios from "axios";
import HelloWorld from './components/HelloWorld.vue'
import { csv } from 'd3-request';
import url from 'C:\Temp\AirtableSettings.csv';

csv(url, function(err, data) {
 console.log(data);
})

export default {
  name: 'app',
  data(){
    return{
      items: [],
    }
  },
      created: function () {
    },
  methods:{
    
  },//close methods
  components: {
    // Chart
    HelloWorld
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
