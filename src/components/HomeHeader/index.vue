<template>
  <header class="header">
      <div class="header-left">
          <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="header-right">
          城市
          <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="header-input">
          <i class="iconfont icon-search"></i>
          <input type="text" />
      </div>
  </header>
</template>


<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
            .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
</style>

