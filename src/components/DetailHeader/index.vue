<template>
	<div>

		<router-link v-show="showAbs" tag="div" to="/" class="header-abs">
			<i class="iconfont header-abs-back icon-fanhui"></i>
		</router-link>
		<div :style="opacityStyle" v-show="!showAbs" class="header-fixed">
			<router-link to="/">
				<i class="iconfont header-fixed-back icon-fanhui"></i>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			const top = document.documentElement.scrollTop
			if( top > 60) {
				let opacity = top / 140
				opacity = opacity > 1 ? 1: opacity
				this.opacityStyle = { opacity }
				this.showAbs = false
			}else {
				this.showAbs = true
			}
		}
	},
	activated () {
		window.addEventListener('scroll',this.handleScroll)
	},
	deactivated () {
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>


<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header-abs
		position: absolute
		left: .2rem
		top: .2rem
		width: .8rem
		line-height: .8rem
		text-align: center
		height: .8rem
		border-radius: .4rem
		background:rgba(0,0,0,0.8)
		.header-abs-back 
			color: #fff
			font-size: .4rem
	.header-fixed
		z-index: 2
		position: fixed
		top: 0
		left: 0
		right: 0
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: #fff
		background: $bgColor
		.header-fixed-back
			position: absolute
			top: 0
			left: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff

</style>