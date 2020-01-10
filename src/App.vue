<template>
  <div id="app">    
<h1> BGH </h1>
    <HelloWorld :msg="items"></HelloWorld>

  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import axios from "axios";
import HelloWorld from './components/HelloWorld.vue'

// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_SECRET)  // SOME_KEY_VALUE


export default {
  name: 'app',
  data(){
    return{
      items: [],
    }
  },
        created: function () {
       this.loadItems();

    },
  methods:{
     loadItems(){
      // eslint-disable-next-line no-console
      console.log("Load items from Airtable");
      // Init variables
      var self = this
      var app_id = process.env.VUE_APP_ID;
      var app_key = process.env.VUE_APP_KEY;
      this.items = []
      axios.get(
          "https://api.airtable.com/v0/"+app_id+"/Model%20Status?maxRecords=100&Menu?view=Grid%20view",
          { 
              headers: { Authorization: "Bearer "+app_key } 
          }
      ).then(function(response){

        //self.items = response.data.records;
        response.data.records.forEach(item =>{
          var obj = {day: item['fields']['Created'], 
                    warnings: item['fields']['WARNINGS'], 
                    sheets: item['fields']['SHEETS']};
          self.items.push(obj);
        });
          
          
      }).catch(function(error){
          // eslint-disable-next-line no-console
          console.log(error)
      })
  }
  },//close methods
  components: {
    // Chart
    HelloWorld
  },
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
