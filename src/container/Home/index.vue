<template>
  <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-recommend></home-recommend>
      <home-weeked></home-weeked>
  </div>
</template>

<script>
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
  }
}
</script>


<style>
</style>

