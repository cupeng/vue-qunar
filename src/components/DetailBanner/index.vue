<template>
	<div>
	    <div class="banner" @click="handleBannerClick">
	    	<img class="banner-img" :src="bannerImg" />
	    	<div class="banner-info">
	    		<div class="banner-title">{{this.sightName}}</div>
	    		<div class="banner-number">
	    			<i class="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
	    			{{this.gallaryImgs.length}}
	    		</div>
	    	</div>
	    </div>
	    <fade>
    		<common-gallary :imgs="gallaryImgs" @close="handleContainerClick" v-show="showGallary"></common-gallary>
	    </fade>
    </div>
</template>

<script>
import CommonGallary from '../common/gallary/'
import Fade from '../common/fade/index.vue'
export default {
    name: 'DetailBanner',
    props: {
    	sightName: String,
    	bannerImg: String,
    	gallaryImgs: Array 
    },
    data () {
    	return {
    		showGallary: false
    	}
    },
    components: {
    	CommonGallary,
    	Fade
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

