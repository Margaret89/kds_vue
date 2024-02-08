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
					<div class="panel-actions-btn__item">
						<svg class="icon ic-setting" width="34" height="32">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-setting"></use>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="popup-wrap">
		<div class="popup-identif-code">
			<div class="popup-identif-code__content">
				<div class="popup-identif-code__back">
					<svg class="icon ic-arr-left" width="14" height="23">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arr-left"></use>
					</svg>
				</div>

				<div class="popup-identif-code__title">Password</div>
				<div class="popup-identif-code__text">Please type your employee password</div>

				<div class="popup-identif-code__field">
					<input type="password">
				</div>

				<my-button-circle class="disable">
					<svg class="icon ic-check" width="29" height="21">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
					</svg>
				</my-button-circle>
			</div>

			<div class="popup-identif-code__keyboard">
				<div class="keyboard">
					<div class="keyboard__item">1</div>
					<div class="keyboard__item">2</div>
					<div class="keyboard__item">3</div>
					<div class="keyboard__item">4</div>
					<div class="keyboard__item">5</div>
					<div class="keyboard__item">6</div>
					<div class="keyboard__item">7</div>
					<div class="keyboard__item">8</div>
					<div class="keyboard__item">9</div>
					<div class="keyboard__item">0</div>
					<div class="keyboard__item keyboard__item_grey">
						<svg class="icon ic-reset" width="22" height="18">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-reset"></use>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import orderCard from '../components/OrderCard.vue'
import MyButtonCircle from '../components/UI/MyButtonCircle.vue'

export default {
	name: 'employee-password',
	components: {
		orderCard,
		MyButtonCircle
	},
	data: () => ({
		isDay: true,
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
	@import '@/assets/scss/components/popup-identif-code';
</style>