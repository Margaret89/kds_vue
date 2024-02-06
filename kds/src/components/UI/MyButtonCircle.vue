<template>
	<div class="btn-circle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'my-circle-button',
}
</script>

<style lang="scss">
	@import '@/assets/scss/utils/mixins.scss';
	@import '@/assets/scss/utils/vars.scss';
	@import '@/assets/scss/components/btn-circle.scss';
</style>