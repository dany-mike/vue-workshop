<template>
    <div
      v-if="cities.length !== 0"
    >
        <div 
          class="m-postal lg:flex lg:justify-center w-full"
        >
          <div class="flex flex-col justify-center items-center space-y-4 px-8">
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
      <div class="flex flex-wrap w-full justify-center items-center lg:space-x-8">
        <div class="rounded overflow-hidden shadow-lg my-2">
          <div class="flex justify-center">
            <img class="w-1/4" :src="`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`" alt="icon">
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
            <hourly-forecast 
            :data="chartData"
            :options="chartOptions"
            class="hourly-forecast-chart pb-4"
            />
          </div>
        </div>
          <div class="rounded shadow-lg my-2 p-4">
          <p class="font-bold text-xl p-4">Daily forecast in {{ currentWeather.name }}</p>
          <div
          v-for="el in formattedWeatherForecast"
          :key="`${el.dt_txt}`"
          class="daily-forecast px-6 flex justify-between w-full">
            <div>
              <p>{{formatDate(el.dt_txt) | format}}</p>
            </div>
            <div>
              <p>{{el.weather[0].description}}</p>
            </div>
            <div>
              <p>{{el.main.temp}} °C</p>
            </div>
            
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
import moment from 'moment'

export default {
  name: 'APostalCode',
  components: {
      AButton,
      ASelect,
      HourlyForecast
  },
  filters: {
  format: function (date) {
    return moment(date).format('ll');
  }
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
      formatDate(date) {
        return date.substring(0, 10)
      },
      handleBack () {
          this.$emit('on-back')
      },
  },
  data() {
      return {
        chartData: {
          labels: this.weatherForecast.list.map(e => {
            return e.dt_txt
          }),
          datasets: [
            {
              type:'line',
              label: `Hourly forecast in ${this.currentWeather.name}`,
              backgroundColor: '#f87979',
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
          },
          tooltips: {
            titleFontSize: 20,
            bodyFontSize: 12,
          },
          scales: {
            xAxes: [],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
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
  display: flex;
  justify-content: center;
  max-height: 800px;
  width: 98%;
  overflow-x: scroll;
}

.chartjs-render-monitor {
  padding: 20px;
}

</style>