<template>
	<div class="circle">
		<h3>刻度盘</h3>
		 <avue-echart-gauge ref="echart" :option="config" :data="data" width="1000"></avue-echart-gauge>
	</div>
</template>

<script>
	export default{
		data() {
      return {
        data: {
          value: 50,
          name: '完成率',
          min: 0,
          max: 100,
          unit: '%'
        },
        config: {
          lineSize: 25,
          barColor: [{
            postion: 0.2,
            color1: '#91c7ae'
          },
          {
            postion: 0.8,
            color1: '#63869e'
          },
          {
            postion: 1,
            color1: '#c23531'
          }
          ]
        }
      }
    }
}
		    	
</script>

<style scoped>

</style>