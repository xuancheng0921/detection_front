/** layuiAdmin.std-v1.2.1 LPPL License By http://www.layui.com/admin/ */
;
layui.define(function(e) {
    var a = layui.admin;
    layui.use(["admin", "carousel"],
    function() {
        var e = layui.$,
        a = (layui.admin, layui.carousel),
        l = layui.element,
        t = layui.device();
        e(".layadmin-carousel").each(function() {
            var l = e(this);
            a.render({
                elem: this,
                width: "100%",
                arrow: "none",
                interval: l.data("interval"),
                autoplay: l.data("autoplay") === !0,
                trigger: t.ios || t.android ? "click": "hover",
                anim: l.data("anim")
            })
        }),
        l.render("progress")
    }),
    layui.use(["carousel", "echarts"],
    function() {
        var e = layui.$,
        a = (layui.carousel, layui.echarts),
        l = [],
        t = [{
            title: {
                subtext: "完全实况球员数据",
                textStyle: {
                    fontSize: 14
                }
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                x: "left",
                data: ["罗纳尔多", "舍普琴科"]
            },
            polar: [{
                indicator: [{
                    text: "进攻",
                    max: 100
                },
                {
                    text: "防守",
                    max: 100
                },
                {
                    text: "体能",
                    max: 100
                },
                {
                    text: "速度",
                    max: 100
                },
                {
                    text: "力量",
                    max: 100
                },
                {
                    text: "技巧",
                    max: 100
                }],
                radius: 130
            }],
            series: [{
                type: "radar",
                center: ["50%", "50%"],
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: [{
                    value: [97, 42, 88, 94, 90, 86],
                    name: "舍普琴科"
                },
                {
                    value: [97, 32, 74, 95, 88, 92],
                    name: "罗纳尔多"
                }]
            }]
        }],
        i = e("#LAY-index-pageone").children("div"),
        n = function(e) {
            l[e] = a.init(i[e], layui.echartsTheme),
            l[e].setOption(t[e]),
            window.onresize = l[e].resize
        };
        i[0] && n(0)
    }),
    layui.use(["carousel", "echarts"],
    function() {
        var e = layui.$,
        a = (layui.carousel, layui.echarts),
        l = [],
        t = [{
            tooltip:{trigger:"axis"},
            legend:{data:["实例01","实例02","实例03"]},
            calculable:!0,
            xAxis:[{type:"category",
            boundaryGap:!1,
            data:["02/20 10:00:01",
            "02/20 10:00:02",
            "02/20 10:00:03",
            "02/20 10:00:04",
            "02/20 10:00:05",
            "02/20 10:00:06",
            "02/20 10:00:07",
            "02/20 10:00:08",
            "02/20 10:00:09",
            "02/20 10:00:10",
            "02/20 10:00:11",
            "02/20 10:00:12",
            "02/20 10:00:13",
            "02/20 10:00:14",
            "02/20 10:00:15",
            "02/20 10:00:16",
            "02/20 10:00:17",
            "02/20 10:00:18"    
        ]
        }],
            yAxis:[{
                type:"value",
                name: "百分比",
                axisLabel: {
                    formatter: "{value} %"
                }
            }],
            series:[
                {name:"实例01",type:"line",data:[16,19,24,21,19,19,25,29,32,32,39,41,44,42,32,26,27,19]},
                {name:"实例02",type:"line",data:[22,22,27,21,31,39,48,48,52,43,36,33,32,31,28,29,29,26]},
                {name:"实例03",type:"line",data:[25,21,27,29,26,20,29,32,35,36,39,41,42,32,31,30,28,24]}
                ]}],
        i = e("#LAY-index-pagetwo").children("div"),
        n = function(e) {
            l[e] = a.init(i[e], layui.echartsTheme),
            l[e].setOption(t[e]),
            window.onresize = l[e].resize
        };
        i[0] && n(0)
    }),
    layui.use(["carousel", "echarts"],
    function() {
        var e = layui.$,
        a = (layui.carousel, layui.echarts),
        l = [],
        t = [{
            tooltip:{trigger:"axis"},
            legend:{data:["实例01","实例02","实例03"]},
            calculable:!0,
            xAxis:[{type:"category",
            boundaryGap:!1,
            data:["02/20 10:00:01",
            "02/20 10:00:02",
            "02/20 10:00:03",
            "02/20 10:00:04",
            "02/20 10:00:05",
            "02/20 10:00:06",
            "02/20 10:00:07",
            "02/20 10:00:08",
            "02/20 10:00:09",
            "02/20 10:00:10",
            "02/20 10:00:11",
            "02/20 10:00:12",
            "02/20 10:00:13",
            "02/20 10:00:14",
            "02/20 10:00:15",
            "02/20 10:00:16",
            "02/20 10:00:17",
            "02/20 10:00:18"    
        ]
        }],
            yAxis:[{
                type:"value",
                name: "百分比",
                axisLabel: {
                    formatter: "{value} %"
                }
            }],
            series:[
                {name:"实例01",type:"line",data:[16,19,24,21,19,19,25,29,32,32,39,41,44,42,32,26,27,19]},
                {name:"实例02",type:"line",data:[22,22,27,21,31,39,48,48,52,43,36,33,32,31,28,29,29,26]},
                {name:"实例03",type:"line",data:[25,21,27,29,26,20,29,32,35,36,39,41,42,32,31,30,28,24]}
                ]}],
        i = e("#LAY-index-pagetwo-2").children("div"),
        n = function(e) {
            l[e] = a.init(i[e], layui.echartsTheme),
            l[e].setOption(t[e]),
            window.onresize = l[e].resize
        };
        i[0] && n(0)
    }),

    layui.use(["carousel", "echarts"],
    function() {
        var e = layui.$,
        a = (layui.carousel, layui.echarts),
        l = [],
        t = [{
            tooltip:{trigger:"axis"},
            legend:{data:["实例01","实例02","实例03"]},
            calculable:!0,
            xAxis:[{type:"category",
            boundaryGap:!1,
            data:["02/20 10:00:01",
            "02/20 10:00:02",
            "02/20 10:00:03",
            "02/20 10:00:04",
            "02/20 10:00:05",
            "02/20 10:00:06",
            "02/20 10:00:07",
            "02/20 10:00:08",
            "02/20 10:00:09",
            "02/20 10:00:10",
            "02/20 10:00:11",
            "02/20 10:00:12",
            "02/20 10:00:13",
            "02/20 10:00:14",
            "02/20 10:00:15",
            "02/20 10:00:16",
            "02/20 10:00:17",
            "02/20 10:00:18"    
        ]
        }],
            yAxis:[{
                type:"value",
                name: "百分比",
                axisLabel: {
                    formatter: "{value} %"
                }
            }],
            series:[
                {name:"实例01",type:"line",data:[16,19,24,21,19,19,25,29,32,32,39,41,44,42,32,26,27,19]},
                {name:"实例02",type:"line",data:[22,22,27,21,31,39,48,48,52,43,36,33,32,31,28,29,29,26]},
                {name:"实例03",type:"line",data:[25,21,27,29,26,20,29,32,35,36,39,41,42,32,31,30,28,24]}
                ]}],
        i = e("#LAY-index-pagetwo-3").children("div"),
        n = function(e) {
            l[e] = a.init(i[e], layui.echartsTheme),
            l[e].setOption(t[e]),
            window.onresize = l[e].resize
        };
        i[0] && n(0)
    }),


    layui.use(["carousel", "echarts"],
    function() {
        var e = layui.$,
        a = (layui.carousel, layui.echarts),
        l = [],
        t = [{
            tooltip:{trigger:"axis"},
            legend:{data:["实例01","实例02","实例03"]},
            calculable:!0,
            xAxis:[{type:"category",
            boundaryGap:!1,
            data:["02/20 10:00:01",
            "02/20 10:00:02",
            "02/20 10:00:03",
            "02/20 10:00:04",
            "02/20 10:00:05",
            "02/20 10:00:06",
            "02/20 10:00:07",
            "02/20 10:00:08",
            "02/20 10:00:09",
            "02/20 10:00:10",
            "02/20 10:00:11",
            "02/20 10:00:12",
            "02/20 10:00:13",
            "02/20 10:00:14",
            "02/20 10:00:15",
            "02/20 10:00:16",
            "02/20 10:00:17",
            "02/20 10:00:18"    
        ]
        }],
            yAxis:[{
                type:"value",
                name: "百分比",
                axisLabel: {
                    formatter: "{value} %"
                }
            }],
            series:[
                {name:"实例01",type:"line",data:[16,19,24,21,19,19,25,29,32,32,39,41,44,42,32,26,27,19]},
                {name:"实例02",type:"line",data:[22,22,27,21,31,39,48,48,52,43,36,33,32,31,28,29,29,26]},
                {name:"实例03",type:"line",data:[25,21,27,29,26,20,29,32,35,36,39,41,42,32,31,30,28,24]}
                ]}],
        i = e("#LAY-index-pagetwo-4").children("div"),
        n = function(e) {
            l[e] = a.init(i[e], layui.echartsTheme),
            l[e].setOption(t[e]),
            window.onresize = l[e].resize
        };
        i[0] && n(0)
    }),





    layui.use(["carousel", "echarts"],
    function() {
        var e = layui.$,
        a = (layui.carousel, layui.echarts),
        l = [],
        t = [{
            title: {
                text: "全国的 layui 用户分布",
                subtext: "不完全统计"
            },
            tooltip: {
                trigger: "item"
            },
            dataRange: {
                orient: "horizontal",
                min: 0,
                max: 6e4,
                text: ["高", "低"],
                splitNumber: 0
            },
            series: [{
                name: "全国的 layui 用户分布",
                type: "map",
                mapType: "china",
                selectedMode: "multiple",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0
                        }
                    },
                    emphasis: {
                        label: {
                            show: !0
                        }
                    }
                },
                data: [{
                    name: "西藏",
                    value: 60
                },
                {
                    name: "青海",
                    value: 167
                },
                {
                    name: "宁夏",
                    value: 210
                },
                {
                    name: "海南",
                    value: 252
                },
                {
                    name: "甘肃",
                    value: 502
                },
                {
                    name: "贵州",
                    value: 570
                },
                {
                    name: "新疆",
                    value: 661
                },
                {
                    name: "云南",
                    value: 8890
                },
                {
                    name: "重庆",
                    value: 10010
                },
                {
                    name: "吉林",
                    value: 5056
                },
                {
                    name: "山西",
                    value: 2123
                },
                {
                    name: "天津",
                    value: 9130
                },
                {
                    name: "江西",
                    value: 10170
                },
                {
                    name: "广西",
                    value: 6172
                },
                {
                    name: "陕西",
                    value: 9251
                },
                {
                    name: "黑龙江",
                    value: 5125
                },
                {
                    name: "内蒙古",
                    value: 1435
                },
                {
                    name: "安徽",
                    value: 9530
                },
                {
                    name: "北京",
                    value: 51919
                },
                {
                    name: "福建",
                    value: 3756
                },
                {
                    name: "上海",
                    value: 59190
                },
                {
                    name: "湖北",
                    value: 37109
                },
                {
                    name: "湖南",
                    value: 8966
                },
                {
                    name: "四川",
                    value: 31020
                },
                {
                    name: "辽宁",
                    value: 7222
                },
                {
                    name: "河北",
                    value: 3451
                },
                {
                    name: "河南",
                    value: 9693
                },
                {
                    name: "浙江",
                    value: 62310
                },
                {
                    name: "山东",
                    value: 39231
                },
                {
                    name: "江苏",
                    value: 35911
                },
                {
                    name: "广东",
                    value: 55891
                }]
            }]
        }],
        i = e("#LAY-index-pagethree").children("div"),
        n = function(e) {
            l[e] = a.init(i[e], layui.echartsTheme),
            l[e].setOption(t[e]),
            window.onresize = l[e].resize
        };
        i[0] && n(0)
    }),
    layui.use("table",
    function() {
        var e = (layui.$, layui.table);
        e.render({
            elem: "#LAY-index-prograss",
            url: layui.setter.base + "json/console/prograss.js",
            cols: [[{
                type: "checkbox",
                fixed: "left"
            },
            {
                field: "prograss",
                title: "任务"
            },
            {
                field: "time",
                title: "所需时间"
            },
            {
                field: "complete",
                title: "完成情况",
                templet: function(e) {
                    return "已完成" == e.complete ? '<del style="color: #5FB878;">' + e.complete + "</del>": "进行中" == e.complete ? '<span style="color: #FFB800;">' + e.complete + "</span>": '<span style="color: #FF5722;">' + e.complete + "</span>"
                }
            }]],
            skin: "line"
        })
    }),
    a.events.replyNote = function(e) {
        var a = e.data("id");
        layer.prompt({
            title: "回复留言 ID:" + a,
            formType: 2
        },
        function(e, a) {
            layer.msg("得到：" + e),
            layer.close(a)
        })
    },
    e("sample", {})
});