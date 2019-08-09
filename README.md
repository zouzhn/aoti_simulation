# aoti_simulation
奥体中心路径交通量动态更改仿真
<!--直接打开本地文件的file://协议是不能用xhr的，必须搭建本地服务器。所以在hbuilder中打开是可以的，直接用浏览器打开则会报跨域错误。-->
<!DOCTYPE html>
<html style="height: 100%">

	<head>
		<meta charset="utf-8" />
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/jquery/jquery.js"></script>
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/echarts-all-3.js"></script>
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
		<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=U1YCvtrqNiTGdD3p8quHqHKKGpVw2cxH"></script>
		<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/extension/bmap.min.js"></script>
		<script src="mapstyle.js" type="text/javascript" charset="utf-8"></script>
		<script src="aoti_simulation.js" , type="text/javascript" , charset="UTF-8"></script>
		<!--样式设置-->
		<style type="text/css">
			.anchorBL {
				display: none;
				/*去掉百度地图左下角的log显示*/
			}
			
			#container {
				z-index: 1;
			}
			/*参数设置面板相关样式*/
			
			#top {
				border: 0px solid green;
				width: 300px;
				line-height: 40px;
				background: rgba(255, 0, 0, 0.6);
				text-align: center;
				font-family: "楷体";
				font-size: 20px;
				/*box-shadow: darkgrey 2px 2px 5px 2px ;*/
				border-radius: 5px;
				color: white;
				position: absolute;
				top: 10px;
				/*left: 80%;*/
				right: 5px;
				z-index: 3;
			}
			
			#middle {
				width: 300px;
				height: 500px;
				background: rgba(4, 4, 4, 0.0);
				/*背景透明*/
				display: flex;
				flex-direction: column;
				position: absolute;
				/*left: 80%;*/
				right: 5px;
				top: 50px;
				z-index: 3;
			}
			
			#middleTop {
				border: 5px solid rgba(2, 2, 2, 0.8);
				height: 450px;
				border-radius: 5px;
				background: rgba(4, 4, 4, 0.0);
				display: flex;
				flex-direction: row;
			}
			
			#labelTxt {
				width: 50px;
				height: 100%;
				background: rgba(3, 3, 3, 0.7);
				border: 0px solid red;
				display: flex;
				flex-direction: column;
			}
			
			#traffic {
				width: 120px;
				height: 100%;
				background: rgba(3, 3, 3, 0.7);
				border: 0px solid red;
				display: flex;
				flex-direction: column;
			}
			
			#aidDiv1 {
				height: 100%;
				border: 0px solid red;
				background: black;
				flex: 1;
			}
			
			#aidDiv2 {
				height: 100%;
				border-left: 0px solid blue;
				background: black;
				flex: 1;
			}
			
			#schemes {
				height: 100%;
				width: 118px;
				background: rgba(3, 3, 3, 0.7);
				border: 0px solid green;
				font-size: 18px;
				font-family: "楷体";
				color: white;
				display: flex;
				flex-direction: column;
			}
			
			#schemes div {
				flex: 1;
				border-right: 1px solid red;
				border-left: 1px solid red;
			}
			
			#middleBottom {
				border: 0px solid green;
				background: rgba(255, 0, 0, 0.6);
				flex: 1;
				border-radius: 5px;
				text-align: center;
				color: white;
				font-family: "楷体";
				font-size: 20px;
			}
			
			#traffic div.inputDiv {
				display: flex;
				flex-direction: column;
				flex: 1;
			}
			
			.inputDiv {
				/*啥也不做*/
			}
			
			#traffic .inputDiv div {
				flex: 1;
			}
			
			#traffic div.inputDiv input {
				margin-left: 4.5%;
				border-radius: 3px;
				border: 0px solid red;
				color: gold;
				background: rgba(120, 120, 120, 0.3);
				width: 90%;
				font-family: "courier new";
				font-size: 15px;
				font-weight: bold;
			}
			
			#labelTxt label {
				border: 1px solid red;
				border-bottom: 0px solid red;
				color: red;
				font-size: 13px;
				padding-left: 2px;
				flex: 1;
			}
		</style>
	</head>

	<body style="height: 100%; margin: 0">
		<!--仿真参数设置面板START-->
		<div id="top">仿真参数设置</div>
		<div id="middle" hidden="hidden">
			<div id="middleTop">
				<div id="labelTxt">
					<label id='l1'>入口1</label>
					<label>入口2</label>
					<label>入口3</label>
					<label>入口4</label>
					<label>入口5</label>
					<label>入口6</label>
					<label>入口7</label>
					<label>入口8</label>
					<label>入口9</label>
					<label>入口10</label>
					<label>入口11</label>
				</div>
				<div id="traffic">
					<div class="inputDiv" id="div1">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
					<div class="inputDiv">
						<div> </div>
						<input type="text" name="" id="entrance1Txt" value="" />
						<div> </div>
					</div>
				</div>
				<div id="aidDiv1"></div>
				<div id="aidDiv2"></div>
				<div id="schemes">
					<div><input type="radio" name="trfSim" id="trafficNormal" /><label for='trafficNormal'>正常仿真</label></div>
					<div><input type="radio" name="trfSim" id="trafficJams" /><label for='trafficJams'>拥堵仿真</label></div>
					<div><input type="radio" name="trfSim" id="trafficSmooth" /><label for='trafficSmooth'>疏散仿真</label></div>
					<div><input type="radio" name="trfSim" id="custom" /><label for='custom'>自定义仿真</label></div>
				</div>
			</div>
			<div id="middleBottom">
				保存设置&nbsp;&&nbsp;执行仿真
			</div>
		</div>
		<!--仿真参数设置面板END-->
		<!--仿真参数设置面板脚本START-->
		<script type="text/javascript">
			//隐藏或者显示面板
			$('#top').click(function() {
				$('#middleBottom').css('color', 'white');
				if($('#middle').is(':hidden')) {
					$('#middle').slideDown('slow');
				} else {
					$('#middle').slideUp('slow');
				}
			});
			//改变鼠标形状为指针
			$('#top').mouseover(function() {
				this.style.cursor = 'pointer';
			});

			//使鼠标成指针形状
			$('#middleBottom').mouseover(function() {
				this.style.cursor = 'pointer';
			});
			//使middleBottom中的文字垂直居中
			$('#middleBottom').css('line-height', document.getElementById("middleBottom").offsetHeight + 'px');
			//隐藏面板
			$('#middleBottom').click(function() {
				$(this).css('color', 'rgba(0, 255, 0, 0.7)');
				setTimeout(function() {
					$('#middle').slideUp('slow');
				}, 500);
			});

			//设置最后一个入口标签的下边框线宽度为1px
			$('label').each(function(index) {
				if(index == 10) { //最后一个入口标签
					$(this).css('border-bottom', '1px solid red');
				}
			});
			//设置标签元素在id名称为labelTxt的div中竖直居中
			$('label').each(function(index) {
				$(this).css('height', (document.getElementById("labelTxt").offsetHeight - 12) / 11 + 'px');
				$(this).css('line-height', (document.getElementById("labelTxt").offsetHeight - 12) / 11 + 'px');
			});
			//设置文本框在其所属的div中竖直居中
			$('#traffic div.inputDiv').each(function(index) {
				$(this).css('border-right', '1px solid red');
				$(this).css('height', (document.getElementById("traffic").offsetHeight - 11 * 0 - 2) / 11 + 'px');
				$(this).css('line-height', (document.getElementById("traffic").offsetHeight - 11 * 0 - 2) / 11 + 'px');
			});
			//设置第一个和最后一个div下边框线宽为1px
			$('#traffic div.inputDiv').each(function(index) {
				if(index == 10) {
					$(this).css('border-bottom', '1px solid red');
				} else if(index == 0) {
					$(this).css('border-top', '1px solid red');
				}
			});
			//设置文本框在其所属的div中的高度
			$('#traffic div.inputDiv input').each(function(index) {
				if(index == 0) {
					$(this).focus(); //将光标放置到第一个文本框中
				}
				$(this).attr('maxlength', 6); //控制文本框中最多只能输入6个字符
				$(this).css('height', 0.7 * (document.getElementById("div1").offsetHeight - 0) + 'px');
			});
			//设置schemes中的4个单选div的位置
			$('#schemes div').each(function(index) {
				if(index == 0) {
					$(this).css('border-top', '1px solid red');
				} else if(index == 3) {
					$(this).css('border-bottom', '1px solid red')
				}
				$(this).css('line-height', (document.getElementById("schemes").offsetHeight - 2) / 4 + 'px');
			});
		</script>
		<!--仿真参数设置面板脚本END-->
		<!--地图容器-->
		<div id="container" style="height: 100%"></div>

		<!--setOption(option)函数可以被多次调用，最终的效果就是会把多次的设置合并起来展示-->
		<script type="text/javascript">
			var dom = document.getElementById("container");
			var myChart = echarts.init(dom); //创建echarts实例对象

			//线路动点的预置颜色值数组
			var animationPointColor = ['red', 'yellow', 'green', 'black',
				'orange', 'blue', 'aquamarine', 'gold', 'gray', 'indigo'
			];
			//车辆行驶路径数据
			var vehicles_routes = null;
			$.ajax({
				type: 'get',
				url: 'aoti_routes_vehicles.json',
				async: false, //同步方式
				dataType: 'json',
				success: function(data) {
					//concat方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
					//map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
					//map()方法按照原始数组元素顺序依次处理元素。 
					//map()不会改变原始数组。map的参数可以为函数名（此时不能带参数），也可以将匿名函数（必须带参数）直接作为参数。
					//比如a.map(f)，a的元素依次赋给了f函数的第一个参数，该元素在a中的索引（从0开始）依次赋给了f函数的第二个参数。
					vehicles_routes = [].concat.apply([], data.map(function(busLine, idx) {
						var prevPt;
						var points = [];
						for(var i = 0; i < busLine.length; i += 2) {
							var pt = [busLine[i], busLine[i + 1]];
							points.push([pt[0], pt[1]]);
						}
						return {
							coords: points,
							lineStyle: { //单个数据（单条线）的样式设置
								normal: { //一定要有normal，但官方说明书上漏掉了这个属性
									//									color: 'orange',
									width: 0.2
								}
							}
						};
					}));
				},
				error: function(e) {
					alert('获取json文件失败！');
				}
			});

			//初始化奥体中心每条线路上的动点数目
			var entrance = []; //入口数组
			var rate = []; //每条路径在所属入口中的流量比例
			var roudRoutesIndex = [7, 8, 9, 14, 15, 16, 17, 20, 30, 34, 38, 41]; //环线路径索引
			var entrance_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 34, 35, 42]; //入口一所包含的路径索引（一共14个）
			entrance.push(entrance_1);
			rate.push([0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.1, 0.1, 0.1, 0.06, 0.1, 0.06, 0.06]);
			var entrance_2 = [11, 12, 14, 15, 16, 17, 19, 38]; //入口二所包含的路径索引（一共8个）
			entrance.push(entrance_2);
			rate.push([0.1, 0.1, 0.14, 0.14, 0.14, 0.14, 0.1, 0.14]);
			var entrance_3 = [13];
			entrance.push(entrance_3);
			rate.push([1.0]);
			var entrance_4 = [18];
			entrance.push(entrance_4);
			rate.push([1.0]);
			var entrance_5 = [20];
			entrance.push(entrance_5);
			rate.push([1.0]);
			var entrance_6 = [21, 22, 23, 30, 31, 32, 36, 37]; //（一共8个）
			entrance.push(entrance_6);
			rate.push([0.1, 0.1, 0.1, 0.3, 0.1, 0.1, 0.1, 0.1]);
			var entrance_7 = [24];
			entrance.push(entrance_7);
			rate.push([1.0]);
			var entrance_8 = [25, 26, 27];
			entrance.push(entrance_8);
			rate.push([1 / 3, 1 / 3, 1 / 3]);
			var entrance_9 = [28];
			entrance.push(entrance_9);
			rate.push([1.0]);
			var entrance_10 = [29, 33];
			entrance.push(entrance_10);
			rate.push([0.5, 0.5]);
			var entrance_11 = [39, 40, 41];
			entrance.push(entrance_11);
			rate.push([0.25, 0.25, 0.5]);
			//给每条路径设置流量比例
			function setRate() { //暂且均分设置
				var rt = [];
				for(var i = 0; i < entrance.length; i++) {
					rt = [];
					for(var j = 0; j < entrance[i].length; j++) {
						rt.push(1 / entrance[i].length);
					}
					rate.push(rt);
				}
			}
			//setRate();
			var entranceTraffic = []; //每个入口的交通量
			//入口交通量初始化
			function entranceTrafficInitialization() {
				function getNum(num) {
					if(num % 2 == 0) {
						return 50;
					} else if(num % 3 == 0) {
						return 60;
					} else {
						return 70;
					}
				}
				for(var i = 0; i < entrance.length; i++) {
					entranceTraffic.push(getNum(i));
				}
			}
			entranceTrafficInitialization();
			//路径交通量初始化
			var routesNum = vehicles_routes.length; //奥体中心所有路径的数目
			var animationPointsNumArr = []; //动点数目数组（可以理解成车辆数目，也可看成交通量），与路径文件aoti_routes_vehicles.json索引要一一对应
			//按比例初始化各条路径的流量
			function setRoutesTraffic(arr) {
				var mark = 0; //是否在entrance[j][k]中找到了i，0表示未找到，1表示已找到
				//遍历每条路径，给指定编号索引的路径分配流量
				for(var i = 0; i < routesNum; i++) { //按
					mark = 0;
					for(var j = 0; j < entrance.length; j++) {
						for(var k = 0; k < entrance[j].length; k++) {
							if(entrance[j][k] == i) {
								//round为四舍五入取整函数，floor直接去掉小数部分
								arr.push(Math.floor(entranceTraffic[j] * rate[j][k]));
								mark = 1; //表示已在entrance[j][k]中找到了i
								break;
							}
						}
						if(mark == 1) {
							break;
						}
					}
				}
			}
			setRoutesTraffic(animationPointsNumArr);
			//对各个入口交通量数据进行微调
			function litAdjEntrTrf(arr) {
				var dn = 0;
				var sum = 0;
				for(var i = 0; i < entranceTraffic.length; i++) {
					for(var j = 0; j < entrance[i].length; j++) {
						sum += arr[entrance[i][j]]; //入口i的交通量
					}
					dn = entranceTraffic[i] - sum; //dn肯定是大于等于0的
					for(var k = 0; k < dn; k++) {
						arr[entrance[i][k]] += 1;
					}
				}
			}
			litAdjEntrTrf(animationPointsNumArr);
			//车辆数临时数组
			var tempAnimationPointsNumArr = [];

			//设置echarts配置项
			visualMap = { //视觉编码
				show: false,
				min: 0,
				max: 100,
				splitNumber: 5,
				inRange: {
					color: ['rgba(0, 255, 0, 0.5)']
				},
			};
			var options = {};
			options.bmap = bmap; //百度地图样式设置
			options.visualMap = visualMap; //视觉编码设置

			//线路动点样例
			var animationPointsSample = {
				type: 'lines',
				coordinateSystem: 'bmap',
				polyline: true,
				effect: {
					show: true, //是否显示特效标记
					loop: true, //是否循环播放
					constantSpeed: 65,
					trailLength: 0.1, //特效尾迹的长度。取从0 到1的值，数值越大尾迹越长。
					//opacity: 0.5, //不透明度
					symbolSize: 3 //特效标记大小
				}
			};

			//绘图元素
			var series = [];

			//初始化奥体中心每条线路上的动点对象
			function animationPointsInitialization() {
				for(var i = 0; i < routesNum; i++) { //遍历每条线路
					for(var j = 0; j < animationPointsNumArr[i]; j++) { //遍历每条线路上的每个动点
						var animationPoints = JSON.parse(JSON.stringify(animationPointsSample));
						animationPoints.data = [vehicles_routes[i]];
						//						animationPoints.effect.constantSpeed = 65;
						animationPoints.effect.delay = j * 500;
						animationPoints.effect.color = animationPointColor[Math.floor(Math.random() * 10)]; //动点颜色随机生成
						series.push(animationPoints);
					}
				}
			}
			animationPointsInitialization();
			//线路散点样例-实现入口的标注
			var scatterSample = { //这里设置color是没用的，要在visualMap中设置
				type: 'scatter',
				coordinateSystem: 'bmap', //使用百度地图坐标系
				itemStyle: {
					normal: { //官网上漏写了这个属性，但其实是有这个属性的
						label: {
							position: 'left',
							fontSize: 13,
							fontFamily: '微软雅黑',
							color: 'red',
							show: true
						}
					}
				},
				symbol: 'circle',
				symbolSize: 12
			};
			//获取散点标注坐标
			var entranceGPSArr = [];
			$.ajax({
				type: 'get',
				url: 'entrance_scatter_mark.json',
				async: false,
				success: function(data) {
					var entranceNum = data.length; //入口数目
					for(var i = 0; i < entranceNum; i++) {
						entranceGPSArr.push({
							name: '入口' + (i + 1),
							value: data[i]
						});
					}
				},
				error: function(e) {
					alert('获取json文件失败！');
				}
			});
			//初始化散点
			function scatterPointsInitialization() {
				for(var i = 0; i < entranceGPSArr.length; i++) { //遍历每条线路
					var tempScatterSample = JSON.parse(JSON.stringify(scatterSample));
					//注意：JSON.parse(JSON.stringify(scatterSample))的返回值并不能把formatter回调函数也包含进去（假设scatterSample中定义了formatter回调函数）
					tempScatterSample.itemStyle.normal.label.formatter = function(params) {
						return params.name; //在点上面添加文本
					};
					tempScatterSample.data = [entranceGPSArr[i]];
					series.push(tempScatterSample);
				}
			}
			scatterPointsInitialization();

			//设置初始状态的option属性
			options.series = series;
			myChart.setOption(options);
			console.log("初始化的情况：\n");
			console.log(options.series);

			/*控制面板功能设计*/
			//初始化正常状态下的各个入口的交通量数据
			$('#traffic .inputDiv input').each(function(index) {
				$(this).val(entranceTraffic[index]);
				$(this).attr('disabled', true);
			});
			//仿真按钮点击事件（与之前的定义的点击事件会自动合并，极为强大。setTimeout也不会对其后面的代码有阻塞）
			$('#middleBottom').click(function() {
				//分类仿真
				if($('#schemes div input').eq(0).is(':checked')) { //正常仿真
					normalSim();
				} else if($('#schemes div input').eq(1).is(':checked')) { //拥堵仿真
					jamsSim();
				} else if($('#schemes div input').eq(2).is(':checked')) { //疏散仿真
					smoothSim();
				} else if($('#schemes div input').eq(3).is(':checked')) { //自定义仿真
					customSim();
				}
				//正常仿真
				function normalSim() {
					$('.inputDiv input').each(function() {
						$(this).css('background', 'rgba(120, 120, 120, 0.3)');
					});
					//更新tempAnimationPointsNumArr数组
					setRoutesTraffic(tempAnimationPointsNumArr);
					litAdjEntrTrf(tempAnimationPointsNumArr);
					//设置全局变量
					var index = 0;
					var dx = 0;
					var op = myChart.getOption(); //获取当前echarts的配置项
					//对数组求和，指定求和的起止位置（不包含end，包含start）
					function calcSum(arr, start, end) {
						var s = 0;
						for(var i = start; i < end; i++) {
							s += arr[i];
						}
						return s;
					}
					//遍历需要更改流量的路径索引
					for(var i = 0; i < animationPointsNumArr.length; i++) {
						if(tempAnimationPointsNumArr[i] <= animationPointsNumArr[i]) { //隐藏特效，但并没有删掉任何元素
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = animationPointsNumArr[i] - tempAnimationPointsNumArr[i];
							for(var j = 0; j < dx; j++) {
								op.series[index - j].effect.show = false;
							}
							for(var k = index - animationPointsNumArr[i] + 1; k < index - dx + 1; k++) {
								op.series[k].effect.show = true;
								//op.series[k].effect.delay = k * 500;
							}
							console.log("小于等于的情况：\n");
							console.log(op.series);
						} else if(tempAnimationPointsNumArr[i] > animationPointsNumArr[i]) {
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = tempAnimationPointsNumArr[i] - animationPointsNumArr[i];
							for(var k = index - animationPointsNumArr[i] + 1; k < index + 1; k++) {
								op.series[k].effect.show = true;
								//op.series[k].effect.delay = (k - (index - animationPointsNumArr[i] + 1)) * 500;
							}
							for(var j = 1; j <= dx; j++) {
								var animationPoints = JSON.parse(JSON.stringify(animationPointsSample));
								animationPoints.data = [vehicles_routes[i]];
								//								animationPoints.effect.constantSpeed = 65;
								animationPoints.effect.delay = (animationPointsNumArr[i] + j - 1) * 500;
								animationPoints.effect.color = animationPointColor[Math.floor(Math.random() * 10)]; //动点颜色随机生成
								op.series.splice(index + j, 0, animationPoints);
							}
							//更新animationPointsNumArr数组
							animationPointsNumArr[i] = tempAnimationPointsNumArr[i];
							console.log("大于的情况：\n");
							console.log(op.series);
						}
					}
					//恢复正常速度
					var sl = calcSum(animationPointsNumArr, 0, animationPointsNumArr.length) - 1;
					for (var i=0; i<sl+1; i++) {
						op.series[i].effect.constantSpeed = 65; //若为负数，则移动速度非常快
					}
					tempAnimationPointsNumArr = []; //清空临时车辆数数组
					myChart.clear(); //解绑
					myChart = echarts.init(dom); //重新绑定一个新的实例
					myChart.setOption(op); //立即生效
				}
				//拥堵仿真
				function jamsSim() {
					var temp = entranceTraffic.concat(); //正常仿真时候的entranceTraffic，后面还需要还原
					$('.inputDiv input').each(function() {
						$(this).css('background', 'rgba(120, 120, 120, 0.3)');
					});
					//更新entranceTraffic
					$('#traffic .inputDiv input').each(function(index) {
						entranceTraffic[index] = parseInt($(this).val());
					});
					//更新tempAnimationPointsNumArr数组
					setRoutesTraffic(tempAnimationPointsNumArr);
					litAdjEntrTrf(tempAnimationPointsNumArr);
					//设置全局变量
					var index = 0;
					var dx = 0;
					var op = myChart.getOption(); //获取当前echarts的配置项
					//对数组求和，指定求和的起止位置（不包含end，包含start）
					function calcSum(arr, start, end) {
						var s = 0;
						for(var i = start; i < end; i++) {
							s += arr[i];
						}
						return s;
					}
					//遍历需要更改流量的路径索引
					for(var i = 0; i < animationPointsNumArr.length; i++) {
						if(tempAnimationPointsNumArr[i] <= animationPointsNumArr[i]) { //隐藏特效，但并没有删掉任何元素
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = animationPointsNumArr[i] - tempAnimationPointsNumArr[i];
							for(var j = 0; j < dx; j++) {
								op.series[index - j].effect.show = false;
							}
							for(var k = index - animationPointsNumArr[i] + 1; k < index - dx + 1; k++) {
								op.series[k].effect.show = true;
								//op.series[k].effect.delay = k * 500;
							}
							console.log("小于等于的情况：\n");
							console.log(op.series);
						} else if(tempAnimationPointsNumArr[i] > animationPointsNumArr[i]) {
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = tempAnimationPointsNumArr[i] - animationPointsNumArr[i];
							for(var k = index - animationPointsNumArr[i] + 1; k < index + 1; k++) {
								op.series[k].effect.show = true;
								//								op.series[k].effect.delay = (k - (index - animationPointsNumArr[i] + 1)) * 500;
							}
							for(var j = 1; j <= dx; j++) {
								var animationPoints = JSON.parse(JSON.stringify(animationPointsSample));
								animationPoints.data = [vehicles_routes[i]];
								//								animationPoints.effect.constantSpeed = 65;
								animationPoints.effect.delay = (animationPointsNumArr[i] + j - 1) * 500;
								animationPoints.effect.color = animationPointColor[Math.floor(Math.random() * 10)]; //动点颜色随机生成
								op.series.splice(index + j, 0, animationPoints);
							}
							//更新animationPointsNumArr数组
							animationPointsNumArr[i] = tempAnimationPointsNumArr[i];
							console.log("大于的情况：\n");
							console.log(op.series);
						}
					}
//										myChart.setOption(op); //立即生效
					//5s之后匀减速
//										var speedId = null;
//										//op = myChart.getOption();
//										var acceleration = 0.5; //车辆加速度
//										var speed = parseInt(animationPointsSample.effect.constantSpeed);
//					
//										function setOption() {
//											speed -= acceleration;
//											if(speed > 25) {
//												for(var i = 0; i < roudRoutesIndex.length; i++) {
//													var eIndex = calcSum(animationPointsNumArr, 0, roudRoutesIndex[i] + 1) - 1; //series中的终点索引
//													var sIndex = eIndex - animationPointsNumArr[roudRoutesIndex[i]] + 1; //series中的起点索引
//													for(var j = sIndex; j < eIndex + 1; j++) {
//														op.series[j].effect.constantSpeed = speed; //若为负数，则移动速度非常快
//														console.log(speed);
//													}
//												}
//												myChart.setOption(op); //立即生效
//											} else {
//												for(var i = 0; i < roudRoutesIndex.length; i++) {
//													var eIndex = calcSum(animationPointsNumArr, 0, roudRoutesIndex[i] + 1) - 1; //series中的终点索引
//													var sIndex = eIndex - animationPointsNumArr[roudRoutesIndex[i]] + 1; //series中的起点索引
//													for(var j = sIndex; j < eIndex + 1; j++) {
//														op.series[j].effect.constantSpeed = 25; //若为负数，则移动速度非常快
//													}
//												}
//												myChart.setOption(op); //立即生效
//												clearInterval(speedId); //终止定时函数
//											}
//										}
//										setTimeout(function() {
//											speedId = setInterval(setOption, 500); //单位为ms，注，1000ms = 1s
//										}, 5000);
					//					setTimeout(function() {
					//						for(var i = 0; i < roudRoutesIndex.length; i++) {
					//							var eIndex = calcSum(animationPointsNumArr, 0, roudRoutesIndex[i] + 1) - 1; //series中的终点索引
					//							var sIndex = eIndex - animationPointsNumArr[roudRoutesIndex[i]] + 1; //series中的起点索引
					//							for(var j = sIndex; j < eIndex + 1; j++) {
					//								op.series[j].effect.constantSpeed = 25; //若为负数，则移动速度非常快
					//							}
					//						}
					//						myChart.setOption(op); //立即生效
					//					}, 5000);
					//设置环线车辆速度为25
					for(var i = 0; i < roudRoutesIndex.length; i++) {
						var eIndex = calcSum(animationPointsNumArr, 0, roudRoutesIndex[i] + 1) - 1; //series中的终点索引
						var sIndex = eIndex - animationPointsNumArr[roudRoutesIndex[i]] + 1; //series中的起点索引
						for(var j = sIndex; j < eIndex + 1; j++) {
							op.series[j].effect.constantSpeed = 25; //若为负数，则移动速度非常快
						}
					}
					//设置非环线车辆速度为40
					for(var i = 0; i < animationPointsNumArr.length; i++) {
						if(roudRoutesIndex.indexOf(i) == -1) {
							var eIndex = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的终点索引
							var sIndex = eIndex - animationPointsNumArr[i] + 1; //series中的起点索引
							for(var j = sIndex; j < eIndex + 1; j++) {
								op.series[j].effect.constantSpeed = 40; //若为负数，则移动速度非常快
							}
						}
					}
					myChart.setOption(op); //立即生效
					//还原相关数组
					tempAnimationPointsNumArr = []; //清空临时车辆数数组
					entranceTraffic = temp.concat(); //还原正常仿真时的entranceTraffic
				}
				//疏散仿真
				function smoothSim() {
					var temp = entranceTraffic.concat(); //正常仿真时候的entranceTraffic，后面还需要还原
					$('.inputDiv input').each(function() {
						$(this).css('background', 'rgba(120, 120, 120, 0.3)');
					});
					//更新entranceTraffic
					$('#traffic .inputDiv input').each(function(index) {
						entranceTraffic[index] = parseInt($(this).val());
					});
					//更新tempAnimationPointsNumArr数组
					setRoutesTraffic(tempAnimationPointsNumArr);
					litAdjEntrTrf(tempAnimationPointsNumArr);
					//设置全局变量
					var index = 0;
					var dx = 0;
					var op = myChart.getOption(); //获取当前echarts的配置项
					//对数组求和，指定求和的起止位置（不包含end，包含start）
					function calcSum(arr, start, end) {
						var s = 0;
						for(var i = start; i < end; i++) {
							s += arr[i];
						}
						return s;
					}
					//遍历需要更改流量的路径索引
					for(var i = 0; i < animationPointsNumArr.length; i++) {
						if(tempAnimationPointsNumArr[i] <= animationPointsNumArr[i]) { //隐藏特效，但并没有删掉任何元素
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = animationPointsNumArr[i] - tempAnimationPointsNumArr[i];
							for(var j = 0; j < dx; j++) {
								op.series[index - j].effect.show = false;
							}
							for(var k = index - animationPointsNumArr[i] + 1; k < index - dx + 1; k++) {
								op.series[k].effect.show = true;
								//op.series[k].effect.delay = k * 500;
							}
							console.log("小于等于的情况：\n");
							console.log(op.series);
						} else if(tempAnimationPointsNumArr[i] > animationPointsNumArr[i]) {
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = tempAnimationPointsNumArr[i] - animationPointsNumArr[i];
							for(var k = index - animationPointsNumArr[i] + 1; k < index + 1; k++) {
								op.series[k].effect.show = true;
								//								op.series[k].effect.delay = (k - (index - animationPointsNumArr[i] + 1)) * 500;
							}
							for(var j = 1; j <= dx; j++) {
								var animationPoints = JSON.parse(JSON.stringify(animationPointsSample));
								animationPoints.data = [vehicles_routes[i]];
								//								animationPoints.effect.constantSpeed = 65;
								animationPoints.effect.delay = (animationPointsNumArr[i] + j - 1) * 500;
								animationPoints.effect.color = animationPointColor[Math.floor(Math.random() * 10)]; //动点颜色随机生成
								op.series.splice(index + j, 0, animationPoints);
							}
							//更新animationPointsNumArr数组
							animationPointsNumArr[i] = tempAnimationPointsNumArr[i];
							console.log("大于的情况：\n");
							console.log(op.series);
						}
					}
//					myChart.setOption(op); //立即生效
					//匀加速
//					var speedId = null;
//					op = myChart.getOption();
//					var acceleration = 0.5; //车辆加速度
//					var speed = 15;
//
//					function setOption() {
//						speed += acceleration;
//						if(speed < 65) {
//							for(var i = 0; i < roudRoutesIndex.length; i++) {
//								var eIndex = calcSum(animationPointsNumArr, 0, roudRoutesIndex[i] + 1) - 1; //series中的终点索引
//								var sIndex = eIndex - animationPointsNumArr[roudRoutesIndex[i]] + 1; //series中的起点索引
//								for(var j = sIndex; j < eIndex + 1; j++) {
//									op.series[j].effect.constantSpeed = speed; //若为负数，则移动速度非常快
//								}
//							}
//							myChart.setOption(op); //立即生效
//						} else {
//							for(var i = 0; i < roudRoutesIndex.length; i++) {
//								var eIndex = calcSum(animationPointsNumArr, 0, roudRoutesIndex[i] + 1) - 1; //series中的终点索引
//								var sIndex = eIndex - animationPointsNumArr[roudRoutesIndex[i]] + 1; //series中的起点索引
//								for(var j = sIndex; j < eIndex + 1; j++) {
//									op.series[j].effect.constantSpeed = 65; //若为负数，则移动速度非常快
//								}
//							}
//							myChart.setOption(op); //立即生效
//							clearInterval(speedId); //终止定时函数
//						}
//					}
//					speedId = setInterval(setOption, 200); //单位为ms，注，1000ms = 1s
//					//					setTimeout(function() {
//					//						speedId = setInterval(setOption, 200); //单位为ms，注，1000ms = 1s
//					//					}, 5000);
					//恢复正常速度
					var sl = calcSum(animationPointsNumArr, 0, animationPointsNumArr.length) - 1;
					for (var i=0; i<sl+1; i++) {
						op.series[i].effect.constantSpeed = 50; //若为负数，则移动速度非常快
					}
					myChart.setOption(op); //立即生效
					//还原相关数组
					tempAnimationPointsNumArr = []; //清空临时车辆数数组
					entranceTraffic = temp.concat(); //还原正常仿真时的entranceTraffic
				}
				//自定义仿真
				function customSim() {
					var temp = entranceTraffic.concat();
					$('.inputDiv input').each(function() {
						$(this).css('background', 'rgba(120, 120, 120, 0.3)');
					});
					//更新entranceTraffic
					$('#traffic .inputDiv input').each(function(index) {
						entranceTraffic[index] = parseInt($(this).val());
					});
					//更新tempAnimationPointsNumArr数组
					setRoutesTraffic(tempAnimationPointsNumArr);
					litAdjEntrTrf(tempAnimationPointsNumArr);
					//设置全局变量
					var index = 0;
					var dx = 0;
					var op = myChart.getOption(); //获取当前echarts的配置项
					//对数组求和，指定求和的起止位置（不包含end，包含start）
					function calcSum(arr, start, end) {
						var s = 0;
						for(var i = start; i < end; i++) {
							s += arr[i];
						}
						return s;
					}
					//遍历需要更改流量的路径索引
					for(var i = 0; i < animationPointsNumArr.length; i++) {
						if(tempAnimationPointsNumArr[i] <= animationPointsNumArr[i]) { //隐藏特效，但并没有删掉任何元素
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = animationPointsNumArr[i] - tempAnimationPointsNumArr[i];
							for(var j = 0; j < dx; j++) {
								op.series[index - j].effect.show = false;
							}
							for(var k = index - animationPointsNumArr[i] + 1; k < index - dx + 1; k++) {
								op.series[k].effect.show = true;
								//op.series[k].effect.delay = k * 500;
							}
							console.log("小于等于的情况：\n");
							console.log(op.series);
						} else if(tempAnimationPointsNumArr[i] > animationPointsNumArr[i]) {
							index = calcSum(animationPointsNumArr, 0, i + 1) - 1; //series中的索引
							dx = tempAnimationPointsNumArr[i] - animationPointsNumArr[i];
							for(var k = index - animationPointsNumArr[i] + 1; k < index + 1; k++) {
								op.series[k].effect.show = true;
								//								op.series[k].effect.delay = (k - (index - animationPointsNumArr[i] + 1)) * 500;
							}
							for(var j = 1; j <= dx; j++) {
								var animationPoints = JSON.parse(JSON.stringify(animationPointsSample));
								animationPoints.data = [vehicles_routes[i]];
								//								animationPoints.effect.constantSpeed = 65;
								animationPoints.effect.delay = (animationPointsNumArr[i] + j - 1) * 500;
								animationPoints.effect.color = animationPointColor[Math.floor(Math.random() * 10)]; //动点颜色随机生成
								op.series.splice(index + j, 0, animationPoints);
							}
							//更新animationPointsNumArr数组
							animationPointsNumArr[i] = tempAnimationPointsNumArr[i];
							console.log("大于的情况：\n");
							console.log(op.series);
						}
					}
					//恢复正常速度
					var sl = calcSum(animationPointsNumArr, 0, animationPointsNumArr.length) - 1;
					for (var i=0; i<sl+1; i++) {
						op.series[i].effect.constantSpeed = 65; //若为负数，则移动速度非常快
					}
					myChart.clear(); //解绑
					myChart = echarts.init(dom); //重新绑定一个新的实例
					myChart.setOption(op); //立即生效
					tempAnimationPointsNumArr = []; //清空临时车辆数数组
					entranceTraffic = temp.concat(); //还原正常仿真时的entranceTraffic
				}
			});

			//echarts点击事件
			myChart.on('click', function(params) {
				if(params.seriesType == 'scatter') {
					//显示面板
					$('#middleBottom').css('color', 'white');
					if($('#middle').is(':hidden')) {
						$('#middle').slideDown('slow');
					}
					$('.inputDiv input').eq(parseInt(params.name.slice(2)) - 1).focus();
					$('.inputDiv input').eq(parseInt(params.name.slice(2)) - 1).css('background', 'rgba(255, 0, 0, 0.6)');
					$('.inputDiv input').each(function(index) {
						if(index !== parseInt(params.name.slice(2)) - 1) {
							$(this).css('background', 'rgba(120, 120, 120, 0.3)');
						}
					});
					console.log(params);
				}
			});

			/**
			 * 仿真类型的单选按钮
			 * */
			//选中指定的单选按钮，并给单选按钮添加点击事件
			$('#schemes div input').each(function(index) {
				if(index == 0) { //正常仿真
					$(this).prop('checked', true); //初始状态的时候直接选中第一个仿真单选按钮
					$(this).click(function() {
						$('.inputDiv input').each(function(index) {
							$(this).val(entranceTraffic[index]);
							$(this).attr('disabled', true);
							$(this).css('background', 'rgba(120, 120, 120, 0.3)');
						});
					});
				}
				if(index == 1) { //拥堵仿真
					$(this).click(function() {
						//初始化每个交通量文本框的值
						function getNum(num) {
							if(num % 2 == 0) {
								return 180;
							} else if(num % 3 == 0) {
								return 160;
							} else {
								return 120;
							}
						}
						$('#traffic .inputDiv input').each(function(index) {
							$(this).val(getNum(index));
							$(this).attr('disabled', true);
							$(this).css('background', 'rgba(120, 120, 120, 0.3)');
						});
					});
				} else if(index == 2) { //疏散仿真
					$(this).click(function() {
						//初始化每个交通量文本框的值
						function getNum(num) {
							if(num % 2 == 0) {
								return 170;
							} else if(num % 3 == 0) {
								return 140;
							} else {
								return 100;
							}
						}
						$('#traffic .inputDiv input').each(function(index) {
							$(this).val(getNum(index));
							$(this).attr('disabled', true);
							$(this).css('background', 'rgba(120, 120, 120, 0.3)');
						});
					});
				} else if(index == 3) { //自定义仿真仿真
					$(this).click(function() {
						$('.inputDiv input').each(function(index) {
							$(this).attr('disabled', false); //使所有文本框可以编辑
							if(index == 0) {
								$(this).focus();
							}
							$(this).css('background', 'rgba(120, 120, 120, 0.3)');
						});
					});
				}
			});
		</script>
	</body>

</html>
