<template>
	<div 
	:class="[
		'order-card',
		{ 'disable' : disable },
		{ ['order-card_'+status_card] : status_card },
		{ 'delete' : del },
		{ 'order-card_no-clip' : no_clip},
		{ 'selected' : selected},
		{ 'order-card_green' : selected_all}
	]">
		<div class="order-card__border"></div>
		<div class="order-card__shadow-down"></div>
		<div class="order-card__shadow-up"></div>
		<div class="order-card__bg"></div>

		<div class="order-card__label" v-if="status_card == 'hurry_up'">Hurry up</div>

		<div class="order-card__vip" v-if="vip">
			<svg class="icon ic-crown" width="24" height="24">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-crown"></use>
			</svg>
		</div>

		<div class="order-card__top">
			<div class="order-card-status" v-if="order_status == 'done'">
				<svg class="icon ic-check" width="10" height="7">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
				</svg>Done
			</div>

			<div class="order-card-status order-card-status_red" v-if="order_status == 'canceled'">
				<svg class="icon ic-close" width="10" height="10">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
				</svg>Canceled
			</div>

			<div class="order-card__check" v-if="selected_all">
				<svg class="icon ic-check" width="14" height="10">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
				</svg>
			</div>

			 <div class="order-card__head">
				<div class="order-card__head-icon" v-if="icon">
					<svg class="icon ic-tableware" width="14" height="10">
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

				<div
					class="order-card-time"
					:class="['order-card-time', { 'order-card-time_green' : time_green }]"
					v-if="time"
				>
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

			<div class="order-card__del" v-if="del">
				<svg class="icon ic-trash" width="24" height="26">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-trash"></use>
				</svg>
			</div>
		</div>

		<div class="order-card__content">
			<div class="order-card__note" v-if="note">{{ note }}</div>

			<div class="order-card__timer" v-if="timer">
				<svg class="icon ic-clock" width="19" height="19">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-clock"></use>
				</svg>
				{{ timer }}
			</div>

			<div :class="['order-card__list', { 'order-card__list_blur' : child_blur }]">
				<div
					:class="['order-card-item', { 'hold' : holdingId==childItem.id, 'active':childItem.active }]"
					v-for="childItem in child"
					@mousedown="holdItem"
					:data-id="childItem.id"
					>

					<div class="order-card-item__tag" v-if="childItem.active">
						<svg class="icon ic-check" width="11" height="8">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
						</svg>
						Done
					</div>

					<div class="order-card-item__head">
						<div :class="['order-card-item__num', { ['order-card-item__num_'+childItem.num_color] : childItem.num_color }]" v-if="childItem.num">{{ childItem.num }}</div>
						
						<div class="order-card-item__title">{{ childItem.title }}</div>
					</div>

					<div class="order-card-item__list">
						<div class="order-card-item__val" v-for="val in childItem.list">
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

					<div class="order-card-item__msg" v-if="childItem.note">
						<div class="msg msg_blue" v-if="childItem.note_color=='blue'">{{ childItem.note }}</div>
						<div class="msg msg_red" v-else>{{ childItem.note }}</div>
					</div>

					<div class="order-card-item__check" v-if="holdingId==childItem.id">
						<svg class="icon ic-check" width="19" height="14">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
						</svg>
					</div>

					<div class="order-card__check" v-if="selected_all">
						<svg class="icon ic-check" width="14" height="10">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
						</svg>
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

		<my-button-circle
			:class="['btn-circle_orange', { 'disable' : btn_status}]"
			v-if="btn_color == 'orange'"
		>
			<svg class="icon ic-play" width="27" height="27">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-play"></use>
			</svg>
		</my-button-circle>

		<my-button-circle :class="{ 'disable' : btn_status}" v-else>
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
		'id',
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
		'btn_status',
		'note',
		'timer',
		'disable',
		'status_card',
		'del',
		'no_clip',
		'selected',
		'order_status',
		'time_green',
		'selected_all',
	],
	data: () => ({
		icons:Icons,
		holdingId: 0,
	}),
	methods:{
		holdItem(e){
			this.holdingId = e.currentTarget.getAttribute('data-id');
		},
	},
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