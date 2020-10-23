<template>
	<div class="circle">
		<h3>刻度盘</h3>
      <avue-echart-gauge  :option='option' :data="data"></avue-echart-gauge>
      <Btn></Btn>
	</div>
</template>

<script>
  import Btn from './common/Btn.vue'
export default {
    components:{
      Btn
    },
    data() {
      return {
        option: {
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
        },
        data: {
          value: 80,
          name: '完成率',
          min: 0,
          max: 100,
          unit: '%'
        }
      }
    }
}
</script>

<style scoped>
  .avue-echart-gauge{
    margin: 0 auto;
  }
</style>