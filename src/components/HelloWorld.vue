<template>
  <div class="hello">
    <div class="container-fluid mt-4">
    <div class="row justify-content-center">
    <Card v-for="(value, index) in statusSummary"  v-bind:key="index" :title="value"/>  
    </div>
    </div>
    <h3>List of values</h3>
    <!-- <li v-for="size in this.msg" v-bind:key="size" >{{ size.warnings }}</li> -->
    <li v-for="(value, index) in msg"  v-bind:key="index">
      {{value.eid}} : {{value.day.split("T")[0]}} - Warnings {{value.warnings}}</li>
    <div id="apexchart"></div>        
    <!-- <Card v-for="(value, index) in msg"  v-bind:key="index" :title="value.eid.toString()"/>   -->


  </div>
  
</template>


<script>

import ApexCharts from 'apexcharts'
import Card from './Card.vue'

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
      statusSummary: []
    };
  },
  created(){
      this.statusSummary.push({titolo:"Warnings", count:"45"},{titolo:"Elements", count:"450"})
  },
  watch: {
      msg(val) {
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
        type: 'line',
        height: '200'
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
