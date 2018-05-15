<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :letter="letter" :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet  @change="handleLetterChange" :cities="cities"></city-alphabet>
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
          hotCities: [],
          letter: ''
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
      },
      handleLetterChange (letter) {
          this.letter = letter
      }
  },
  mounted　() {
      this.getCityInfo()
  }
}
</script lang="stylus" scoped>
    

<style>

</style>


