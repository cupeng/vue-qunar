<template>
  <header class="header">
    城市选择
    <router-link to="/">
      <div class="header-back">
        <i class="iconfont icon-fanhui"></i>
      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    position:relative
    .header-back
      position: absolute
      top:0
      left:0
      width: .64rem
      text-align: center 
      font-size: .4rem
      i 
        color: #fff
</style>


