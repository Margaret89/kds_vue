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
					<div class="panel-actions-btn__item">
						<svg class="icon ic-note" width="38" height="38">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-note"></use>
						</svg>
					</div>

					<div class="panel-actions-btn__item active">
						<svg class="icon ic-trash" width="31" height="34">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-trash"></use>
						</svg>

						<div class="panel-actions-btn__count">32</div>
						
						<div class="panel-actions-tooltip">
							<div class="panel-actions-tooltip__content">
								<div class="panel-actions-tooltip__text"><b>Pay attention! </b>You still have 32 tickets in your trash</div>
								<div class="panel-actions-tooltip__link">Dismiss</div>
							</div>
						</div>
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
	name: 'Trash',
	components: {
		orderCard,
	},
	data: () => ({
		isDay: true,
		list:[
			{
				vip: true,
				title:'117',
				name:'Osher',
				tag:'New',
				tag_color:'blue',
				order_time:'28m ago',
				status:'Delivery',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'1',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
						active: true,
					},
					{
						id:'2',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
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
				no_clip:true,
			},
			{
				title:'118',
				name:'Mike',
				order_time:'28m ago',
				status:'TA',
				status_icon:'ic-pen',
				status_icon_width:'13',
				status_icon_height:'18',
				child:[
					{
						id:'4',
						title:'Pizza Margarita',
						list:[
							{text:'Olives'},
							{text:'Tuna'},
							{text:'Without tomato sauce'},
						],
						active: true,
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