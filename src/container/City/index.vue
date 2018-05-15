<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/components/CityHeader/'
import CitySearch from '@/components/CitySearch/'
import CityList from '@/components/CityList/'
import CityAlphabet from '@/components/CityAlphabet/'
export default {
  name: 'City',
  components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
  },
  data () {
      return {
          cities: {},
          hotCities: []
      }
  },
  methods: {
      getCityInfo () {
          axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (response) {
         let res = response.data
         if( res.ret && res.data) {
             const data = res.data
             this.cities = data.cities
             this.hotCities = data.hotCities
         }
      }
  },
  mounted　() {
      this.getCityInfo()
  }
}
</script lang="stylus" scoped>
    

<style>

</style>


