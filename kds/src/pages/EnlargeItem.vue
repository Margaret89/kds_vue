<template>
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

			<div class="panel-control">
				<div class="panel-control__arr disable">
					<svg class="icon ic-arrow-left" width="48" height="48">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-left"></use>
					</svg>
				</div>

				<div class="panel-control__list">
					<div class="panel-control__item">
						<svg class="icon ic-check" width="29" height="21">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
						</svg>
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

	<div class="popup-wrap">
		<div class="enlarge-item" v-if="!videoOpen && !instructionOpen">
			<div class="enlarge-item__border"></div>
			<div class="enlarge-item__bg"></div>

			<div class="enlarge-item__vip">
				<svg class="icon ic-crown" width="39" height="39">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-crown"></use>
				</svg>
			</div>

			<div class="enlarge-item__close">
				<svg class="icon ic-close" width="20" height="20">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</div>

			<div class="enlarge-item__top">
				<div class="enlarge-item__head">
					<div class="enlarge-item__title">118</div>
					<div class="enlarge-item__pages">3/6</div>
				</div>

				<div class="enlarge-item__name-wrap">
					<div class="enlarge-item__num enlarge-item__num_orange">3</div>
					<div class="enlarge-item__name">Pizza Margarita</div>
				</div>
			</div>

			<div class="enlarge-item__note">Note: Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>

			<div class="enlarge-item__list">
				<div class="enlarge-item__val">Olives</div>
				<div class="enlarge-item__val">Olives</div>
				<div class="enlarge-item__val">Tuna</div>
				<div class="enlarge-item__val">Tuna</div>
				<div class="enlarge-item__val">Cheese</div>
				<div class="enlarge-item__val">Cheese</div>
				<div class="enlarge-item__val">Sauces</div>
				<div class="enlarge-item__val">Sauces</div>
				<div class="enlarge-item__val">Without tomato sauce</div>
				<div class="enlarge-item__val">Without tomato sauce</div>
				<div class="enlarge-item__val">Cheese</div>
				<div class="enlarge-item__val">Cheese</div>
				<div class="enlarge-item__val">Sauces</div>
				<div class="enlarge-item__val">Sauces</div>
			</div>

			<div class="enlarge-item__bottom">
				<div class="enlarge-item__actions">
					<div class="enlarge-item__label">Need help?</div>

					<my-button class="btn_grey" @click="openVideoPopup">
						<svg class="icon ic-video" width="26" height="22">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-video"></use>
						</svg>
						Video
					</my-button>
					
					<my-button class="btn_grey" @click="openInstructionPopup">
						<svg class="icon ic-tasks" width="26" height="26">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-tasks"></use>
						</svg>
						Text
					</my-button>
				</div>

				<div class="enlarge-item__nav">
					<div class="enlarge-item__arr disable">
						<svg class="icon ic-arrow-left" width="58" height="58">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-left"></use>
						</svg>
					</div>

					<div class="enlarge-item__arr">
						<svg class="icon ic-arrow-right" width="58" height="58">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-right"></use>
						</svg>
					</div>
				</div>
			</div>

			<my-button-circle>
				<svg class="icon ic-check" width="36" height="26">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
				</svg>
			</my-button-circle>
		</div>

		<div class="popup-video" v-if="videoOpen">
			<div class="popup-video__close" @click="closeVideoPopup">
				<svg class="icon ic-close" width="20" height="20">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</div>
			<div class="popup-video__title">Pizza Margarita</div>
			
			<div class="video">
				<div class="btn-circle btn-circle_orange">
					<svg class="icon ic-play" width="27" height="27">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-play"></use>
					</svg>
				</div>
			</div>

			<div class="popup-video__text">Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
		</div>

		<div class="popup-instruction" v-if="instructionOpen">
			<div class="popup-instruction__close" @click="closeInstructionPopup">
				<svg class="icon ic-close" width="20" height="20">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</div>

			<div class="popup-instruction__img"></div>
			
			<div class="popup-instruction__content">
				<h1>Pizza Margarita</h1>

				<p>Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

				<h6>Where can I get some?</h6>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<br>paragraphswordsbyteslistsStart with 'Loremipsum dolor sit amet...'</p>

				<h6>Where can I get some?</h6>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<br>paragraphswordsbyteslistsStart with 'Loremipsum dolor sit amet...'</p>

				<div class="popup-instruction__nav">
					<div class="popup-instruction__arr disable">
						<svg class="icon ic-arrow-left" width="58" height="58">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-left"></use>
						</svg>
					</div>

					<div class="popup-instruction__arr">
						<svg class="icon ic-arrow-right" width="58" height="58">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-right"></use>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EnlargeOrderPanel from '../components/EnlargeOrderPanel.vue'
import OrderCardItem from '../components/OrderCardItem.vue'

export default {
	name: 'enlarge-item',
	components: {
		EnlargeOrderPanel,
		OrderCardItem,
	},
	data: () => ({
		videoOpen: false,
		instructionOpen: false,
		panel:{
			label:'Late',
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
			danger: true,
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
	methods:{
		//Open video popup
		openVideoPopup(){
			this.videoOpen = true;
		},
		//close video popup
		closeVideoPopup(){
			this.videoOpen = false;
		},
		//Open instruction popup
		openInstructionPopup(){
			this.instructionOpen = true;
		},
		//close instruction popup
		closeInstructionPopup(){
			this.instructionOpen = false;
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
	@import '@/assets/scss/components/enlarge-order';
	@import '@/assets/scss/components/panel-actions';
	@import '@/assets/scss/components/enlarge-item';
	@import '@/assets/scss/components/popup-video';
	@import '@/assets/scss/components/popup-instruction';

	.video{background-image: url(@/assets/img/bg-video.jpg);}
	.popup-instruction__img{background-image: url(@/assets/img/food.jpg);}
</style>