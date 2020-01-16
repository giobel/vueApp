<template>
<div class="col-auto mb-3">
    <div class="card bg-light mb-3" style="width: 20rem">
		<h2 class="card-title">{{increment}}</h2>
		<h6 class="card-subtitle mb-2 text-muted">{{title[0]}}</h6>
      <div class="card-body" style="padding: 0">
        <div id="charte"></div>       
      </div>
    </div>
</div>
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
  name: 'Card',
  props: {
    title: Array,
    bodycontent: String
  },
  data(){
  return  {
    chart: null,
    increment: null
  }
  },
  mounted(){
    this.apexc();
    this.findIncrement();
  },
  methods: {
    findIncrement(){
        var n = this.title[3][this.title[3].length-1]-this.title[3][this.title[3].length-2];
        this.increment = (n < 0?"":"+") + n
    },
    apexc(){
      var options = {
      chart: {
        type: "area",
                  toolbar: {
            show: true },
        height: 200,
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
      colors: [this.title[1]],
      stroke: {
        curve: "smooth",
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: this.title[0],
        data: this.title[3]
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
        type: 'category',
        categories: this.title[2],
        crosshairs: {
            show: true,
            position: 'front',
            stroke: {
              color: '#EAE7E7',
              width: 1,
              dashArray: 0 } },
        labels: {
              show: true,
              rotate: -90,
              rotateAlways: false,
              hideOverlappingLabels: true,
              showDuplicates: true,
              trim: false,
              minHeight: undefined,
              maxHeight: 120,
              style: {
                  colors: [],
                  fontSize: '10px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  cssClass: 'apexcharts-xaxis-label',
              },
              offsetX: 0,
              offsetY: -5,
          },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip:{
          enabled: false
        }
      },
      yaxis: {
        labels: {
          offsetX: 14,
          offsetY: -5
        },
        tooltip: {
          enabled: false
        }
      },
      grid: {
        padding: {
          left: 20,
          right: 5
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        show: false
      },
      fill: {
        type: "solid",
        fillOpacity: 0.7
      },
    };

    try{
    document.getElementById('charte').id = "chart" + this.bodycontent;
    }
  catch(err){
    // eslint-disable-next-line no-console
    console.log(err)
    }


    this.chart = new ApexCharts(document.getElementById("chart" + this.bodycontent), options);

    this.chart.render();
    

    }
  }
}
</script>