<template>
  <div class="icons">
      <swiper class="swiper">
        <swiper-slide :key="index" v-for="(page,index) in pages">
            <div class="icon" v-for="item in page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src='item.imgUrl' />
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
      </swiper>
  </div>
</template>


<script>
export default {
    name: 'HomeIcon',
    props: {
        iconList: Array
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index)=>{
                const page = Math.floor(index / 8)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>


<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom:50%
    .icons
        overflow: hidden
        height: 0
        padding-bottom: 50%
        .icon
            overflow: hidden
            float: left
            width: 25%
            padding-bottom:25%
            position: relative
            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                padding: .1rem
                box-sizing: border-box
                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%
            .icon-desc
                position:absolute
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                line-height: .44rem
                text-align: center
                color: $fontColor
                ellipsis()
</style>
