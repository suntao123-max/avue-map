<template>
	<div class="btn">
		<button @click='back'>返回首页</button>
	</div>
</template>

<script>
	export default{
		name:'btn',
		data(){
	  		return{

		  	}
		},
		methods:{
			back(){
				window.location.href="/#/"
			}
		}
	}
</script>

<style scoped>

</style>