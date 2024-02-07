<template>
	<div class="registration">
		<div class="registration__img">
			<img src="@/assets/img/screensaver.jpg" alt="">
		</div>

		<div class="registration__content">
			<div class="btn-back" v-if="regStep > 1" @click="prevStep">
				<svg class="icon ic-undo" width="28" height="22">
					<use xlink:href="@/assets/sprites/sprite.svg#ic-undo"></use>
				</svg>Back
			</div>

			<form class="registration__form">
				<div class="registration__logo">
					<img src="@/assets/img/logo-short.svg" alt="">
				</div>

				<div class="registration__title" v-if="regStep == 1">KDS Number</div>

				<div class="registration__text" v-if="regStep == 1">Please type your KDS number</div>

				<div class="registration__field" v-if="regStep == 1">
					<input type="text" v-model="kdsNum" @keyup="setInputNumber">
				</div>

				<div class="registration__title" v-if="regStep == 2">One-time Password</div>

				<div class="registration__text" v-if="regStep == 2">Please type your password</div>

				<div class="registration__field" v-if="regStep == 2">
					<input type="password" v-model="passwordVal" @keyup="setInputPassword">
				</div>

				<div class="keyboards">
					<div class="keyboards__item" @click="clickKey">1</div>
					<div class="keyboards__item" @click="clickKey">2</div>
					<div class="keyboards__item" @click="clickKey">3</div>
					<div class="keyboards__item" @click="clickKey">4</div>
					<div class="keyboards__item" @click="clickKey">5</div>
					<div class="keyboards__item" @click="clickKey">6</div>
					<div class="keyboards__item" @click="clickKey">7</div>
					<div class="keyboards__item" @click="clickKey">8</div>
					<div class="keyboards__item" @click="clickKey">9</div>
					<div class="keyboards__item" @click="clickKey">0</div>
					<div class="keyboards__item keyboards__item_grey" @click="resetKey">
						<svg class="icon ic-clear" width="25" height="20">
							<use xlink:href="@/assets/sprites/sprite.svg#ic-clear"></use>
						</svg>
					</div>
				</div>

				<div class="registration__btn">
					<my-button :class="!btnNextActive?'disable':''" @click="nextStep" v-if="regStep == 1">Next</my-button>
					<my-button :class="!btnLoginActive?'disable':''" @click="nextStep" v-if="regStep == 2">Login</my-button>
				</div>
			</form>
			
			<div class="registration__sign">
				<img src="@/assets/img/logo-small.svg" alt="">
			</div>
		</div>
	</div>

	<splash v-if="regStep == 3"></splash>
</template>

<script>
import Splash from '../components/Splash.vue'

export default {
	name: 'Registration',
	components: {
		Splash
	},
	data: () => ({
		kdsNum: '',
		passwordVal:'',
		btnNextActive: false,
		btnLoginActive: false,
		regStep: 1,
	}),
	methods:{
		//Checking the button activity
		checkInputLength(length){

			if(length >= 4){
				if(this.regStep == 1){
					this.btnNextActive = true;
				}

				if(this.regStep == 2){
					this.btnLoginActive = true;
				}
			}else{
				if(this.regStep == 1){
					this.btnNextActive = false;
				}

				if(this.regStep == 2){
					this.btnLoginActive = false;
				}
			}
		},
		//Entering data about kds number
		setInputNumber(v) {
			//Checking for digit input
			const val = v.target.value.replace(/[^0-9]/g, "");
			this.kdsNum = val;

			//Activating the button when entering more than 4 characters
			this.checkInputLength(this.kdsNum.length);
		},
		//entering numbers using the buttons
		clickKey(e){
			if(this.regStep == 1){
				this.kdsNum = this.kdsNum + e.target.innerHTML;

				//Activating the button when entering more than 4 characters
				this.checkInputLength(this.kdsNum.length);
			}

			if(this.regStep == 2){
				this.passwordVal = this.passwordVal + e.target.innerHTML;

				//Activating the button when entering more than 4 characters
				this.checkInputLength(this.passwordVal.length);
			}
		},
		//reset the symbol
		resetKey(){
			if(this.regStep == 1){
				this.kdsNum = this.kdsNum.substr(0, this.kdsNum.length - 1);
			}

			if(this.regStep == 2){
				this.passwordVal = this.passwordVal.substr(0, this.passwordVal.length - 1);
			}
		},
		//Next step
		nextStep(){
			this.regStep++;
		},
		//Prev step
		prevStep(){
			this.regStep--;
		},
		
		//Entering data about password
		setInputPassword(v) {
			//Checking for digit input
			const val = v.target.value.replace(/[^0-9]/g, "");
			this.passwordVal = val;

			//Activating the button when entering more than 4 characters
			this.checkInputLength(this.passwordVal.length);
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
	@import '@/assets/scss/components/registration';
</style>