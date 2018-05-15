<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市或拼音">
    </div>
    <div v-show="keyword" ref="search" class="search-content">
        <ul>
            <li @click="handleCityClick(item.name)" class="search-item" :key="item.id" v-for="item in list">{{item.name}}</li>
            <li class="search-item border-bottom" v-show="toggleData">无数据</li>
        </ul>
    </div>
  </div>
</template>


<script>
import Bscroll from 'better-scroll'
import { mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
      cities: Object
  },
  data () {
      return {
          keyword: '',
          list: [],
          timer: null
      }
  },
  watch: {
      keyword () {
          if (this.timer) {
              clearTimeout(this.timer)
          }
          if (!this.keyword) {
            return this.list = []
              
          }
          this.timer = setTimeout(()=>{
              const result = []
              for (let i in this.cities) {
                  this.cities[i].forEach((val)=>{
                      if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > 1) {
                           result.push(val)
                      }
                  })
              }
              this.list = result
          },100)
      }
  },
  mounted () {
      this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
      toggleData () {
        return !this.list.length
      }
  },
  methods: {
      handleCityClick (city) {
          this.changeCity(city)
          this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
  }
}
</script>


<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .search
        height: .72rem
        padding:0 .1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            height: .62rem
            line-height: .62rem
            width: 100%
            padding: 0 .1rem
            border-radius: .06rem
            text-align: center
            color: #666
    .search-content
        z-index:1
        position:absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>
