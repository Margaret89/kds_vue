<template>
	<div class="splash">
		<div class="splash__content">
			<img src="@/assets/img/logo.svg" alt="">
	
			<div class="progress">
				<div class="progress__content"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'splash',
}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/components/splash';
	@import '@/assets/scss/components/progress';
</style>