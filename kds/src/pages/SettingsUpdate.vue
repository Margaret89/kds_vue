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
			<div class="panel-data">
				<div class="panel-data__content">
					<div class="panel-data__img">
						<img src="@/assets/img/logo-short-white.svg" alt="">
					</div>

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

			<div class="panel-actions-btn">
				<div class="panel-actions-btn__arr disable">
					<svg class="icon ic-arrow-left" width="48" height="48">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-left"></use>
					</svg>
				</div>

				<div class="panel-actions-btn__list">
					<div class="panel-actions-btn__item active">
						<svg class="icon ic-note" width="38" height="38">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-note"></use>
						</svg>
					</div>

					<div class="panel-actions-btn__item">
						<svg class="icon ic-trash" width="31" height="34">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-trash"></use>
						</svg>
					</div>

					<div class="panel-actions-btn__item">
						<svg class="icon ic-archive" width="38" height="38">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-archive"></use>
						</svg>
					</div>
				</div>

				<div class="panel-actions-btn__arr">
					<svg class="icon ic-arrow-right" width="48" height="48">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-right"></use>
					</svg>
				</div>
			</div>

			<div class="panel-actions-btn">
				<div class="panel-actions-btn__sect">
					<div :class="['panel-actions-btn__item', {'active': !isDay}]" @click="chooseDarkTheme">
						<svg class="icon ic-moon" width="34" height="34">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-moon"></use>
						</svg>
					</div>
					
					<div :class="['panel-actions-btn__item', {'active': isDay}]" @click="chooseLightTheme">
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
		<div class="popup-check">
			<div class="popup-check__close">
				<svg class="icon ic-close" width="20" height="20">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</div>
			<div class="popup-check__title">Check for updates</div>
			<div class="popup-check__text">Our system check for update, please wait for us</div>

			<div class="progress-circle">
				<svg>
					<path class="progress-circle__bg" d="M24.5,4.6c-5.3,0-10.3,2.1-14.1,5.8c-3.7,3.7-5.8,8.8-5.8,14.1s2.1,10.3,5.8,14.1c3.7,3.7,8.8,5.8,14.1,5.8s10.3-2.1,14.1-5.8c3.7-3.7,5.8-8.8,5.8-14.1s-2.1-10.3-5.8-14.1C34.8,6.7,29.8,4.6,24.5,4.6z M0,24.5C0,18,2.6,11.8,7.2,7.2C11.8,2.6,18,0,24.5,0s12.7,2.6,17.3,7.2C46.4,11.8,49,18,49,24.5s-2.6,12.7-7.2,17.3C37.2,46.4,31,49,24.5,49s-12.7-2.6-17.3-7.2C2.6,37.2,0,31,0,24.5z"></path>
					<path class="progress-circle__line" style="--percent: 40" d="M24.5,2.5c5.8,0,11.4,2.3,15.6,6.4c4.1,4.1,6.4,9.7,6.4,15.6s-2.3,11.4-6.4,15.6c-4.1,4.1-9.7,6.4-15.6,6.4s-11.4-2.3-15.6-6.4c-4.1-4.1-6.4-9.7-6.4-15.6S4.8,13.1,8.9,8.9C13.1,4.8,18.7,2.5,24.5,2.5z"></path>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import orderCard from '../components/OrderCard.vue'

export default {
	name: 'settings-update',
	components: {
		orderCard,
	},
	data: () => ({
		isDay: true,
		isActiveSetting: false,
		list:[
			{
				vip: true,
				icon:'ic-tableware',
				icon_width:'30',
				icon_height:'30',
				title:'12',
				name:'Osher',
				tag:'Waiter',
				order_time:'28m ago',
				status:'Dine in',
				status_icon:'ic-bell',
				status_icon_width:'16',
				status_icon_height:'16',
				time:'00:12:39',
				header_color:'orange',
				progress:true,
				child:[
					{
						id:'1',
						num:'3',
						num_color:'orange',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
						],
						note:'Note: Without tomato sauce',
					},
					{
						id:'2',
						num:'1',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Mushrooms'},
						]
					},
					{
						id:'3',
						num:'1',
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
				btn_status:'disable'
			},
			{
				title:'2101',
				name:'Mike',
				tag:'New',
				tag_color:'blue',
				order_time:'28m ago',
				status:'TA',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				time:'00:12:39',
				header_color:'green',
				progress:true,
				child:[
					{
						id:'4',
						num:'3',
						num_color:'orange',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
					},
					{
						id:'5',
						num:'1',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						]
					},
					{
						id:'6',
						num:'1',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						]
					},
				]
			},
			{
				title:'2102',
				name:'Guest',
				order_time:'1h ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'7',
						num:'3',
						num_color:'orange',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
						],
						note:'Note: Without tomato sauce',
					},
					{
						id:'8',
						num:'1',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Mushrooms'},
						]
					},
					{
						id:'9',
						num:'1',
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
				child_blur:true,
				pager:'1/4',
				btn_color:'orange'
			},
			{
				title:'2103',
				name:'Guest',
				order_time:'1h ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'10',
						num:'3',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
						note:'Note: Without tomato sauce',
					},
				],
				btn_color:'orange',
				child_blur:true,
			},
			{
				title:'2104',
				name:'Albert',
				order_time:'1h ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'11',
						num:'3',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
						],
						note:'Note: Without tomato sauce',
					},
				],
				btn_status:'disable',
				btn_color:'orange',
				child_blur:true,
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
	@import '@/assets/scss/components/popup-check';
	@import '@/assets/scss/components/progress-circle';
</style>