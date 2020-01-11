<template>
    <div id='app'>
    <HelloWorld :msg="items"></HelloWorld>
    </div>
</template>



<script>

// eslint-disable-next-line no-unused-vars

import axios from "axios";
import HelloWorld from './components/HelloWorld.vue'
import lambdaService from '@/lambdaService'


// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_SECRET)  // SOME_KEY_VALUE


export default {
  name: 'app',
  data(){
    return{
      items: [],
      startups: [],

    }
  },
        created: function () {
       this.loadItems();
<<<<<<< HEAD
=======
           lambdaService
      .fetchRecords()
      .then(response => {
        this.startups = response.records
          .map(r => r.fields)
      })
      .catch(err => {
        this.error = err
      })
>>>>>>> parent of 73c89d7... update
    },
  methods:{
     loadItems(){
      // eslint-disable-next-line no-console
    // console.log("Load items Airtable " + process.env.VUE_APP_ID);
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
