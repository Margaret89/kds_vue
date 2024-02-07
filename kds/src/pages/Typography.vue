<template>
	<section style="padding: 40px">
		<p>
			<router-link to="#">This is a standard link</router-link>
		</p>

		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p><br><br>
		
		<div class="h2">Additional classes for text</div>
		<p><span class="code">text-left</span> Text alignment in the left</p>
		<p><span class="code">text-center</span> Text alignment in the center</p>
		<p><span class="code">text-right</span> Text alignment in the right</p>
		<p><span class="code">text-justify</span> Text width alignment</p>
		<p><span class="code">text-uppercase</span> Uppercase text</p>
		<p><span class="code">text-bold</span> Bold text</p><br><br>

		<div class="h2">Headers</div>
		<h1>Header - h1</h1>
		<h2>Header - h2</h2>
		<h3>Header - h3</h3>
		<h4>Header - h4</h4>
		<h5>Header - h5</h5>
		<h6>Header - h6</h6><br>

		<p class="h1">This is a class named h1</p>
		<p class="h2">This is a class named h2</p>
		<p class="h3">This is a class named h3</p>
		<p class="h4">This is a class named h4</p>
		<p class="h5">This is a class named h5</p>
		<p class="h6">This is a class named h6</p><br><br><br>

		<div class="h2">Buttons</div>
		<my-button>Button</my-button>
		<br><br>
		<my-button class="btn_green">Button</my-button>
		<br><br>
		
		<router-link class="btn-back" to="#">
			<svg class="icon ic-undo" width="28" height="22">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-undo"></use>
			</svg>Button
		</router-link>

		<br><br>
		<my-button-circle>
			<svg class="icon ic-play" width="27" height="27">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-play"></use>
			</svg>
		</my-button-circle>
		
		<br><br>
		<my-button-circle class="btn-circle_orange">
			<svg class="icon ic-check" width="29" height="21">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
			</svg>
		</my-button-circle>

		<br><br>
		<my-button-circle class="disable">
			<svg class="icon ic-play" width="27" height="27">
				<use xlink:href="@/assets/sprites/sprite.svg#ic-play"></use>
			</svg>
		</my-button-circle>
			
		<br><br>
		<div style="background: #000; padding: 20px">
			<my-button class="btn_opacity">
				<svg class="icon ic-refresh" width="26" height="26">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-refresh"></use>
				</svg>Button
			</my-button>
			<br><br>

			<my-button class="btn_grey">Button</my-button>
		</div>
		<br><br>

		<div class="h2">Messages</div>
		<my-message>Text</my-message>
		<br><br>
		<my-message class="msg_red">Text</my-message><br><br>
		<my-message class="msg_blue">Text</my-message>
		<br><br>

		
		<div class="h2">Notifications</div>
		<div class="notice-static">
			<my-notice>Text</my-notice>
			<br><br>
			<my-notice class="notice_red">Text</my-notice>
		</div>
		
		<br><br>
		<div class="h2">Icons</div>
		<div class="type-icon">
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-clear" width="25" height="20">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-clear"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-clear</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-undo" width="28" height="22">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-undo"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-undo</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-tableware" width="30" height="30">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-tableware"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-tableware</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-bell" width="16" height="16">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-bell"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-bell</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-crown" width="24" height="24">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-crown"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-crown</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-login" width="22" height="22">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-login"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-login</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-pen" width="13" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-pen"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-pen</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-clock" width="19" height="19">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-clock"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-clock</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-arrow-left" width="40" height="40">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-left"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-arrow-left</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-arrow-right" width="40" height="40">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arrow-right"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-arrow-right</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-arr-left" width="14" height="23">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arr-left"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-arr-left</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-arr-right" width="14" height="23">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-arr-right"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-arr-right</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-check" width="29" height="21">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-check"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-check</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-note" width="38" height="38">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-note"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-note</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-trash" width="31" height="34">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-trash"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-trash</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-archive" width="38" height="38">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-archive"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-archive</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-moon" width="34" height="34">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-moon"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-moon</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-sun" width="38" height="38">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-sun"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-sun</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-language" width="34" height="34">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-language"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-language</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-setting" width="34" height="32">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-setting"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-setting</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-play" width="27" height="27">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-play"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-play</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-circle" width="18" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-circle"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-circle</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-circle-half-left" width="18" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-circle-half-left"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-circle-half-left</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-circle-half-right" width="18" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-circle-half-right"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-circle-half-right</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-circle-quarter-1_4" width="18" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-circle-quarter-1_4"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-circle-quarter-1_4</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-circle-quarter-2_4" width="18" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-circle-quarter-2_4"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-circle-quarter-2_4</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-circle-quarter-3_4" width="18" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-circle-quarter-3_4"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-circle-quarter-3_4</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-circle-quarter-4_4" width="18" height="18">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-circle-quarter-4_4"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-circle-quarter-4_4</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-rotate" width="30" height="34">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-rotate"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-rotate</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-close" width="20" height="20">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-close"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-close</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-search" width="28" height="28">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-search"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-search</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-reset" width="56" height="46">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-reset"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-reset</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-face" width="58" height="58">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-face"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-face</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-frame" width="58" height="58">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-frame"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-frame</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-refresh" width="26" height="26">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-refresh"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-refresh</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-receipt" width="32" height="32">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-receipt"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-receipt</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-video" width="26" height="22">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-video"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-video</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-tasks" width="26" height="26">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-tasks"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-tasks</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-add-square" width="35" height="30">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-add-square"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-add-square</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-download" width="22" height="22">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-download"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-download</div>
			</div>
			<div class="type-icon__item">
				<div class="type-icon__img">
					<svg class="icon ic-logout" width="22" height="22">
						<use xlink:href="@/assets/sprites/sprite.svg#ic-logout"></use>
					</svg>
				</div>
				<div class="type-icon__name">ic-logout</div>
			</div>
		</div>
	</section>
</template>

<script>
import MyButtonCircle from '../components/UI/MyButtonCircle.vue'

export default {
	name: 'Typography',
	components: {
		MyButtonCircle
	},
}
</script>

<style scoped lang="scss">
	.type-icon{
		display: flex;
		flex-wrap: wrap;

		&__item{
			width: 100px;
			margin: 15px;
			text-align: center;
		}

		&__img{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100px;
			width: 100%;
		}

		&_white{
			color: #fff;
		}
	}
</style>