<template>
  <div class="hello">
    <div class="container-fluid mt-4">
    <div class="row justify-content-center">
    <Card v-for="(value, index) in statusSummary"  v-bind:key="index" :title="value" :bodycontent="(index+1).toString()"/>  
    </div>
    </div>
    <h3>List of values</h3>
    <!-- <li v-for="size in this.msg" v-bind:key="size" >{{ size.warnings }}</li> -->
    <li v-for="(value, index) in msg"  v-bind:key="index">
      {{value.eid}} : {{value.last_updated}} - Warnings {{value.warnings}}</li>
    <div id="apexchart"></div>        
    <!-- <Card v-for="(value, index) in msg"  v-bind:key="index" :title="value.eid.toString()"/>   -->
  </div>
  
</template>


<script>

import ApexCharts from 'apexcharts'
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
    };
  },
  created(){
      //this.statusSummary.push({titolo:"Warnings", count:"45"},{titolo:"Elements", count:"450"})
  },
  watch: {
      msg(val) {
      if (this.chart != null) this.chart.remove();
      //this.statusSummary.push(this.msg[this.msg.length-1])
      //this.statusSummary = Object.entries(this.msg);
      this.apex(val);
      // eslint-disable-next-line no-console
      //console.log(Object.entries(this.statusSummary))
    }
  },
 methods:{
    apex(){
      // eslint-disable-next-line no-console
      //console.log("apex: " + this.items.map(s => s.sheets));
    //var date = this.msg.map(s => s.last_update);

    this.msg.forEach( item =>{
    var dateString = new Date(item.last_updated[0]);
    this.newDate.push(dateFormat(dateString, "dd/m htt"))
    
    this.sheetsTimeSerie.push(item.sheets[0]);
    this.warningTimeSerie.push(item.warnings[0]);
    })

    this.statusSummary.push(["Sheets", this.sheetsTimeSerie, this.newDate],["Warnings",this.warningTimeSerie, this.newDate])


    // eslint-disable-next-line no-console
    console.log(this.sheetsTimeSerie)
    // eslint-disable-next-line no-console
    console.log(this.newDate)
    


var options = {
      chart: {
        type: "area",
        height: 300,
        foreColor: "#999",
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06
        }
      },
      colors: ['#00E396', '#0090FF'],
      stroke: {
        curve: "smooth",
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Warnings',
        data: this.warningTimeSerie
        
        
      }, {
        name: 'Sheets',
        data: this.sheetsTimeSerie
      }],
      markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6
        }
      },
      xaxis: {
        //type: "datetime",
        categories: this.newDate,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        }
      },
      yaxis: {
        labels: {
          offsetX: 14,
          offsetY: -5
        },
        tooltip: {
          enabled: true
        }
      },
      grid: {
        padding: {
          left: -5,
          right: 5
        }
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      fill: {
        type: "solid",
        fillOpacity: 0.7
      }
    };
    this.chart = new ApexCharts(document.querySelector("#apexchart"), options);

    this.chart.render();

      // eslint-disable-next-line no-console
      //console.log(generateDayWiseTimeSeries(0, 18))

    // eslint-disable-next-line no-unused-vars
    function generateDayWiseTimeSeries(s, count) {
      var values = [[4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5], [2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2]];
      var i = 0;
      var series = [];
      var x = new Date("11 Nov 2012").getTime();
      while (i < count) {
        series.push([x, values[s][i]]);
        x += 86400000;
        i++;
      }
      return series;
    }
    },
 }
}

 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/app.scss';
.box-entry {
  display: block;
  font-size: 0.75rem;
  border: 1px solid #dedede;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  &:hover,
  &.box-entry-selected {
    border-color: #999;
    box-shadow: 1px 5px 7px 0 rgba(0, 0, 0, 0.2);
  }
  // desktop
  @include media-breakpoint-up(sm) {
    margin: 0 0 1.5rem 1.5rem;
  }
  margin-top: 1.5rem;
  a {
    font-weight: 400;
  }
  .logo {
    @include media-breakpoint-up(sm) {
      width: 13rem;
      height: 11rem;
    }
    width: 30rem;
    height: 10rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      // border-bottom: 1px solid #eee;
      &.no-logo {
        background: linear-gradient(15deg, #14af83, #15b89a);
      }
    }
  }
  .info-box {
    padding: 0.75rem 0.75rem;
    width: 22rem;
    @include media-breakpoint-up(sm) {
      width: 16rem;
      padding-top: 0.5rem;
    }
    .title {
      font-size: 1rem;
      margin-bottom: 0;
    }
    .location {
      padding-top: 0;
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
      color: #444;
    }
    .description {
      margin-bottom: 0;
    }
  }
  .details-box {
    @include media-breakpoint-up(sm) {
      padding-left: 0;
    }
    padding-left: 0.75rem;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    width: 6rem;
    ul {
      list-style: none;
      padding-left: 0;
    }
  }
  .label {
    display: block;
    font-weight: 700;
  }
}
</style>
