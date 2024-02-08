<template>
	<div :class="['wrapper sidebar-open', {'wrapper_dark': !isDay}]" >
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

		<div class="sidebar">
			<div class="sidebar__content">
				<div class="sidebar__sect">
					<div class="sidebar__title">Items</div>

					<div class="components">
						<div class="comp-item" v-for="item in items">
							<div class="comp-item__text">{{ item.text }}</div>

							<div class="comp-item__num">{{ item.num }}</div>

							<div class="comp-item__del">
								<svg class="icon ic-trash" width="24" height="26">
									<use xlink:href="@/assets/sprites/sprite.svg#ic-trash"></use>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div class="sidebar__sect">
					<div class="sidebar__title">Groups</div>

					<div class="components">
						<div class="comp-item" v-for="item in groups">
							<div class="comp-item__text">{{ item.text }}</div>

							<div class="comp-item__num">{{ item.num }}</div>

							<div class="comp-item__del">
								<svg class="icon ic-trash" width="24" height="26">
									<use xlink:href="@/assets/sprites/sprite.svg#ic-trash"></use>
								</svg>
							</div>
						</div>
					</div>

					<div class="table-orders-wrap">
						<table class="table-orders">
							<tr>
								<td class="table-orders__info" rowspan="2">
									<div class="table-orders__title">Orders</div>
									<div class="table-orders__num">24</div>
								</td>
								<td colspan="2">
									<div class="table-orders__title">Average</div>
								</td>
								<td colspan="2">
									<div class="table-orders__title">Lates</div>
								</td>
							</tr>
							<tr>
								<td class="table-orders__label">Last hour</td>
								<td class="table-orders__val">2:34</td>
								<td class="table-orders__label">Last hour</td>
								<td class="table-orders__val">1</td>
							</tr>
							<tr>
								<td class="table-orders__info" rowspan="2">
									<div class="table-orders__title">Items</div>
									<div class="table-orders__num">340</div>
								</td>
								<td class="table-orders__label">Today</td>
								<td class="table-orders__val table-orders__val_green">2:10</td>
								<td class="table-orders__label">Today</td>
								<td class="table-orders__val table-orders__val_green">3</td>
							</tr>
							<tr>
								<td class="table-orders__label">Last week</td>
								<td class="table-orders__val table-orders__val_red">2:48</td>
								<td class="table-orders__label">Last week</td>
								<td class="table-orders__val table-orders__val_red">9</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import orderCard from '../components/OrderCard.vue'

export default {
	name: 'live-sidebar',
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
						title:'Pizza Margarita',
						list:[
							{
								icon:'ic-circle',
								icon_width:'18',
								icon_height:'18',
								text:'Green Olives',
							},
							{
								icon:'ic-circle-half-right',
								icon_width:'18',
								icon_height:'18',
								text:'Tuna',
							},
							{
								icon:'ic-circle-half-left',
								icon_width:'18',
								icon_height:'18',
								text:'Extra cheese',
							},
							{
								icon:'ic-circle-quarter-3_4',
								icon_width:'18',
								icon_height:'18',
								text:'Mushrooms',
							},
							{
								icon:'ic-circle-quarter-4_4',
								icon_width:'18',
								icon_height:'18',
								text:'Black Olives',
							},
							{
								icon:'ic-circle-quarter-1_4',
								icon_width:'18',
								icon_height:'18',
								text:'Corn',
							},
							{
								icon:'ic-circle-quarter-2_4',
								icon_width:'18',
								icon_height:'18',
								text:'Onion',
							},
							{text:'Coca-cola 1.5L',},
							{text:'Garlic sauce',},
							{text:'Chipotle sauce',},
						],
						note:'Note: Without tomato sauce',
					},
				],
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
						id:'2',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
					},
				]
			},
			{
				title:'102',
				name:'Guest',
				order_time:'28m ago',
				status:'TA',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'3',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
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
						id:'4',
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
						id:'5',
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
		],
		items:[
			{text:'Margarita', num:'9'},
			{text:'Classic', num:'21'},
			{text:'Bites', num:'16'},
			{text:'Pizza Margarita', num:'0'},
			{text:'Crazy Roll', num:'0'},
			{text:'Pizza Napolitana', num:'5'},
			{text:'Happy Birthday', num:'7'},
			{text:'Special Pizza Party', num:'0'},
			{text:'Japan roll', num:'2'},
		],
		groups:[
			{text:'Oil', num:'9'},
			{text:'Olives', num:'33'},
			{text:'Mushrooms', num:'40'},
			{text:'Coffee', num:'9'},
			{text:'Tuna', num:'0'},
			{text:'Corn', num:'0'},
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
	@import '@/assets/scss/components/sidebar';
	@import '@/assets/scss/components/components';
	@import '@/assets/scss/components/table-orders';
</style>