<template>
	<div class="btn">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'my-button',
}
</script>

<style lang="scss">
	@import '@/assets/scss/utils/mixins.scss';
	@import '@/assets/scss/utils/vars.scss';
	@import '@/assets/scss/components/btn.scss';
</style>