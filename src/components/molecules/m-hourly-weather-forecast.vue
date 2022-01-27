<template>
    <div class="m-hourly-weather-forecast w-full justify-center items-center">
      <div class="rounded shadow-lg my-2 m-4 bg-gray-800">
        <p class="font-bold text-xl text-white p-4">{{$t('hourly_forecast', {hourly_forecast: currentWeather.name})}} {{$t('in °C')}}</p>
        <div class="chart-container flex justify-center w-full">
          <hourly-forecast
          :data="chartData"
          :options="chartOptions"
          class="hourly-forecast-chart pb-4"
          />
        </div>
      </div>
    </div>
</template>

<script>
import HourlyForecast from '@/charts/HourlyForecast.vue'
import { monthNames } from '@/data/month.js'
import { dailyForecastTimes } from '@/data/dailyForecastTimes.js'
import { daysOfMonth } from '@/data/daysOfMonth.js'

export default {
  name: 'MHourlyWeatherForecast',
  components: {
    HourlyForecast,
  },
  methods: {
    getTime(el) {
      const hour = Number(el.dt_txt.substring(11, 13))
      const suffix = hour >= 12 ? "PM":"AM";
      const hours = ((hour + 11) % 12 + 1) + suffix
      return hours
    },
    getFullYear (el) {
      return new Date(el.dt_txt).getFullYear()
    },
    getDay(el) {
      return this.daysOfMonth[el.dt_txt.substring(8, 10) - 1]
    }
  },
  data() {
      return {
        dailyForecastTimes: dailyForecastTimes,
        monthNames: monthNames,
        daysOfMonth: daysOfMonth,
        selected: '',
        chartData: {
          labels: this.weatherForecast.list.map(e => {
            return e.dt_txt.substring(0, 10).replaceAll('-', '/') + ' ' + this.getTime(e)
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