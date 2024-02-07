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

					<div class="panel-actions-btn__item">
						<svg class="icon ic-setting" width="34" height="32">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-setting"></use>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import orderCard from '../components/OrderCard.vue'

export default {
	name: 'live-hold',
	components: {
		orderCard,
	},
	data: () => ({
		isDay: true,
		list:[
			{
				id:'1',
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
				pager:'1/2',
				btn_status:'disable'
			},
			{
				id:'2',
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
						hold: true,
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
				id:'3',
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
				btn_color:'orange',
				note:'Wolt #3002',
			},
			{
				id:'4',
				title:'2103',
				name:'Guest',
				tag:'Future order',
				tag_color:'purple',
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
				note:'Wolt #3002',
				timer:'Today at 18:30'
			},
			{
				id:'5',
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
</style>