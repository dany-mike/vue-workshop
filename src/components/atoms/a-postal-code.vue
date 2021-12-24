<template>
    <div
      v-if="cities.length !== 0"
    >
        <div 
          class="m-postal lg:flex lg:justify-center w-full"
        >
          <div class="flex flex-wrap justify-center items-center space-x-4 px-8">
            <p>Postal code: {{ postalCode }}</p>
            <ASelect
              :options="cities"
              :default="'Please choose a city'"
            />
            <AButton
              @click.native="handleBack"
            >
              Back
            </AButton>
          </div>
      </div>
      <div class="flex w-full justify-center items-center space-x-8">
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <div class="flex justify-center">
            <img class="w-1/4" :src="`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`" alt="Sunset in the mountains">
          </div>
            <div class="p-2">
              <div class="font-bold text-2xl mb-2">{{ currentWeather.name }}</div>
              <div class="font-bold text-xl mb-2">{{ currentWeather.main.temp }}°C</div>
              <p class="text-grey-darker text-base">
                Feels like {{ currentWeather.main.feels_like }}°C {{ currentWeather.weather[0].description }}. 
              </p>
              <p class="text-grey-darker text-base">
                Wind pace {{ currentWeather.wind.speed }}
              </p>
            </div>
        </div>
        <div class="rounded shadow-lg my-2">
          <p class="font-bold text-xl p-4">Hourly forecast in {{ currentWeather.name }}</p>
          <div class="chart-container flex justify-center w-full">
            <hourly-forecast :data="chartData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
   <div v-else>
      Sorry we did not find any city with this postal code      
      <AButton
        @click.native="handleBack"
      >
        Back
      </AButton>
    </div>
</template>

<script>
import AButton from '@/components/atoms/a-button.vue'
import ASelect from '@/components/atoms/a-select.vue'
import HourlyForecast from '@/charts/HourlyForecast.vue'

export default {
  name: 'APostalCode',
  components: {
      AButton,
      ASelect,
      HourlyForecast
  },
  props: {
      postalCode: {
          type: String,
          default: ''
      },
      cities: {
        type: Array,
        default: () => []
      },
      currentWeather : {
        type: Object,
        default: () => {}
      },
      weatherForecast: {
        type: Object,
        default: () => {}
      },
      formattedWeatherForecast: {
        type: Array,
        default: () => {}
      },
  },
  methods: {
      handleBack () {
          this.$emit('on-back')
      },
  },
  data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          legend: {
            display: false,
          },
          tooltips: {
            titleFontSize: 20,
            bodyFontSize: 25,
          },
          scales: {
            xAxes: [],
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
          },
        },
      }
  }
}
</script>

<style scoped>
.chart-container {
  max-height: 800px;
}

.chartjs-render-monitor {
  padding: 20px;
}
</style>