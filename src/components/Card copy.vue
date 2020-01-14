<template>
<div class="col-auto mb-3">
    <div class="card bg-light mb-3" style="width: 30rem">
		<h2 class="card-title">{{title[1]}}</h2>
		<h6 class="card-subtitle mb-2 text-muted">{{title[0]}}</h6>
      <div class="card-body">
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
    }
  },
  mounted(){
this.apex();
  },
    created() {
      
      //this.apex();
    
  },
  methods: {
    apex(){
      var options = {
      chart: {
        type: "area",
        height: 250,
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
        name: 'Total Views ' + this.bodycontent,
        data: generateDayWiseTimeSeries(0, 18)
      }, {
        name: 'Unique Views',
        data: generateDayWiseTimeSeries(1, 18)
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
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
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

    try{
    document.getElementById('charte').id = "chart" + this.bodycontent;
    }
  catch(err){
    // eslint-disable-next-line no-console
    console.log(err)
    }


    this.chart = new ApexCharts(document.getElementById("chart" + this.bodycontent), options);

    this.chart.render();
    
    // eslint-disable-next-line no-console
    console.log("body content " + this.bodycontent)

    // eslint-disable-next-line no-console
    console.log("Run function")

    function generateDayWiseTimeSeries(s, count) {
      var values = [[
        4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
      ], [
        2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
      ]];
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
    }
  }
}
</script>