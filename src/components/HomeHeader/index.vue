<template>
  <header class="header">
      <div class="header-left">
          <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="header-input">
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="输入城市/景点/游玩主题" />
      </div>
      <router-link to="/city">
        <div class="header-right">
            {{this.city}}
            <i class="iconfont icon-jiantou"></i>
        </div>
      </router-link>
      
  </header>
</template>


<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
      ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header
        display: flex
        height:$headerHeight
        line-height:$headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            text-align: center
            float: left
            i
                font-size: .3rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .1rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
            input 
                width: 88%
                margin-bottom:.08rem
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            font-size: .3rem 
            i
                margin-left: .04rem
                font-size: .14rem 
                vertical-align:top
</style>

