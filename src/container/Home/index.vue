<template>
  <div class="home">
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icon :iconList="iconList"></home-icon>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weeked :weekendList="weekendList"></home-weeked>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '@/components/HomeHeader/'
import HomeSwiper from '@/components/HomeSwiper/'
import HomeIcon from '@/components/HomeIcon/'
import HomeRecommend from '@/components/HomeRecommend/'
import HomeWeeked from '@/components/HomeWeeked/'
export default {
  name: 'Home',
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcon,
      HomeRecommend,
      HomeWeeked
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []

    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (response) {
       const res = response.data
       if (res.ret && res.data ) {
         const data = res.data
         this.swiperList = data.swiperList
         this.iconList = data.iconList
         this.recommendList = data.recommendList
         this.weekendList = data.weekendList
       }
    }
  },
  mounted　() {
    this.getHomeInfo()
  }
}
</script>


<style>
</style>

