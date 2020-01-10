<template>
  <div class="hello">
    <h3>List of values</h3>
    <!-- <li v-for="size in this.msg" v-bind:key="size" >{{ size.warnings }}</li> -->
    <li v-for="(value, index) in msg"  v-bind:key="index">
      {{value.day.split("T")[0]}} : {{value.warnings}}</li>
              <div id="apexchart"></div>
  </div>
</template>

<script>

import ApexCharts from 'apexcharts'

export default {
  name: 'HelloWorld',
  props:{
    msg: Array,
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    msg(val) {
      // eslint-disable-next-line no-console
      console.log(this.msg);
      if (this.chart != null) this.chart.remove();
      this.apex(val);
    }
  },
 methods:{
    apex(){
      // eslint-disable-next-line no-console
      //console.log("apex: " + this.items.map(s => s.sheets));
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'Warnings',
        data: this.msg.map(s => s.warnings)
      },
      {
        name: 'Sheets',
        data: this.msg.map(s => s.sheets)
      }],
      xaxis: {
        categories: this.msg.map(s => s.day),
            labels: {
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM \'yy',
        day: 'dd MMM',
        hour: 'HH:mm'
      }
    }
      },
        legend: {
    show: true
  },
  theme: {
  palette: 'palette1' // upto palette10
},
stroke: {
    show: true,
    curve: 'straight',
    lineCap: 'round',
    colors: undefined,
    width: 2,
    dashArray: 0,      
}
  
    }

    this.chart = new ApexCharts(document.querySelector("#apexchart"), options);

    this.chart.render();

    },
 }
}

 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
