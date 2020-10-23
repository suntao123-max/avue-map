<template>
	<div class="Avue-pie">
		<h3>pie页面</h3>
		<el-button 
			type="primary" 
			@click="option.switchTheme=!option.switchTheme" 
			size="small"
			>
				{{option.switchTheme?'关闭主题':'打开主题'}}
		</el-button>
		<avue-echart-pie :option="option" :data="data" width="600" height="400"></avue-echart-pie>
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
      data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
      option: {
        switchTheme:true,
        width: '100%',
        height: 600,
        labelShow:true,
        radius: true,
        "barColor": [
          {
            "color1": "#83bff6",
          },
          {
            "color1": "#23B7E5",
          },
          {
            "color1": "rgba(154, 168, 212, 1)",
          },
          {
            "color1": "#188df0",
          },
          {
            "color1": "#564AA3",
          }
        ]
      },
    }
  }
}
</script>

<style scoped>
	.avue-echart-pie{
    margin: 0 auto;
	}
  .avue-echart-pie__title{
    position: absolute;
    z-index: -1;
  }
  button{
    position: relative;
    z-index: 1;
  }
</style>