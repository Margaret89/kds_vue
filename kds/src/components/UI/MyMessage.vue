<template>
	<div class="msg">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'my-message',
}
</script>

<style lang="scss">
	@import '@/assets/scss/utils/mixins.scss';
	@import '@/assets/scss/utils/vars.scss';
	@import '@/assets/scss/components/msg.scss';
</style>