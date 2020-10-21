<template>
	<div class="map">
		<h3>地图页面</h3>
		<div id="map"></div>
	</div>
</template>

<script>
	name:"AvueMap"
	export default {
	  data(){
	  	return{

	  	}
	  },
	  mounted(){
	  	// console.log('')
	  	            // 百度地图API功能
        var map = new BMap.Map("map");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(117.078232,36.692629), 19);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]}));
        map.setCurrentCity("金桥国际销售中心");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        var point = new BMap.Point(117.078232,36.692629);         
                    map.centerAndZoom(point, 19);
			        var marker = new BMap.Marker(point);        // 创建标注
			        marker.setTitle("金桥国际B座1806 : 山东匠创信息有限公司");
			        map.addOverlay(marker);                     // 将标注添加到地图中
			        // 设置标注动画效果。如果参数为null，则取消动画效果。该方法需要在addOverlay方法后设置
			        marker.setAnimation(Animation);
	  }
	}

</script>

<style>
	#map{
		width: 600px;
		height: 400px;
		margin: 0 auto;
	}
	.BMap_cpyCtrl {
        display: none;
    }
    .anchorBL img{
    	position: relative;
        bottom: -20px;
    }
</style>