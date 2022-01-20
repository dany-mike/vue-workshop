<template>
    <div class="m-hourly-weather-forecast w-full justify-center items-center">
      <div class="rounded shadow-lg my-2 m-4 bg-gray-800">
        <p class="font-bold text-xl text-white p-4">Hourly forecast in {{ currentWeather.name }}</p>
        <div class="chart-container flex justify-center w-full">
          <hourly-forecast
          :data="chartData"
          :options="chartOptions"
          class="hourly-forecast-chart pb-4"
          />
        </div>
        <div class="set-time-container flex justify-center w-full mt-4 pb-4">
          SELECT HERE
        </div>
      </div>
    </div>
</template>

<script>
import HourlyForecast from '@/charts/HourlyForecast.vue'

export default {
  name: 'MHourlyWeatherForecast',
  components: {
    HourlyForecast,
  },
  data() {
      return {
        dailyForecastTimes: [
          "12:00",
          "15:00",
          "18:00",
          "21:00",
          "00:00",
          "03:00",
          "06:00",
          "09:00"
        ],
        chartData: {
          labels: this.weatherForecast.list.map(e => {
            return e.dt_txt
          }),
          datasets: [
            {
              type:'line',
              label: `Hourly forecast in ${this.currentWeather.name}`,
              backgroundColor: '#8CDDFC',
              data: this.weatherForecast.list.map(e => {
                return  e.main.temp
              })
            }
          ]
        },
        chartOptions: {
          responsive: false,
          legend: {
            display: false,
            fontColor: 'white'
          },
          tooltips: {
            titleFontSize: 18,
            bodyFontSize: 12,
          },
          scales: {
            xAxes: [{
              ticks: {
                  fontColor: 'white'
              }
            }],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: 'white'
                },
              },
            ],
          },
        },
      }
  },
  props: {
      weatherForecast: {
        type: Object,
        default: () => {}
      },
      currentWeather : {
        type: Object,
        default: () => {}
      }
  }
}
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  max-height: 800px;
  width: 98%;
  overflow-x: scroll;
}
</style>