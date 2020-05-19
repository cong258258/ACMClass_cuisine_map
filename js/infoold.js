    // 全国省份列表
    var dataMap = [{ name: '北京' }, 
    { name: '天津', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#2ec7c9"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" }}}, 
    { name: '上海', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#b6a2de"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '重庆', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#5ab1ef"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '河北', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#d87a80"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '河南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#5ab1ef"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '云南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffb980"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '辽宁', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#e5cf0d"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '黑龙江', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#b6a2de"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '湖南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#07a2a4"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '安徽', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#e5cf0d"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '山东', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#5ab1ef"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } },
    { name: '新疆', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffdacd"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '江苏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffdacd"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '浙江', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#e5cf0d"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '江西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#5ab1ef"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '湖北', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#8d98b3"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '广西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#07a2a4"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '甘肃', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffdacd"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '山西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffdacd"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '内蒙古', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#8d98b3"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '陕西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#d87a80"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '吉林', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#07a2a4"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '福建', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#5ab1ef"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '贵州', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#5ab1ef"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } },
    { name: '广东', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#b6a2de"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '青海', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#8d98b3"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '西藏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#5ab1ef"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '四川', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffdacd"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '宁夏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffb980"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '海南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#d87a80"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '台湾', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#b6a2de"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '香港', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffdacd"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    { name: '澳门', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "#ffb980"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }]


    //     { name: '天津', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" }}}, 
    // { name: '上海', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '重庆', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '河北', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '河南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '云南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '辽宁', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '黑龙江', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '湖南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '安徽', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '山东', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } },
    // { name: '新疆', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '江苏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '浙江', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '江西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '湖北', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '广西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '甘肃', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '山西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '内蒙古', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '陕西', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '吉林', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '福建', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '贵州', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } },
    // { name: '广东', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '青海', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '西藏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '四川', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '宁夏', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '海南', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '台湾', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '香港', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }, 
    // { name: '澳门', itemStyle: {normal: {borderWidth: .5,shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.2)',areaColor: "rgba(0, 0, 0)"} ,emphasis: {borderWidth: .8,areaColor: "#ffdead" } } }]
    var all_info = [];
    var option = {
        color: ['#ff0000','#00ff00', '#0000ff', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        tooltip: {
            formatter: function (params) {
                var info = '<p style="font-size:15px">' + params.name + '</p>';
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
            document.getElementById("fillup").innerHTML='<iframe src="' + params.name + '.htm" height="600" width="800" style="padding: 20px;"></iframe>';
            window.location.href = "#popup";
            myChart.setOption(option);
        });
    myChart.setOption(option);