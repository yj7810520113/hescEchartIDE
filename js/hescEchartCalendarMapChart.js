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
            (factory((global.hescEchartCalendar = global.hescEchartCalendar || {})));
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
        function jsonToArray(d){
            var jsonToArrayArrays=[];
            d.forEach(function (d1) {
                var jsonToArrayObject=[];
                for(var key in d1){
                    jsonToArrayObject.push(key);
                    jsonToArrayObject.push(d1[key])
                }
                jsonToArrayArrays.push(jsonToArrayObject);
            });
            return jsonToArrayArrays;
        };
        function  seriesSymbolSizeSortFun(d) {
            return d.sort(sortData);
        }
        function sortData(a,b){
            return b[1]-a[1];
        }
        // function calendarProperties(d){
        //     var visualMapMaxV=(d[0])[1];
        //     var visualMapMinV=(d[d.length-1])[1];
        //     var calendarRangeStartV=(d[0])[0];
        //     var calendarRangeEndV=(d[d.length-1])[0];
        //     var seriesSymbolSizeV=(d[0])[1]/20;
        //     return calPro:{
        //
        //     }
        //
        //
        // }

        var selectID = null;
        //option相关属性
        var option = null,
            backgroundColor = '#ffffff',
            //绘图区相对于画布偏移属性
            gridLeft = 50,
            gridTop = 50,
            gridBottom = 50,
            gridRight = 50,
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
             visualMap，颜色映射
             */
            visualShow = true,
            visualMapMin = 0,
            visualMapMax = 200,
            visualMapCalculable = true,
            visualMapOrient = 'horizontal',
            visualMapLeft = 20,
            visualMapTop = 20,
            visualMapColorStart = 'yellow',
            visualMapColorEnd = 'red',
            /*
             calendar
             */
            calendarTop = 100,
            calendarLeft = 50,
            calendarOrient = 'vertical',
            calendarRangeStart = '2017-1-1',
            calendarRangeEnd = '2017-3-31',
            calendarYearLabelMargin = 40,
            calendarMonthLabelNameMap = 'cn',
            calendarMonthLabelMargin = 40,
            calendarDayLabelFirstDay = 1,
            calendarCellSizeWidth = 'auto',
            calendarCellSizeHeight = '20',
            /*
             series
             */
            seriesType = 'heatmap',
            seriesCoordinateSystem = 'calendar',
            seriesLabelNormalShow = true,
            seriesLabelNormalTextStyleColor = 'black',
            seriesLabelNormalTextStyleFontsize = 12,
            seriesSymbolSize=50;

        var calendarFun = function (asyncData) {

            //----------------图形相关属性--------
            // dom='body',
            // width='800px',
            // height='600px';
            //----------------asyncJson数据相关属性----
            //n为默认坐标下，元素的个数，即为x轴个数
            var dataNum = 0;
            //设置series个数，即为多维柱状图的维数
            var seriesNum = 0;

            //设置legend的图示如果没有设置lengattr属性，legend图示取默认值
            console.log(asyncData);
            // console.log();

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
                toolbox: {},
                tooltip: {},
                grid: {
                    left: gridLeft,
                    right: gridRight,
                    top: gridTop,
                    bottom: gridBottom
                },
                //生成visualMap
                visualMap: {
                    show: visualShow,
                    min: visualMapMin,
                    max: visualMapMax,
                    calculable: visualMapCalculable,
                    orient: visualMapOrient,
                    left: visualMapLeft,
                    top: visualMapTop,
                    color: [visualMapColorStart, visualMapColorEnd]
                },
                calendar: [
                    {
                        top: calendarTop,
                        left: calendarLeft,
                        orient: calendarOrient,
                        range: [calendarRangeStart, calendarRangeEnd],
                        yearLabel: {
                            margin: 40
                        },
                        monthLabel: {
                            nameMap: 'cn',
                            margin: 20
                        },
                        dayLabel: {
                            firstDay: calendarDayLabelFirstDay,
                            nameMap: 'cn'
                        },
                        cellSize: [calendarCellSizeWidth, calendarCellSizeHeight]
                    }
                ],
                series: [{
                    type: seriesType,
                    coordinateSystem: 'calendar',
                    data: jsonToArray(asyncData),
                    label: {
                        normal: {
                            show: seriesLabelNormalShow,
                            textStyle: {
                                color: seriesLabelNormalTextStyleColor,
                                fontSize: seriesLabelNormalTextStyleFontsize
                            }
                        }
                    },
                    symbolSize: function (val) {
                        return val[1] / seriesSymbolSize;
                    },
                }]


            }
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
        var gridLeftFun = function (x) {
            gridLeft = x;
            return this;
        }
        var gridRightFun = function (x) {
            gridRight = x;
            return this;
        }
        var gridTopFun = function (x) {
            gridTop = x;
            return this;
        }
        var gridBottomFun = function (x) {
            gridBottom = x;
            return this;
        }

        var selectFun = function (selector) {
            selectID = selector;
            return this;
        }

        var visualShowFun = function (x) {
            visualShow = x;
            return this;
        }
        var visualMapMinFun = function (x) {
            visualMapMin = x;
            return this;
        }
        var visualMapMaxFun = function (x) {
            visualMapMax = x;
            return this;
        }
        var visualMapCalculableFun = function (x) {
            visualMapCalculable = x;
            return this;
        }
        var visualMapOrientFun = function (x) {
            visualMapOrient = x;
            return this;
        }
        var visualMapLeftFun = function (x) {
            visualMapLeft = x;
            return this;
        }
        var visualMapTopFun = function (x) {
            visualMapTop = x;
            return this;
        }
        var visualMapColorStartFun = function (x) {
            visualMapColorStart = x;
            return this;
        }
        var visualMapColorEndFun = function (x) {
            visualMapColorEnd = x;
            return this;
        }
        var calendarTopFun = function (x) {
            calendarTop = x;
            return this;
        }
        var calendarLeftFun = function (x) {
            calendarLeft = x;
            return this;
        }
        var calendarOrientFun = function (x) {
            calendarOrient = x;
            return this;
        }
        var calendarRangeStartFun = function (x) {
            calendarRangeStart = x;
            return this;
        }
        var calendarRangeEndFun = function (x) {
            calendarRangeEnd = x;
            return this;
        }
        var calendarYearLabelMarginFun = function (x) {
            calendarYearLabelMargin = x;
            return this;
        }
        var calendarMonthLabelMarginFun = function (x) {
            calendarMonthLabelMargin = x;
            return this;
        }
        var calendarDayLabelFirstDayFun = function (x) {
            calendarDayLabelFirstDay = x;
            return this;
        }
        var calendarCellSizeWidthFun = function (x) {
            calendarCellSizeWidth = x;
            return this;
        }
        var calendarCellSizeHeightFun = function (x) {
            calendarCellSizeHeight = x;
            return this;
        }
        var seriesTypeFun = function (x) {
            seriesType = x;
            return this;
        }
        var seriesLabelNormalShowFun = function (x) {
            seriesLabelNormalShow = x;
            return this;
        }
        var seriesLabelNormalTextStyleColorFun = function (x) {
            seriesLabelNormalTextStyleColor = x;
            return this;
        }
        var seriesLabelNormalTextStyleFontsizeFun = function (x) {
            seriesLabelNormalTextStyleFontsize = x;
            return this;
        }
        var seriesSymbolSizeFun=function (x) {
            seriesSymbolSize=x;
            return this
        }
        var getOptionFun=function () {
            return option;
        }

        exports.option=getOptionFun;


        exports.select = selectFun;

        exports.calendar = calendarFun;
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
         Grid相关属性
         */
        exports.gridLeft = gridLeftFun;
        exports.gridRight = gridRightFun;
        exports.gridTop = gridTopFun;
        exports.gridBottom = gridBottomFun;
        /*
        visualMap相关属性
         */
        exports.visualShow = visualShowFun;
        exports.visualMapMin = visualMapMinFun;
        exports.visualMapMax = visualMapMaxFun;
        exports.visualMapCalculable = visualMapCalculableFun;
        exports.visualMapOrient = visualMapOrientFun;
        exports.visualMapLeft = visualMapLeftFun;
        exports.visualMapTop = visualMapTopFun;
        exports.visualMapColorStart = visualMapColorStartFun;
        exports.visualMapColorEnd = visualMapColorEndFun;
        /*
        calendar
         */
        exports.calendarTop = calendarTopFun;
        exports.calendarLeft = calendarLeftFun;
        exports.calendarOrient = calendarOrientFun;
        exports.calendarRangeStart = calendarRangeStartFun;
        exports.calendarRangeEnd = calendarRangeEndFun;
        exports.calendarYearLabelMargin = calendarYearLabelMarginFun;
        exports.calendarMonthLabelMargin = calendarMonthLabelMarginFun;
        exports.calendarDayLabelFirstDay = calendarDayLabelFirstDayFun;
        exports.calendarCellSizeWidth = calendarCellSizeWidthFun;
        exports.calendarCellSizeHeight = calendarCellSizeHeightFun;
        /*
        series
         */
        exports.seriesType = seriesTypeFun;
        exports.seriesLabelNormalShow = seriesLabelNormalShowFun;
        exports.seriesLabelNormalTextStyleColor = seriesLabelNormalTextStyleColorFun;
        exports.seriesLabelNormalTextStyleFontsize = seriesLabelNormalTextStyleFontsizeFun;
        exports.seriesSymbolSize=seriesSymbolSizeFun;

    }
)));