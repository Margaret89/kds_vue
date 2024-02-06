<template>
	<div class="notice">
		<slot></slot>
		<div class="notice__close">
			<svg class="icon ic-close" width="10" height="10">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-notice',
}
</script>

<style lang="scss">
	@import '@/assets/scss/utils/mixins.scss';
	@import '@/assets/scss/utils/vars.scss';
	@import '@/assets/scss/components/notice.scss';
</style>