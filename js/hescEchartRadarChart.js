/**
 * Created by WebStorm
 * User:maomao,http://www.mmcode.top
 * Date:2017/4/11
 * Time:15:34
 **/
// Inspired by D3.js、Echart、RChart.
// each function by JQuery
//对于barchart数据格式约定
//对于无论是普通柱状图、堆叠柱状图还是多维堆叠柱状图对于以下定义
//---数据格式通过stacked属性设置
//---如：
//---stacked()代表二维柱状图
//---stacked([1,1,1])代表一维柱状图
//---stacked([1,1,2])代表二维堆积柱状图
//[[{},{},{}],[{},{},{}]]

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.hescEchart = global.hescEchart || {})));
}(this, (function (exports) {
    'use strict';
    var version = "0.0.1";

    function stringToArray(d) {
        var ds = d.split(/,|，/);
        d = [];
        for (var dsi in ds) {
            d.push(ds[dsi]);
        }
        return d;
    }

    var selectID = null;
    //option相关属性
    var option = null,
        backgroundColor = '#ffffff',
        /*
         title相关属性
         */
        title = '我是标题，请设置title属性',
        subtitle = false,
        titleBackgroundColor = '#fff',
        titleTop = 10,
        titleLeft = 10,
        titleTextStyleFontSize = 20,
        titleTextStyleColor = '#000',
        /*
         legend相关属性
         */
        //legend数据的图示，默认为x轴坐标的数值
        legendAttr = '',
        //legend的对齐方式
        legendAlign = 'left',
        legendLeft = 10,
        legendRight = 10,
        legendTop = 10,
        legendBottom = 10,
        legendOrient = 'horizontal',
        /*
         radar图特有属性
         */
        tooltipShow = true,
        radarIndicators = '',
        radarCenterLeft = 50,
        radarCenterTop = 50,
        radarRadius = 100,
        radarStartAngle = 90,
        radarSplitNumber = 4,
        radarShape = 'rect',
        radarNameTextStyleColor = '#000',
        radarNameTextStyleFontSize = 12,
        radarAxisLineShow = true,
        radarAxisLineLineStyle = '#000fff',
        radarSplitLineShow = true,
        radarSplitLineLineStyle = '#000fff',
        seriesName = '雷达图',
        seriesType = 'radar',
        seriesSymbol = 'circle',
        seriesSymbolSize = 5,
        seriesLineStyleNormalShow = false,
        seriesLineStyleNormalWidth = 0.5,
        seriesLineStyleNormalType = 'solid',//dashed、'dotted'
        seriesLineStyleNormalOpacity = 1;

    var radar = function (asyncData) {
        //----------------图形相关属性--------
        // dom='body',
        // width='800px',
        // height='600px';
        //----------------asyncJson数据相关属性----
        //n为默认坐标下，元素的个数，即为x轴个数
        var dataNum = 0;
        dataNum = asyncData.length;

        //获得series的data
        var seriesDatas = [];
        for(var i=0;i<dataNum;i++){
           // console.log(asyncData[i])
            var seriesDataSingle=[];
            for (var seriesData in asyncData[i]) {
                // console.log();
                for (var seriesDataKey in (asyncData[i])[seriesData]) {
                    seriesDataSingle.push(((asyncData[i])[seriesData])[seriesDataKey]);
                }
            }
            seriesDatas.push(seriesDataSingle);
        }



        if (radarIndicators.length==0) {
            var radarIndicator = [];
            asyncData[0].forEach(function (data2, i) {
                for (var radarIndicatorO in data2) {
                    radarIndicator.push({text: radarIndicatorO});
                }
            });
        }
        else {
            var radarIndicator = [];
            var radarIndicatorArray = stringToArray(radarIndicators);
            for (var radarIndicatorArrayO in radarIndicatorArray) {
                radarIndicator.push({text: radarIndicatorArrayO});
            }
        }
        if (legendAttr.length == 0) {
            legendAttr = [];
            for (var i = 0; i < dataNum; i++) {
                legendAttr.push("类目" + i);
            }
        }
        else {
             legendAttr=stringToArray(legendAttr);
        }

        /*
         生成的配置文件
         */
        var itemStyle = {
            normal: {},
            emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        };
        option = {
            backgroundColor: backgroundColor,
            title: {
                text: title,
                subtext: subtitle,
                backgroundColor: titleBackgroundColor,
                top: titleTop,
                left: titleLeft,
                textStyle: {
                    fontSize: titleTextStyleFontSize,
                    color: titleTextStyleColor
                }
            },
            //legend
            legend: {
                data: legendAttr,
                align: legendAlign,
                left: legendLeft,
                top: legendTop,
                orient: legendOrient
                //  align:left
            },
            toolbox: {},
            tooltip: {
                trigger: 'item',
            },
            radar: [{
                indicator: radarIndicator,
                center: [radarCenterLeft, radarCenterTop],
                radius: radarRadius,
                startAngle: radarStartAngle,
                splitNumber: radarSplitNumber,
                shape: radarShape,
                name: {
                    textStyle: {
                        color: radarNameTextStyleColor,
                        fontSize: radarNameTextStyleFontSize
                    }
                },
                axisLine: {
                    show: radarAxisLineShow,
                    lineStyle: {
                        color: radarAxisLineLineStyle
                    }
                },
                splitLine: {
                    show: radarSplitLineShow,
                    lineStyle: {
                        color: radarSplitLineLineStyle
                    }
                },
            }],
            series: {
                name: seriesName,
                type: 'radar',
                tooltip: {
                    trigger: tooltipShow
                },
                data: (function () {
                    var radarSeriesDatas = [];
                    for (var radarSeriesDatasInt = 0; radarSeriesDatasInt < dataNum; radarSeriesDatasInt++) {
                        var radarSeriesData = {
                            name: legendAttr[radarSeriesDatasInt],
                            value: seriesDatas[radarSeriesDatasInt],
                            symbol: seriesSymbol,
                            symbolSize: seriesSymbolSize,
                            lineStyle: {
                                normal: {
                                    show: seriesLineStyleNormalShow,
                                    width: seriesLineStyleNormalWidth,
                                    type: seriesLineStyleNormalType,
                                    opacity: seriesLineStyleNormalOpacity
                                }
                            }
                        }
                        radarSeriesDatas.push(radarSeriesData);
                    }
                    return radarSeriesDatas;
                })()
            }
        }
        return this;

    }

    var selectFun = function (selector) {
        selectID = selector;
        return this;
    }
    var render = function () {
        console.log(option);
        var chart = echarts.init(document.getElementById(selectID));
        chart.setOption(option);
        return this;
    }
    var backgroundColorFun = function (x) {
        backgroundColor = x;
        return this;
    }
    var titleFun = function (x) {
        title = x;
        return this;
    }
    var subtitleFun = function (x) {
        subtitle = x;
        return this;
    }
    var titleBackgroundColorFun = function (x) {
        titleBackgroundColor = x;
        return this;
    }
    var titleTopFun = function (x) {
        titleTop = x;
        return this;
    }
    var titleLeftFun = function (x) {
        titleLeft = x;
        return this;
    }
    var titleTextStyleFontSizeFun = function (x) {
        titleTextStyleFontSize = x;
        return this;
    }
    var titleTextStyleColorFun = function (x) {
        titleTextStyleColor = x;
        return this;
    }
    var legendAttrFun = function (x) {
        legendAttr = x;
        return this;
    }
    var legendAlignFun = function (x) {
        legendAlign = x;
        return this;
    }
    var legendLeftFun = function (x) {
        legendLeft = x;
        return this;
    }
    var legendTopFun = function (x) {
        legendTop = x;
        return this;
    }
    var legendOrientFun = function (x) {
        legendOrient = x;
        return this;
    }
    var tooltipShowFun = function (x) {
        tooltipShow = x;
        return this;
    }
    var radarIndicatorFun = function (x) {
        radarIndicators = x;
        return this;
    }
    var radarCenterLeftFun = function (x) {
        radarCenterLeft = x;
        return this;
    }
    var radarCenterTopFun = function (x) {
        radarCenterTop = x;
        return this;
    }
    var radarRadiusFun = function (x) {
        radarRadius = x;
        return this;
    }
    var radarStartAngleFun = function (x) {
        radarStartAngle = x;
        return this;
    }
    var radarSplitNumberFun = function (x) {
        radarSplitNumber = x;
        return this;
    }

    var radarShapeFun = function (x) {
        radarShape = x;
        return this;
    }
    var radarNameTextStyleColorFun = function (x) {
        radarNameTextStyleColor = x;
        return this;
    }
    var radarNameTextStyleFontSizeFun = function (x) {
        radarNameTextStyleFontSize = x;
        return this;
    }
    var radarAxisLineShowFun = function (x) {
        radarAxisLineShow = x;
        return this;
    }
    var radarAxisLineLineStyleFun = function (x) {
        radarAxisLineLineStyle = x;
        return this;
    }
    var radarSplitLineShowFun = function (x) {
        radarSplitLineShow = x;
        return this;
    }
    var radarSplitLineLineStyleFun = function (x) {
        radarSplitLineLineStyle = x;
        return this;
    }
    var seriesNameFun = function (x) {
        seriesName = x;
        return this;
    }
    var seriesTypeFun = function (x) {
        seriesType = x;
        return this;
    }
    var seriesSymbolFun = function (x) {
        seriesSymbol = x;
        return this;
    }
    var seriesSymbolSizeFun = function (x) {
        seriesSymbolSize = x;
        return this;
    }
    var seriesLineStyleNormalShowFun = function (x) {
        seriesLineStyleNormalShow = x;
        return this;
    }
    var seriesLineStyleNormalWidthFun = function (x) {
        seriesLineStyleNormalWidth = x;
        return this;
    }
    var seriesLineStyleNormalTypeFun = function (x) {
        seriesLineStyleNormalType = x;
        return this;
    }
    var seriesLineStyleNormalOpacityFun = function (x) {
        seriesLineStyleNormalOpacity = x;
        return this;
    }

    exports.select = selectFun;

    exports.radar = radar;
    exports.render = render;
    exports.background = backgroundColorFun;
    /*
     title相关属性
     */
    exports.title = titleFun;
    exports.subtitle = subtitleFun;
    exports.titleBackgroundColor = titleBackgroundColorFun;
    exports.titleTop = titleTopFun;
    exports.titleLeft = titleLeftFun;
    exports.titleTextStyleFontSize = titleTextStyleFontSizeFun;
    exports.titleTextStyleColor = titleTextStyleColorFun;
    /*
     legend相关属性
     */
    exports.legendAttr = legendAttrFun;
    exports.legendAlign = legendAlignFun;
    exports.legendLeft = legendLeftFun;
    exports.legendTop = legendTopFun;
    exports.legendOrient = legendOrientFun;


    /*
     radar相关属性
     */
    exports.tooltipShow = tooltipShowFun;
    exports.radarIndicator = radarIndicatorFun;
    exports.radarCenterLeft = radarCenterLeftFun;
    exports.radarCenterTop = radarCenterTopFun;
    exports.radarRadius = radarRadiusFun;
    exports.radarStartAngle = radarStartAngleFun;
    exports.radarSplitNumber = radarSplitNumberFun;
    exports.radarShape = radarShapeFun;
    exports.radarNameTextStyleColor = radarNameTextStyleColorFun;
    exports.radarNameTextStyleFontSize = radarNameTextStyleFontSizeFun;
    exports.radarAxisLineShow = radarAxisLineShowFun;
    exports.radarAxisLineLineStyle = radarAxisLineLineStyleFun;
    exports.radarSplitLineShow = radarSplitLineShowFun;
    exports.radarSplitLineLineStyle = radarSplitLineLineStyleFun;
    /*
     series相关属性
     */
    exports.seriesName = seriesNameFun;
    exports.seriesType = seriesTypeFun;
    exports.seriesSymbol = seriesSymbolFun;
    exports.seriesSymbolSize = seriesSymbolSizeFun;
    exports.seriesLineStyleNormalShow = seriesLineStyleNormalShowFun;
    exports.seriesLineStyleNormalWidth = seriesLineStyleNormalWidthFun;
    exports.seriesLineStyleNormalType = seriesLineStyleNormalTypeFun;
    exports.seriesLineStyleNormalOpacity = seriesLineStyleNormalOpacityFun;

})));