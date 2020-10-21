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
		<el-button @click="theme='macarons'" size="small">
			换紫色主题
		</el-button>
		<el-button @click="theme='wonderland'" size="small">
			换绿色主题
		</el-button>
		<avue-echart-pie :theme="theme" :option="option" :data="data" width="600" height="400"></avue-echart-pie>
	</div>
</template>

<script>
echarts.registerTheme(theme.themeName, theme.theme)
echarts.registerTheme(theme1.themeName, theme1.theme)
echarts.registerTheme(theme2.themeName, theme2.theme)
export default {
  data() {
    return {
      theme:'',
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
        title: '手机大比拼',
        subtitle: '纯属虚构',
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
</style>