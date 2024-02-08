<template>
	<div :class="['wrapper', {'wrapper_dark': !isDay}]" >
		<main class="main">
			<div class="order-card-list">
				<order-card
					v-for="item in list"
					v-bind="item"
				></order-card>
			</div>
		</main>

		<div class="panel-actions">
			<div class="panel-data disable">
				<div class="panel-data__content">
					<div class="panel-data__img"><img src="@/assets/img/logo-short-white.svg" alt=""></div>
					<div class="panel-data__info">
						<div class="panel-data__title">Pizza Makeline</div>
						<div class="panel-data__text">Version 1.34.4</div>
					</div>
				</div>
				<div class="panel-data__date-wrap">
					<div class="panel-data__time">17:30</div>
					<div class="panel-data__date">29 Sep, 2023</div>
				</div>
			</div>
			<div class="panel-select">
				<div class="panel-select__info">
					<div class="panel-select__num">3</div>
					<div class="panel-select__label">Items<br>selected</div>
				</div>
				<div class="panel-select__actions">
					<div class="panel-select__item">
						<svg class="icon ic-rotate" width="30" height="34">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-rotate"></use>
						</svg>
					</div>
				</div>
				<div class="panel-select__close">
					<svg class="icon ic-close" width="20" height="20">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
					</svg>
				</div>
			</div>
			<div class="panel-actions-btn disable">
				<div class="panel-actions-btn__sect">
					<div class="panel-actions-btn__item">
						<svg class="icon ic-moon" width="34" height="34">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-moon"></use>
						</svg>
					</div>
					<div class="panel-actions-btn__item active">
						<svg class="icon ic-sun" width="38" height="38">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-sun"></use>
						</svg>
					</div>
				</div>
				<div class="panel-actions-btn__sect">
					<div class="panel-actions-btn__item">
						<svg class="icon ic-language" width="34" height="34">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-language"></use>
						</svg>
					</div>

					<div
						:class="['panel-actions-btn__item', {'active': isActiveSetting}]"
						@click="toggleSettings"
					>
						<svg class="icon ic-setting" width="34" height="32">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-setting"></use>
						</svg>
					</div>
				</div>

				<div :class="['setting', {'open': isActiveSetting}]">
					<div class="setting__item">
						<div class="setting__icon">
							<svg class="icon ic-download" width="22" height="22">
								<use xlink:href="@/assets/sprites/sprite.svg#ic-download"></use>
							</svg>
						</div>
						<div class="setting__text">Check for updates</div>
					</div>

					<div class="setting__item setting__item_red">
						<div class="setting__icon">
							<svg class="icon ic-logout" width="22" height="22">
								<use xlink:href="@/assets/sprites/sprite.svg#ic-logout"></use>
							</svg>
						</div>
						<div class="setting__text">Log out</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="popup-wrap">
		<div class="popup-identif-wrap">
			<div class="btn-photo">
				<svg class="icon ic-face" width="58" height="58">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-face"></use>
				</svg>
			</div>

			<div class="popup-identif">
				<div class="popup-identif__content">
					<div class="popup-identif__close">
						<svg class="icon ic-close" width="20" height="20">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
						</svg>
					</div>

					<div class="popup-identif__head">
						<div class="popup-identif__icon">
							<svg class="icon ic-face" width="32" height="32">
								<use xlink:href="@/assets/sprites/sprite.svg#ic-face"></use>
							</svg>
						</div>
						<div class="popup-identif__title">Facial recognition</div>
					</div>

					<div class="popup-identif__text">Please position your face inside the frame</div>

					<div class="popup-identif__photo popup-identif__photo_blur">
						<my-button class="btn_opacity">
							<svg class="icon ic-refresh" width="26" height="26">
								<use xlink:href="@/assets/sprites/sprite.svg#ic-refresh"></use>
							</svg>Try again
						</my-button>
					</div>
				</div>

				<div class="popup-identif-info">
					<div class="popup-identif-info__content">
						<div class="popup-identif-info__title">Having problems?</div>
						<div class="popup-identif-info__text">Type your employee code and password manually to continue</div>
					</div>
	
					<my-button>Try manually</my-button>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import orderCard from '../components/OrderCard.vue'

export default {
	name: 'employee-identification-problems',
	components: {
		orderCard,
	},
	data: () => ({
		isDay: true,
		isActiveSetting: false,
		list:[
			{
				vip: true,
				title:'117',
				name:'Osher',
				order_time:'28m ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				time:'00:12:39',
				time_green:true,
				child:[
					{
						id:'1',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
					},
					{
						id:'2',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'}
						],
					},
					{
						id:'3',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Cheese'},
							{text:'Sauces'},
							{text:'Without tomato sauce'},
						]
					},
				],
				pager:'3/6',
				disable:true,
				order_status:'done',
				no_clip:true,
			},
			{
				title:'118',
				name:'Mike',
				order_time:'10:33',
				status:'TA',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				time:'00:12:39',
				time_green:true,
				child:[
					{
						id:'4',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
					},
					{
						id:'5',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						]
					},
					{
						id:'6',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						]
					},
				],
				order_status:'done',
				selected_all: true,
				no_clip:true,
			},
			{
				title:'119',
				name:'Guest',
				order_time:'1h ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'7',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						]
					},
				],
				disable:true,
				order_status:'canceled',
				no_clip:true,
			},
			{
				title:'120',
				name:'Guest',
				order_time:'1h ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'8',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
						note:'Note: This is private party!',
					},
				],
				disable:true,
				order_status:'canceled',
				no_clip:true,
			},
			{
				title:'121',
				name:'Albert',
				order_time:'1h ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'9',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
					},
				],
				disable:true,
				order_status:'canceled',
				no_clip:true,
			},
		]
	}),
	methods:{
		//Choosing a light theme
		chooseLightTheme(){
			this.isDay = true;
		},
		//Choosing a dark theme
		chooseDarkTheme(){
			this.isDay = false;
		},
		//open/close settings
		toggleSettings(){
			this.isActiveSetting = !this.isActiveSetting;
		},
	}
}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/utils/vars';
	@import '@/assets/scss/utils/mixins';
	@import '@/assets/scss/utils/fonts';
	@import '@/assets/scss/utils/reset';
	@import '@/assets/scss/layouts/main';
	@import '@/assets/scss/components/panel-actions';
	@import '@/assets/scss/components/order-card';
	@import '@/assets/scss/components/popup-identif';

	.popup-identif__photo{
		background-image: url(@/assets/img/man.jpg);
	}
</style>