<template>
	<p><a>This is a standard link</a></p>

	<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p><br><br>

	<div class="h2">Additional classes for text</div>
	<p><span class="code">text-red</span> Red text</p>
	<p><span class="code">text-green</span> Green text</p>
	<p><span class="code">text-grey</span> Grey text</p>
	<p><span class="code">text-center</span> Text alignment in the center</p><br><br>

	<div class="h2">Headers</div>
	<h1>Header - h1</h1>
	<h2>Header - h2</h2>
	<h3>Header - h3</h3>
	<h4>Header - h4</h4>
	<h5>Header - h5</h5>
	<h6>Header - h6</h6>
	<br>

	<p class="h1">This is a class with the name h1</p>
	<p class="h2">This is a class with the name h2</p>
	<p class="h3">This is a class with the name h3</p>
	<p class="h4">This is a class with the name h4</p>
	<p class="h5">This is a class with the name h5</p>
	<p class="h6">This is a class with the name h6</p>
	<br><br><br>

	<div class="h2">Buttons</div>
	<my-button>Button</my-button>
	<br><br>
	<my-button class="btn_green">Button</my-button>
	<br><br>
	<my-button>
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_green">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_grey">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_red">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_border">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_border-dark">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br>
	<br>
	<div style="background: #000; padding: 20px">
		<my-button class="btn_white">
			<svg class="icon ic-briefcase" width="15" height="15">
				<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
			</svg>
			Button
		</my-button>
		<br><br>
		
		<my-button class="btn_white-fill">
			<svg class="icon ic-briefcase" width="15" height="15">
				<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
			</svg>
			Button
		</my-button>
	</div>
	<br><br><br>
	
	<div class="h2">Checkbox</div>
	<my-checkbox v-model="valCheck">Text</my-checkbox>
	<br><br><br>

	<div class="h2">Табуляция</div>
	<div class="tabs-page">
		<ul class="tabs-page__list">
			<li class="tabs-page__item active" data-item="tab1">Tab1</li>
			<li class="tabs-page__item" data-item="tab2">Tab2</li>
			<li class="tabs-page__item" data-item="tab3">Tab3</li>
			<li class="tabs-page__item" data-item="tab4">Tab4</li>
		</ul>
		<div class="tabs-page__content">
			<div class="tabs-page__content-item active" id="tab1">Text 1</div>
			<div class="tabs-page__content-item" id="tab2">Text 2</div>
			<div class="tabs-page__content-item" id="tab3">Text 3</div>
			<div class="tabs-page__content-item" id="tab4">Text 4</div>
		</div>
	</div><br><br><br>
	<div class="tabs-page tabs-page_line">
		<ul class="tabs-page__list">
			<li class="tabs-page__item active" data-item="tab1">Tab1</li>
			<li class="tabs-page__item" data-item="tab2">Tab2</li>
			<li class="tabs-page__item" data-item="tab3">Tab3</li>
			<li class="tabs-page__item" data-item="tab4">Tab4</li>
		</ul>
		<div class="tabs-page__content">
			<div class="tabs-page__content-item active" id="tab1">Text 1</div>
			<div class="tabs-page__content-item" id="tab2">Text 2</div>
			<div class="tabs-page__content-item" id="tab3">Text 3</div>
			<div class="tabs-page__content-item" id="tab4">Text 4</div>
		</div>
	</div><br><br><br>

	<div class="h2">Теги</div>
	<div class="tag">Text</div><br><br>
	<div class="tag tag_red">Text</div><br><br>
	<div class="tag tag_purple">Text</div><br><br>
	<div class="tag tag_yellow">Text</div><br><br>
	<div class="tag tag_black">Text</div><br><br>
	<div class="tag tag tag_small">Text</div><br><br>
	<br><br>
	

	<div class="h2">Switch</div>
	<my-switch idswitch="switch1" v-model="valSwitch">Text</my-switch>
	<br><br>
	<br><br>
</template>

<script>
// import MyCheckbox from '@/components/UI/MyCheckbox.vue'
// import MySwitch from '@/components/UI/MySwitch.vue'
// export default {
// 	components: {
// 		MyCheckbox,
// 		MySwitch
// 	},
//  	data() {
// 		return{
// 			valCheck: false,
// 			valSwitch: false,
// 		}
// 	},
// }
</script>

<style scoped lang="scss">
	// .type-icon{
	// 	display: flex;
	// 	flex-wrap: wrap;

	// 	&__item{
	// 		width: 100px;
	// 		margin: 15px;
	// 		text-align: center;
	// 	}

	// 	&__img{
	// 		display: flex;
	// 		justify-content: center;
	// 		align-items: center;
	// 		height: 100px;
	// 		width: 100%;
	// 	}

	// 	&_white{
	// 		color: #fff;
	// 	}
	// }
</style>