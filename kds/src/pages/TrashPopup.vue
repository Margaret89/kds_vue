<template>
	<div class="popup-wrap">
		<div class="popup-choose">
			<div class="popup-choose__close">
				<svg class="icon ic-close" width="20" height="20">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</div>

			<div class="popup-choose__title">Please choose position</div>

			<div class="popup-choose__content">
				<textarea></textarea>
			</div>
			
			<div class="popup-choose__btn">
				<my-button class="btn_grey">End of line</my-button>
				<my-button class="btn_green">Line start</my-button>
			</div>
		</div>
	</div>
</template>

<script>
import MyButton from '../components/UI/MyButton.vue'
export default {
  components: { MyButton },
	name: 'trash-popup',
}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/utils/vars';
	@import '@/assets/scss/utils/mixins';
	@import '@/assets/scss/utils/fonts';
	@import '@/assets/scss/utils/reset';
	@import '@/assets/scss/layouts/main';
	@import '@/assets/scss/components/popup-choose';
</style>