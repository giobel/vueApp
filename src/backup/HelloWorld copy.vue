<template>
  <div class="Hello" >
    <!-- Page Content -->
<div class="row" margin="200px" >
  
  <div class="col-2" height="100px">

      <!-- <li v-for="size in this.msg" v-bind:key="size" >{{ size.warnings }}</li> -->
      <div class="card bg-light mb-3" style="width: 16rem">
        <div class="card-body">
      <li v-for="(value, index) in statusSummary"  v-bind:key="index" style="text-align: left; list-style:none">
      {{value[0]}} <h4>{{value[3][value[3].length-1]}}</h4></li>
        </div>
      </div>
  </div>
  
  <div class="col-sm">
      <div class="row ">
      <Card v-for="(value, index) in statusSummary"  v-bind:key="index" :title="value" :bodycontent="(index+1).toString()"/>  
      </div>
  </div>
  
</div>
      
      <div id="apexchart"></div>        
      <!-- <Card v-for="(value, index) in msg"  v-bind:key="index" :title="value.eid.toString()"/>   -->
    </div>

</template>


<script>
import Card from './Card.vue'
var dateFormat = require('dateformat');

export default {
  name: 'HelloWorld',
  props:{
    msg: Array,
  },
  components: {
    Card
  },
  data() {
    return {
      chart: null,
      statusSummary: [],
      newDate: [],
      sheetsTimeSerie: [],
      warningTimeSerie: [],
      viewsTimeSerie: [],
      elementsTimeSerie: [],
      elementsTypeTimeSerie: [],
      viewportsTimeSerie: []
    };
  },
  created(){
      //this.statusSummary.push({titolo:"Warnings", count:"45"},{titolo:"Elements", count:"450"})
      //to be removed
      //this.apex();
            // eslint-disable-next-line no-console
      console.log(Object.entries(this.statusSummary))
  },
  watch: {
      msg(val) {
      if (this.chart != null) this.chart.remove();
      //this.statusSummary.push(this.msg[this.msg.length-1])
      //this.statusSummary = Object.entries(this.msg);
      this.apex(val);
      // eslint-disable-next-line no-console
      console.log(Object.entries(this.statusSummary))
    }
  },
 methods:{
    apex(){
      // eslint-disable-next-line no-console
      //console.log("apex: " + this.items.map(s => s.sheets));
    //var date = this.msg.map(s => s.last_update);

    this.msg.forEach( item =>{

      // eslint-disable-next-line no-console
    

    var dateString = new Date(item.last_updated[0]);
    this.newDate.push(dateFormat(dateString, "dd/mm htt"))
    
    this.sheetsTimeSerie.push(item.sheets[0]);
    this.warningTimeSerie.push(item.warnings[0]);
    this.viewsTimeSerie.push(item.views[0]);
    this.elementsTimeSerie.push(item.elements[0]);
    this.elementsTypeTimeSerie.push(item.elementTypes[0]);
    this.viewportsTimeSerie.push(item.viewports[0]);

    })

    this.statusSummary.push(["Sheets", "#0090FF", this.newDate, this.sheetsTimeSerie],
                            ["Views","#45BEFF", this.newDate, this.viewsTimeSerie],
                            ["Viewports", "#FFBD33", this.newDate, this.viewportsTimeSerie],
                            ["Elements", "#33FFBD", this.newDate, this.elementsTimeSerie],
                            ["Element Types", "#75FF33", this.newDate, this.elementsTypeTimeSerie],
                            ["Warnings", "#FF5733", this.newDate, this.warningTimeSerie]
                            )  
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/app.scss';
/* The side navigation menu */

.Hello{
  background-color: #dfdfdf
}

.row{
  background-color: #dfdfdf
}
</style>
