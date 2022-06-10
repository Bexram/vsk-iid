<template>
	<div id="modal" class="wrapper">
		<div class="modal">
			<button class="close" @click="closeModal">
				<img class="close__img" :src="require('/src/assets/modal/close.svg')" />
			</button>
			<div class="context">
				<slot name="context"> </slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalWindow',
	props: {
		open,
	},
	data() {
		return {}
	},
	mounted() {
		document.documentElement.style.overflow = 'hidden'
	},
	methods: {
		closeModal() {
			document.documentElement.style.overflow = 'auto'
			this.$emit('hide', true)
		},
	},
}
</script>

<style scoped>
.wrapper {
	z-index: 100;
	position: absolute;
	background-color: rgba(229, 229, 229, 0.6);
	height: 100%;
	width: 110%;
	margin-left: -5%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	z-index: 101;
	opacity: 1;
	width: 54rem;
	height: 30rem;
	background: #ffffff;
	border: 2px solid #dfdfdf;
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
	border-radius: 31px;
}

.close {
	z-index: 104;
	position: relative;
	top: 2%;
	left: 92%;
	width: 3rem;
	height: 3rem;
	background: #ffffff;
	border: 1px solid #dfdfdf;
	box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.context {
	margin-top: -3rem;
	position: relative;
	height: 100%;
	width: 100%;
}

@media (max-width: 428px) {
	.context {
		margin-top: -1rem;
	}

	.modal {
		width: 20rem;
		height: 10rem;
	}

	.close {
		top: 5%;
		left: 90%;
		width: 1rem;
		height: 1rem;
		box-sizing: border-box;
	}
	.close__img {
		width: 0.8rem;
		height: 0.8rem;
	}
}
</style>
