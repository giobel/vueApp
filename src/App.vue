<template>
<div id='app'>
    <h1>BGH</h1>
    <HelloWorld :msg="items"></HelloWorld>
 
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  With Bootstrap!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
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
      startups: [],
    }
  },
  created: function () {
       this.loadItems();
    },
  methods:{
     loadItems(){
      // Init variables
      var self = this
      var app_id = process.env.VUE_APP_ID;
      var app_key = process.env.VUE_APP_KEY;
      this.items = []
      axios.get(
          //"https://api.airtable.com/v0/"+app_id+"/Model%20Status?maxRecords=100&Menu?view=Grid%20view"
          "https://api.airtable.com/v0/"+app_id+"/Model%20Status?maxRecords=100&sort%5B0%5D%5Bfield%5D=Id&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view",
          { 
              headers: { Authorization: "Bearer "+app_key } 
          }
      ).then(function(response){

      var airtableRecords = response.data.records

          //eslint-disable-next-line no-console
          // console.log(airtableRecords.map(x=>x.fields.Id))

        airtableRecords.forEach(item =>{
          var obj = {eid: [item['fields']['Id'], "Element Id"], 
                    last_updated: [item['fields']['Created'], "Updated"], 
                    warnings: [item['fields']['WARNINGS'],"Warnings"], 
                    sheets: [item['fields']['SHEETS'], "Sheets"],
                    elements: [item['fields']['ELEMENTS'],"Total Elements"]
                    };
          self.items.push(obj);
        });

      }).catch(function(error){
          // eslint-disable-next-line no-console
          console.log(error)
      })
  }//close response
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
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
