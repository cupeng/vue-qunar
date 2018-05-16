<template>
	<div>
	    <div class="banner" @click="handleBannerClick">
	    	<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1410/45/f13cdf5a4150c31f047d7a4f4457f33d.water.jpg_600x330_675cccdf.jpg" />
	    	<div class="banner-info">
	    		<div class="banner-title">芒砀山旅游区(AAAAA景区)</div>
	    		<div class="banner-number">
	    			<i class="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
	    			39
	    		</div>
	    	</div>
	    </div>
    	<common-gallary :imgs="imgs" @close="handleContainerClick" v-show="showGallary"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '../common/gallary/'
export default {
    name: 'DetailBanner',
    data () {
    	return {
    		showGallary: false,
    		imgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg","http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
    	}
    },
    components: {
    	CommonGallary
    },
    methods: {
    	handleBannerClick () {
    		this.showGallary = true
    	},
    	handleContainerClick () {
    		this.showGallary = false
    	}
    }
}
</script>


<style lang="stylus" scpoed>
	.banner
		position: relative
		overflow: hidden
		height:0
		padding-bottom: 55%
		.banner-img
			width:100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
			.banner-title
				flex: 1
				font-size: .32rem
				padding: 0 .2rem
			.banner-number
				padding: 0 .4rem
				line-height: .32rem
				height: .32rem
				font-size: .24rem
				margin-top: .14rem
				border-radius: .2rem
				background: rgba(0,0,0,.8)
				i
					font-size: .24rem
</style>

