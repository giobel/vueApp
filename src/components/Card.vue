<template>
<div class="col-auto mb-3">
    <div class="card bg-light mb-3" style="width: 30rem">
		<h2 class="card-title text-primary">{{title[1][title[1].length-1]}}</h2>
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
        name: 'Total Sheet ' + this.bodycontent,
        data: this.title[1]
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
        categories: this.title[2],
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
          enabled: false
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


    }
  }
}
</script>