<template>
	<my-notice class="notice_red">No internet connection</my-notice>

	<div class="enlarge-order-wrap">
		<enlarge-order-panel v-bind="panel"></enlarge-order-panel>

		<div class="enlarge-order-list">
			<div class="enlarge-order-list__content">
				<order-card-item
					v-for="item in list"
					v-bind="item"
				></order-card-item>
			</div>
		</div>
		
		<div class="panel-actions">
			<div class="panel-activity">
				<div class="btn btn_grey">
					<svg class="icon ic-receipt" width="32" height="32">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-receipt"></use>
					</svg>Print
				</div>
				<div class="btn btn_grey">
					<svg class="icon ic-note" width="32" height="32">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-note"></use>
					</svg>Stickers
				</div>
			</div>
			<div class="panel-control progressing">
				<div class="panel-control__arr disable">
					<svg class="icon ic-arrow-left" width="48" height="48">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-left"></use>
					</svg>
				</div>
				<div class="panel-control__list">
					<div class="panel-control__item active">
						<svg class="icon ic-check" width="29" height="21">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
						</svg>
						<div class="panel-control__progress">
							<svg>
								<path style="--percent: 50" d="M54,4h14c19.9,0,36,16.1,36,36v28c0,19.9-16.1,36-36,36H40C20.1,104,4,87.9,4,68V40C4,20.4,19.6,4.5,39,4L54,4z"></path>
							</svg>
						</div>
					</div>
					<div class="panel-control__item panel-control__item_red">
						<svg class="icon ic-trash" width="31" height="34">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-trash"></use>
						</svg>
					</div>
				</div>
				<div class="panel-control__arr">
					<svg class="icon ic-arrow-right" width="48" height="48">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-right"></use>
					</svg>
				</div>
			</div>
			<div class="panel-time">
				<div class="panel-time__label">Future order</div>
				<div class="panel-time__text">
					<svg class="icon ic-clock" width="25" height="25">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-clock"></use>
					</svg>Today at 18:30
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EnlargeOrderPanel from '../components/EnlargeOrderPanel.vue'
import OrderCardItem from '../components/OrderCardItem.vue'

export default {
	name: 'enlarge-order-vip',
	components: {
		EnlargeOrderPanel,
		OrderCardItem,
	},
	data: () => ({
		panel:{
			vip:true,
			title:'101',
			name:'Osher',
			tags:[
				{
					val:'New',
					color:'blue',
				},
				{
					val:'Wolt #3002',
					color:'grey',
				},
			],
			time:'00:12:39',
			order_time:'28m ago',
			status:'Delivery',
			status_icon:'ic-pen',
			status_icon_width:'18',
			status_icon_height:'25',
		},
		list:[
			{
				num:'3',
				num_color:'orange',
				title:'Pizza Margarita',
				list:[
					{text:'Olives'},
					{text:'Tuna'},
				],
				note:'Note: Without tomato sauce',
				active: true,
			},
			{
				num:'1',
				title:'Pizza Margarita',
				list:[
					{text:'Olives'},
					{text:'Tuna'},
					{text:'Mushrooms'},
				],
			},
			{
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
			{
				num:'3',
				num_color:'orange',
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
			{
				num:'1',
				title:'Pizza Margarita',
				list:[
					{text:'Olives'},
					{text:'Tuna'},
					{text:'Cheese'},
					{text:'Sauces'},
					{text:'Without tomato sauce'},
				],
				hold: true,
			},
			{
				num:'3',
				num_color:'orange',
				title:'Pizza Margarita',
				list:[
					{text:'Olives'},
					{text:'Tuna'},
				],
				note:'Note: Without tomato sauce',
				active: true,
			},
			{
				num:'1',
				title:'Pizza Margarita',
				list:[
					{text:'Olives'},
					{text:'Tuna'},
					{text:'Mushrooms'},
				],
			},
			{
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
			{
				num:'3',
				num_color:'orange',
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
			{
				num:'1',
				title:'Pizza Margarita',
				list:[
					{text:'Olives'},
					{text:'Tuna'},
					{text:'Cheese'},
					{text:'Sauces'},
					{text:'Without tomato sauce'},
				],
			},
			{
				num:'3',
				num_color:'orange',
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
				disable: true,
			},
			{
				num:'1',
				title:'Pizza Margarita',
				list:[
					{text:'Olives'},
					{text:'Tuna'},
					{text:'Cheese'},
					{text:'Sauces'},
					{text:'Without tomato sauce'},
				],
				disable: true,
			},
		]
	}),
}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/utils/vars';
	@import '@/assets/scss/utils/mixins';
	@import '@/assets/scss/utils/fonts';
	@import '@/assets/scss/utils/reset';
	@import '@/assets/scss/layouts/main';
	@import '@/assets/scss/components/enlarge-order';
	@import '@/assets/scss/components/panel-actions';
	@import '@/assets/scss/components/notice.scss';
</style>