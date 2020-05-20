    // 全国省份列表
    var dataMap = [
    { name: '北京', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '天津', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#1874CD"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" }}}, 
    { name: '上海', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#FFD700"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '重庆', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '河北', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#d87a80"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '河南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#008B8B"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '云南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '辽宁', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '黑龙江', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '湖南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '安徽', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DB7093"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '山东', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#F4A460"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } },
    { name: '新疆', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '江苏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#90EE90"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '浙江', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#5CACEE"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '江西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '湖北', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#FF7F24"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '广西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '甘肃', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#CDAD00"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '山西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '内蒙古', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '陕西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '吉林', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '福建', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#458B00"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '贵州', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } },
    { name: '广东', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#9370DB"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '青海', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '西藏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '四川', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#FF6347"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '宁夏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '海南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '台湾', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '香港', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '澳门', itemStyle: {normal: {borderWidth: .5,shadowBlur: 2, shadowColor: 'rgba(0, 0, 0, 0.3)',areaColor: "#DCDCDC"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }]

    var all_info = [];
    all_info['天津'] = '张洪鑫';
    all_info['上海'] = '储浩天，周聪，潘新怡，杨新宇，孙晨曦，朱玮昊';
    all_info['河北'] = '任一凡，邢泽宇';
    all_info['河南'] = '孟良谕';
    all_info['安徽'] = '严含冲，许振宇';
    all_info['山东'] = '林春茹';
    all_info['江苏'] = '徐若凡，李至丹';
    all_info['浙江'] = '史添能，宋曜旭，闵乐钧，陈晴，史涵雯，傅乐天，王天乐，季利恒';
    all_info['湖北'] = '许楚豪，陈雪阳';
    all_info['甘肃'] = '徐立沛';
    all_info['福建'] = '许烨辰，黄臻';
    all_info['广东'] = '蔡子逸，何泓豪';
    all_info['四川'] = '郑皓天，石昕怡，衡阳';
    var option = {
        color: ['#ff0000','#00ff00', '#0000ff', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        tooltip: {
            formatter: function (params) {
                var info = '<p style="font-size:15px">' + params.name + '</p>';
                if (all_info[params.name])
                    info += '<p>'+ all_info[params.name] + '</p>';
                return info;
            },
            backgroundColor: "#ff7f50",//提示标签背景颜色
            textStyle: { color: "#fff" } //提示标签字体颜色
        },
        series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode: 'multiple',
                label: {
                    normal: {
                        show: true,//显示省份标签
                        // textStyle:{color:"#c71585"}//省份标签字体颜色
                    },
                    emphasis: {
                        show: true,//对应的鼠标悬浮效果
                        // textStyle:{color:"#800080"}
                    }
                },
                data: dataMap
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('container'));
    myChart.on('click', function (params) {
            document.getElementById("fillup").innerHTML='<iframe src="' + params.name + '.html" frameborder="0" style="padding: 20px; height: 80vh;width: 60vw"></iframe>';
            window.location.href = "#popup";
            myChart.setOption(option);
        });
    myChart.setOption(option);