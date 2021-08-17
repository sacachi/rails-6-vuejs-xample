<template>
  <div>
  <div class="card">
    <div id="chart">
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Dashboard",
    computed:{
      ...mapGetters(['chartDataRevenues', 'dataChart', 'chartDataBookingsNew', 'chartDataBookingsCanceld', 'chartDataBookingsCompleted'])
    },
    watch: {
      dataChart(newValue, oldValue){
        this.series = [Object.assign({}, {name: 'chart', data: newValue})]
      }
    },
    data() {
      return {
        series: [{
          name: "Desktops",
          data: []
        }],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Thống kê',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6',
        'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
          }
        },
      }
    }
  }
</script>

<style scoped>

</style>
