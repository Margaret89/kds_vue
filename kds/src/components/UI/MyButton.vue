<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button',
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.btn,
	input[type="submit"].btn,
	button.btn{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		height: 6.6rem;
		min-width: 200px;
		background: var(--color-primary);
		border: none;
		border-radius: 2rem;
		@include font(normal, 600, 2rem, 1.2, #fff);
		text-decoration: none;
		text-align: center;
		padding: 0 30px;
		cursor: pointer;
		transition: all 0.2s ease 0s;

		.icon{
			flex-shrink: 0;
			fill: #fff;
			transition: fill 0.2s ease 0s;
		}

		&:hover{background: var(--color-primary-hover);}
		
		&.disable{
			background: var(--color-primary-disable);
			cursor: auto;
		}

		&_green{background: var(--color-second);}
		&_green:hover{background: var(--color-second-hover);}
		&_green.disable{background: var(--color-second-disable);}

		&_grey{
			background: var(--color-grey);
			color: var(--color-text);

			.icon{fill: var(--color-text);}
		}

		&_grey:hover{
			background: var(--color-primary);
			color: #fff;

			.icon{fill: #fff;}
		}

		&_grey.disable{
			background: var(--color-grey);
			color: var(--color-text);

			.icon{fill: var(--color-text);}
		}

		&_opacity{background: rgba(255, 255, 255, 0.23);}

		&_opacity:hover{
			background: #fff;
			color: var(--color-text);

			.icon{fill: var(--color-text);}
		}
	}
</style>