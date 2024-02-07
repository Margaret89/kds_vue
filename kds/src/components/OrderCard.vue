<template>
	<div class="order-card">
		<div class="order-card__border"></div>
		<div class="order-card__bg"></div>

		<div class="order-card__vip" v-if="vip">
			<svg class="icon ic-crown" width="24" height="24">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-crown"></use>
			</svg>
		</div>

		<div class="order-card__top">
			 <div class="order-card__head">
				<div class="order-card__head-icon" v-if="icon">
					<svg class="icon ic-tableware" width="30" height="30">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-tableware"></use>
					</svg>
				</div>

				<div class="order-card__title">{{ title }}</div>
			</div>

			<div class="order-card__name-wrap">
				<div class="order-card__name">{{ name }}</div>

				<div
					:class="['order-card__tag', { ['order-card__tag_'+tag_color] : tag_color }]"
					v-if="tag"
				>{{ tag }}</div>
			</div>

			<div class="order-card__info">
				<div class="order-card-info-list">
					<div class="order-card-info-item">
						<span class="order-card-info-item__icon">
							<svg class="icon ic-login" width="22" height="22">
								<use xlink:href="@/assets/sprites/sprite.svg#ic-login"></use>
							</svg>
						</span>
						<span class="order-card-info-item__text">{{ order_time }}</span>
					</div>

					<div class="order-card-info-item">
						<span class="order-card-info-item__icon">
							<svg
								:class="'icon '+status_icon"
								:width="status_icon_width"
								:height="status_icon_height">
								<use :xlink:href="icons+'#'+status_icon"></use>
							</svg>
						</span>
						<span class="order-card-info-item__text">{{ status }}</span>
					</div>
				</div>

				<div class="order-card-time" v-if="time">
					<span class="order-card-time__icon">
						<svg class="icon ic-clock" width="19" height="19">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-clock"></use>
						</svg>
					</span>
					<span class="order-card-time__val">{{ time }}</span>
				</div>
			</div>

			<div
				:class="['order-card__progress', { ['order-card__progress_'+header_color] : header_color }]"
				v-if="progress"
			></div>
		</div>

		<div class="order-card__content"> 
			<div :class="['order-card__list', { 'order-card__content_blur' : child_blur }]">
				<div class="order-card-item" v-for=" childItem in child">
					<div class="order-card-item__head">
						<div :class="['order-card-item__num', { ['order-card-item__num_'+childItem.num_color] : childItem.num_color }]" v-if="childItem.num">{{ childItem.num }}</div>
						
						<div class="order-card-item__title">{{ childItem.title }}</div>
					</div>

					<div class="order-card-item__list">
						<div class="order-card-item__val" v-for="val in childItem.list">{{ val }}</div>
					</div>

					<div class="order-card-item__msg" v-if="childItem.note">
						<div class="msg msg_red">{{ childItem.note }}</div>
					</div>
				</div>
			</div>
		</div>

		<div class="order-card-nav" v-if="pager"> 
			<div class="order-card-nav__arr disable">
				<svg class="icon ic-arrow-left" width="40" height="40">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-left"></use>
				</svg>
			</div>

			<div class="order-card-nav__num">{{ pager }}</div>

			<div class="order-card-nav__arr">
				<svg class="icon ic-arrow-right" width="40" height="40">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-right"></use>
				</svg>
			</div>
		</div>

		<my-button-circle class="btn-circle_orange" v-if="btn_color == 'orange'">
			<svg class="icon ic-play" width="27" height="27">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-play"></use>
			</svg>
		</my-button-circle>

		<my-button-circle v-else>
			<svg class="icon ic-check" width="29" height="21">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
			</svg>
		</my-button-circle>
	</div>
</template>

<script>
import Icons from '@/assets/sprites/sprite.svg';
import MyButtonCircle from '../components/UI/MyButtonCircle.vue'

export default {
	name: 'order-card',
	components: {
		MyButtonCircle,
	},
	props:[
		'vip',
		'icon',
		'title',
		'name',
		'tag',
		'tag_color',
		'order_time',
		'status',
		'status_icon',
		'status_icon_width',
		'status_icon_height',
		'time',
		'progress',
		'header_color',
		'child_blur',
		'child',
		'pager',
		'btn_color',
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