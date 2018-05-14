<template>
  <div class="wrapper">
    <swiper class="swiper" v-if="this.showSwiper">
        <swiper-slide :key="item.id"  v-for="item in swiperList"><img :src="item.imgUrl"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
export default {
  name: 'HomeSwiper',
  props: {
      swiperList: Array
  },
  data() {
    return {
        pagination: {
            pagination: '.swiper-pagination'
        }
    }
  },
  computed: {
      showSwiper () {
          return this.swiperList.length
      }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 27%
        .swiper
            img 
                width:100%
    .swiper-pagination
        width:30px
</style>
