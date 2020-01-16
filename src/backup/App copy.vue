<template>
<div id='app'>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0"></a>

      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">ARP</a>
        </li>
      </ul>
    </nav>

    <div id="sidenav" class="sidenav bg-light ">
    
    <b-row>
        <b-col sm="10" style="margin-left:15px">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
    </b-row>
    </div>

    <div class="content" style="margin-left: 200px">
        <HelloWorld :msg="items" ></HelloWorld>
    </div>

</div>
</template>



<script>

// eslint-disable-next-line no-unused-vars

import axios from "axios";
import HelloWorld from './components/HelloWorld.vue'
import { BFormSelect } from 'bootstrap-vue'
import { BCol } from 'bootstrap-vue'
import { BRow } from 'bootstrap-vue'




// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_SECRET)  // SOME_KEY_VALUE


export default {
  name: 'app',
  data(){
    return{
      items: [],
      startups: [],
      selected: null,
    options: [
    {
      text: 'Please select some item',
      value: null
    },
    {
      text: 'BGH',
      value: 'app7DOsL5PdjPEbzq'
    }, 
        ]
      //title: document.getElementById('dropdownMenuButton').textContent
    }
  },
  created: function () {
       //this.loadItems();
       //this.generateItems();
       
    },
  watch: {
    selected: function () {
      this.items.length = 0;
      this.loadItems(this.selected);
    }
  },
  methods:{
generateItems(){
var today = new Date();

for (let index = 0; index < 5; index++) {
  
var obj = { eid: [index, "Element Id"],
            last_updated:  [today, "Updated"],
            warnings: [4+index,"Warnings"], 
            sheets: [5+index, "Sheets"],
            elements: [6+index,"Elements"],
            views: [70+index,"Views"],
            elementTypes: [8-index,"Views"],
            viewports: [19+index,"Viewports"]
          }

          this.items.push(obj);
  
}
    },
     loadItems(selectedBoard){
      // Init variables
      var self = this
      //var app_id = process.env.VUE_APP_ID;
      var app_id = selectedBoard;
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
                    elements: [item['fields']['ELEMENTS'],"Elements"],
                    views: [item['fields']['VIEWS'],"Views"],
                    elementTypes: [item['fields']['ELEMENT TYPES'],"Views"],
                    viewports: [item['fields']['VIEWPORTS'],"Viewports"]
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
    HelloWorld,
   BFormSelect,
   BCol,
   BRow
  },
  }
</script>

<style>

.body{
  background-color: #dfdfdf
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 30px;
  margin-right: 0px;
  background-color: #dfdfdf
}

.content{
  margin-top: 40px;
  background-color: #dfdfdf
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 50px;
  text-align: left;
}

.sidenav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f5e50e;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

</style>
