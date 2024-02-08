<template>
	<div 
	:class="[
		'order-card-item',
		{ 'disable' : disable },
		{ 'active' : active },
		{ 'hold' : hold },
	]">
		<div class="order-card-item__tag" v-if="active">
			<svg class="icon ic-check" width="11" height="8">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
			</svg>Done
		</div>

		<div class="order-card-item__head">
			<div
				:class="['order-card-item__num', { ['order-card-item__num_'+num_color] : num_color }]"
				v-if="num"
			>
				{{ num }}
			</div>

			<div class="order-card-item__title">{{ title }}</div>
		</div>

		<div class="order-card-item__list">
			<div
				class="order-card-item__val"
				v-for="val in list"
			>
				<svg
					:class="'icon '+val.icon"
					:width="val.icon_width"
					:height="val.icon_height"
					v-if="val.icon"
					>
					<use :xlink:href="icons+'#'+val.icon"></use>
				</svg>
				{{ val.text }}
			</div>
		</div>

		<div class="order-card-item__msg" v-if="note">
			<div class="msg msg_red">{{ note }}</div>
		</div>

		<div class="order-card-item__check" v-if="hold">
			<svg class="icon ic-check" width="19" height="14">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
			</svg>
		</div>
	</div>
</template>

<script>
import Icons from '@/assets/sprites/sprite.svg';

export default {
	name: 'order-card-item',
	props:[
		'disable',
		'active',
		'hold',
		'num',
		'num_color',
		'title',
		'list',
		'note',
	],
	data: () => ({
		icons:Icons,
	}),
}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/utils/vars';
	@import '@/assets/scss/utils/mixins';
	// @import '@/assets/scss/utils/fonts';
	// @import '@/assets/scss/utils/reset';
	// @import '@/assets/scss/layouts/main';
	@import '@/assets/scss/components/order-card';
</style>