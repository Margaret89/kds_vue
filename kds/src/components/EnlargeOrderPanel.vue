<template>
	<div :class="['enlarge-order-panel', { 'enlarge-order-panel_danger' : danger }]">
		<div class="enlarge-order-panel__label" v-if="label">{{ label }}</div>

		<div class="enlarge-order-panel__info-wrap">
			<div class="enlarge-order-panel__vip" v-if="vip">
				<svg class="icon ic-crown" width="52" height="52">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-crown"></use>
				</svg>
			</div>

			<div class="enlarge-order-panel__info">
				<div class="enlarge-order-panel__title">{{ title }}</div>

				<div class="enlarge-order-panel__name-wrap">
					<div class="enlarge-order-panel__name">{{ name }}</div>
					
					<div
						:class="['enlarge-order-panel__tag', { ['enlarge-order-panel__tag_'+tag.color] : tag.color }]"
						v-for="tag in tags"
					>
						{{ tag.val }}
					</div>
				</div>
			</div>
		</div>
		

		<div class="enlarge-order-panel__data">
			<div class="enlarge-order-panel-time">
				<div class="enlarge-order-panel-time__icon">
					<svg class="icon ic-clock" width="26" height="26">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-clock"></use>
					</svg>
				</div>

				<div class="enlarge-order-panel-time__text">{{ time }}</div>
			</div>

			<div class="enlarge-order-panel-list">
				<div class="enlarge-order-panel-item">
					<div class="enlarge-order-panel-item__icon">
						<svg class="icon ic-login" width="22" height="22">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-login"></use>
						</svg>
					</div>
					<div class="enlarge-order-panel-item__text">{{ order_time }}</div>
				</div>

				<div class="enlarge-order-panel-item">
					<div class="enlarge-order-panel-item__icon">
						<svg
							:class="'icon '+status_icon"
							:width="status_icon_width"
							:height="status_icon_height">
							<use :xlink:href="icons+'#'+status_icon"></use>
						</svg>
					</div>

					<div class="enlarge-order-panel-item__text">{{ status }}</div>
				</div>
			</div>
		</div>

		<div class="enlarge-order-panel__close">
			<svg class="icon ic-close" width="20" height="20">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
			</svg>
		</div>
	</div>
</template>

<script>
import Icons from '@/assets/sprites/sprite.svg';

export default {
	name: 'enlarge-order-panel',
	props:[
		'label',
		'title',
		'name',
		'tags',
		'time',
		'order_time',
		'status',
		'status_icon',
		'status_icon_width',
		'status_icon_height',
		'danger',
		'vip',
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
	@import '@/assets/scss/components/enlarge-order';
</style>