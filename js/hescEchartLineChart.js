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
            (factory((global.hescEchartLine = global.hescEchartLine || {})));
}(this, (function (exports) {
    'use strict';
    var version = "0.0.1";

    function stringToArray(d){
        var ds=d.split(/,|，/);
        d=[];
        for(var dsi in ds){
            d.push(ds[dsi]);
        }
        return d;
    }
    var selectID=null;
    //option相关属性
    var option=null,
        theme='vintage',
        backgroundColor = '#ffffff',
        //绘图区相对于画布偏移属性
        gridLeft=50,
        gridTop=50,
        gridBottom=50,
        gridRight=50,
        /*
        title相关属性
         */
        title = '我是标题，请设置title属性',
        subtitle = false,
        titleBackgroundColor='#fff',
        titleTop=10,
        titleLeft=10,
        titleTextStyleFontSize=20,
        titleTextStyleColor='#000',
        tooltipAxisPointerType='shadow',
        /*
        legend相关属性
         */
        //legend数据的图示，默认为x轴坐标的数值
        legendAttr = '',
        //legend的对齐方式
        legendAlign = 'left',
        legendLeft=10,
        legendRight=10,
        legendTop=10,
        legendBottom=10,
        legendOrient='',
        /*
        是否为流图或者面积图
         */
        seriesAreaStyle=false,
        //另存为图片等部分
        toolboxAttr = 'default',
        /*
        坐标轴相关属性
         */
        //x轴显示的坐标文字
        xAxisData = '',
        //x轴是否显示网格
        xAxisPosition='bottom',
        xAxisGridLineAttr = 'false',
        xAxisInverse=false,
        xAxisSplitAreaShow=false,
        xAxisAxisLineShow=true,
        xAxisAxisLabelInside=false,
        xAxisAxisLabelTextStyleColor='#000',
        xAxisAxisTickShow=true,
        xAxisBoundaryGap=true,
        //y轴显示的坐标文字
        yAxisDataAttr = '',
        //y轴是否显示网格
        yAxisPosition='left',
        yAxisGridLineAttr = 'true',
        yAxisInverse=false,
        yAxisSplitAreaShow=false,
        yAxisAxisLineShow=true,
        yAxisAxisLabelInside=false,
        yAxisAxisLabelTextStyleColor='#000',
        yAxisAxisTickShow=true,
        //stack的设置,默认情况下为一维普通柱状图
        stackAttr='',
        //判断x，y轴是否转置，即为条形图横过来画
        reverse=false,
        
        /*
        5.10新加属性
         */
        color='',
        yAxisAxisLabelInterval=0,
        yAxisAxisLabelRotate=0,
        xAxisAxisLabelInterval=0,
        xAxisAxisLabelRotate=0,
        legendTextStyleColor='#fff',
        //平滑曲线
        smooth=false;

    var line=function (asyncData) {
            //----------------图形相关属性--------
            // dom='body',
            // width='800px',
            // height='600px';
            //----------------asyncJson数据相关属性----
            //n为默认坐标下，元素的个数，即为x轴个数
            var dataNum=0;
        //设置series个数，即为多维柱状图的维数
        var seriesNum = 0;

        /*
         处理asyncData数据,并生成series
         */
        // asyncData.forEach(function (data1) {
        //n为默认坐标下，元素的个数，即为x轴个数
        dataNum = asyncData.length;
        //设置series个数，即为多维柱状图的维数
        seriesNum = asyncData[0].length;
        //设置legend的图示如果没有设置lengattr属性，legend图示从第一个元素的x轴值获取
        if(legendAttr.length==0){
            legendAttr=[];
            asyncData[0].forEach(function (data2,i) {
                legendAttr.push('默认值'+i);
            });
            // console.log();
        }
        //否则将legendAttr转换为array
        else{
            legendAttr=stringToArray(legendAttr);
        }

        /*
         生成的配置文件
         */
        var itemStyle = {
            normal: {
            },
            emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        };
        option={
            backgroundColor:backgroundColor,
            title:{
                text:title,
                subtext:subtitle,
                backgroundColor:titleBackgroundColor,
                top:titleTop,
                left:titleLeft,
                textStyle:{
                    fontSize:titleTextStyleFontSize,
                    color:titleTextStyleColor
                }
            },
            //legend
            legend:{
                data:legendAttr,
                align:legendAlign,
                left:legendLeft,
                top:legendTop,
                textStyle:{
                    color:legendTextStyleColor
                }
              //  align:left
            },
            toolbox:{

            },
            tooltip:{
                trigger:'axis',
                axisPointer:{
                    type:tooltipAxisPointerType
                },
            },
            xAxis:{
                data:(function () {
                    if(reverse==false) {
                        //处理string转换为array的情况
                        if (xAxisData.length != 0) {
                            return stringToArray(xAxisData);
                        }
                        else {
                            var defaultXAxisData = [];
                            for(var i in asyncData){
                                defaultXAxisData.push((asyncData[i])[0].x)
                            }
                            return defaultXAxisData;


                        }
                    }
                    else{
                        return false;
                    }
                })(),
                silent:false,
                type:(function () {
                    if(reverse==false){
                        return 'category';
                    }
                    else{
                        return 'value';
                    }
                })(),
                splitLine:{
                    show:xAxisGridLineAttr
                 },
                 //------------4.14添加属性
                position:xAxisPosition,
                inverse:xAxisInverse,
                splitArea:{show:xAxisSplitAreaShow},
                axisLine:{show:xAxisAxisLineShow},
                axisLabel:{
                    inside:xAxisAxisLabelInside,
                    textStyle:{
                        color:xAxisAxisLabelTextStyleColor
                    },
                    interval:xAxisAxisLabelInterval,
                    rotate:xAxisAxisLabelRotate
                },
                axisTick:{
                    show:xAxisAxisTickShow
                },
                boundaryGap:xAxisBoundaryGap
            },
            yAxis:{
                data:(function () {
                    if(reverse==true) {
                        //处理string转换为array的情况
                        if (xAxisData.length != 0) {
                            return stringToArray(xAxisData);
                        }
                        else {
                            var defaultXAxisData = [];
                            for(var i in asyncData){
                                defaultXAxisData.push((asyncData[i])[0].x)
                            }
                            return defaultXAxisData;

                        }
                    }
                    else{
                        return false;
                    }
                })(),
                silent:false,
                type:(function () {
                    if(reverse==false){
                        return 'value';
                    }
                    else{
                        return 'category';
                    }
                })(),
                splitLine:{
                    show:yAxisGridLineAttr
                },
                //------------4.14添加属性
                position:yAxisPosition,
                inverse:yAxisInverse,
                splitArea:{show:yAxisSplitAreaShow},
                axisLine:{show:yAxisAxisLineShow},
                axisLabel:{
                    inside:yAxisAxisLabelInside,
                    textStyle:{
                        color:yAxisAxisLabelTextStyleColor
                    },
                    interval:yAxisAxisLabelInterval,
                    rotate:yAxisAxisLabelRotate
                },
                axisTick:{
                    show:yAxisAxisTickShow
                },
                boundaryGap:false
            },
            grid:{
                left:gridLeft,
                right:gridRight,
                top:gridTop,
                bottom:gridBottom
            },
            //生成series
            series:(function () {
                /*
                 处理asyncData数据,并生成series
                 */
                var seriesAttr=[];
                for(var i=0;i<seriesNum;i++){
                    console.log(legendAttr[i]);
                    var series1={
                        name:legendAttr[i],
                        type:'line',
                        smooth:smooth,
                        areaStyle:(function(){
                            if(seriesAreaStyle==false)
                                return null;
                            else{
                                return {normal:{}};
                            }
                        })(),
                        stack:(function () {
                            if(seriesAreaStyle==false) {
                                return 'lineChartStacked' + i;
                            }
                            else{
                                return 'lineChartStacked';
                            }
                        })(),
                        data:(function () {
                            var seriesData=[];
                            asyncData.forEach(function(d1){
                                seriesData.push((d1[i]).y);



                                // for(var key in d1[i]){
                                //     seriesData.push((d1[i])[key]);
                                // }
                            });
                            return seriesData;
                        })(),
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                        /*
                        流图或面积图相关属性
                         */

                    }
                    seriesAttr.push(series1);
                }
                return seriesAttr;
            })(),
            animationEasing: 'elasticOut',
            itemStyle: itemStyle
        }
        //判断color的情况，如果有color则color的配色方案
        if(color.length!=0){
            option.color=stringToArray(color);
        }
        return this;

    }

    var stackAttrFun=function (x) {
        stackAttr=x;
        return this;
    }

    var render=function(){
        console.log(option);
        var chart = echarts.init(document.getElementById(selectID),theme);
        chart.setOption(option);
        return this;
    }
    var backgroundColorFun=function(x){
        backgroundColor=x;
        return this;
    }
    var titleFun=function(x){
        title=x;
        return this;
    }
    var subtitleFun=function (x) {
        subtitle=x;
        return this;
    }
    var titleBackgroundColorFun=function (x) {
        titleBackgroundColor=x;
        return this;
    }
    var titleTopFun=function (x) {
        titleTop=x;
        return this;
    }
    var titleLeftFun=function (x) {
        titleLeft=x;
        return this;
    }
    var titleTextStyleFontSizeFun=function (x) {
        titleTextStyleFontSize=x;
        return this;
    }
    var titleTextStyleColorFun=function (x) {
        titleTextStyleColor=x;
        return this;
    }
    var tooltipAxisPointerTypeFun=function (x) {
        tooltipAxisPointerType=x;
        return this;
    }
    var legendAttrFun=function (x) {
        legendAttr=x;
        return this;
    }
    var legendAlignFun=function (x) {
        legendAlign=x;
        return this;
    }
    var legendLeftFun=function (x) {
        legendLeft=x;
        return this;
    }
    var legendRightFun=function (x) {
        legendRight=x;
        return this;
    }
    var legendBottomFun=function (x) {
        legendBottom=x;
        return this;
    }
    var legendTopFun=function (x) {
        legendTop=x;
        return this;
    }
    var legendOrientFun=function (x) {
        legendOrient=x;
        return this;
    }
    var seriesAreaStyleFun=function (x) {
        seriesAreaStyle=x;
        return this;
    }
    var xAxisDataFun=function(x){
        xAxisData=x;
        return this;
    }

    var xAxisGridLineAttrFun=function (x) {
        xAxisGridLineAttr=x;
        return this;
    }
    var yAxisGridLineAttrFun=function (x) {
        yAxisGridLineAttr=x;
        return this;
    }
    var yAxisDataAttrFun=function(x){
        yAxisDataAttr=x;
        return this;
    }

    var gridLeftFun=function (x) {
        gridLeft=x;
        return this;
    }
    var gridRightFun=function (x) {
        gridRight=x;
        return this;
    }
    var gridTopFun=function (x) {
        gridTop=x;
        return this;
    }
    var gridBottomFun=function (x) {
        gridBottom=x;
        return this;
    }
    var reverseFun=function(x){
        reverse=x;
        return this;
    }
    var selectFun=function(selector){
        selectID=selector;
        return this;
    }
    var xAxisPositionFun=function (x) {
        xAxisPosition=x;
        return this;
    }
    var xAxisInverseFun=function(x){
        xAxisInverse=x;
        return this;
    }
    var xAxisSplitAreaShowFun=function (x) {
        xAxisSplitAreaShow=x;
        return this;
    }
    var xAxisAxisLineShowFun=function (x) {
        xAxisAxisLineShow=x;
        return this;
    }
    var xAxisAxisLabelInsideFun=function (x) {
        xAxisAxisLabelInside=x;
        return this;
    }
    var xAxisAxisLabelTextStyleColorFun=function (x) {
        xAxisAxisLabelTextStyleColor=x;
        return this;
    }
    var xAxisAxisTickShowFun=function (x) {
        xAxisAxisTickShow=x;
        return this;
    }
    var xAxisBoundaryGapFun=function (x) {
        xAxisBoundaryGap=x;
        return this;
    }
    var yAxisPositionFun=function (x) {
        yAxisPosition=x;
        return this;
    }
    var yAxisInverseFun=function(x){
        yAxisInverse=x;
        return this;
    }
    var yAxisSplitAreaShowFun=function (x) {
        yAxisSplitAreaShow=x;
        return this;
    }
    var yAxisAxisLineShowFun=function (x) {
        yAxisAxisLineShow=x;
        return this;
    }
    var yAxisAxisLabelInsideFun=function (x) {
        yAxisAxisLabelInside=x;
        return this;
    }
    var yAxisAxisLabelTextStyleColorFun=function (x) {
        yAxisAxisLabelTextStyleColor=x;
        return this;
    }
    var yAxisAxisTickShowFun=function (x) {
        yAxisAxisTickShow=x;
        return this;
    }
    var getOptionFun=function () {
        return option;
    }
    var themeFun=function (x) {
        theme=x;
        return this;
    }
    /*
    5.10新加属性
     */
    /*
     5.10添加属性，提取自bar
     */
    var colorFun=function (x) {
        color=x;
        return this;
    }
    var yAxisAxisLabelIntervalFun=function (x) {
        yAxisAxisLabelInterval=x;
        return this;
    }
    var yAxisAxisLabelRotateFun=function (x) {
        yAxisAxisLabelRotate=x;
        return this;
    }
    var xAxisAxisLabelIntervalFun=function (x) {
        xAxisAxisLabelInterval=x;
        return this;
    }
    var xAxisAxisLabelRotateFun=function (x) {
        xAxisAxisLabelRotate=x;
        return this;
    }
    var legendTextStyleColorFun=function (x) {
        legendTextStyleColor=x;
        return this;
    }
    var smoothFun=function (x) {
        smooth=x;
        return this;
    }

    exports.theme=themeFun;
    exports.color=colorFun;
    exports.option=getOptionFun;

    exports.select = selectFun;

    exports.line = line;
    exports.stack=stackAttrFun;
    exports.render=render;
    exports.background=backgroundColorFun;
    /*
    title相关属性
     */
    exports.title=titleFun;
    exports.subtitle=subtitleFun;
    exports.titleBackgroundColor=titleBackgroundColorFun;
    exports.titleTop=titleTopFun;
    exports.titleLeft=titleLeftFun;
    exports.titleTextStyleFontSize=titleTextStyleFontSizeFun;
    exports.titleTextStyleColor=titleTextStyleColorFun;
    /*
    Grid相关属性
     */
    exports.gridLeft=gridLeftFun;
    exports.gridRight=gridRightFun;
    exports.gridTop=gridTopFun;
    exports.gridBottom=gridBottomFun;
    exports.tooltipAxisPointerType=tooltipAxisPointerTypeFun;
    /*
    legend相关属性
     */
    exports.legendAttr=legendAttrFun;
    exports.legendAlign=legendAlignFun;
    exports.legendLeft=legendLeftFun;
    exports.legendTop=legendTopFun;
    exports.legendOrient=legendOrientFun;
    exports.legendTextStyleColor=legendTextStyleColorFun;


    exports.seriesAreaStyle=seriesAreaStyleFun;

    /*
    坐标轴相关属性
     */
    exports.xAxisPosition=xAxisPositionFun;
    exports.xAxisInverse=xAxisInverseFun;
    exports.xAxisSplitAreaShow=xAxisSplitAreaShowFun;
    exports.xAxisAxisLineShow=xAxisAxisLineShowFun;
    exports.xAxisAxisLabelInside=xAxisAxisLabelInsideFun;
    exports.xAxisAxisLabelTextStyleColor=xAxisAxisLabelTextStyleColorFun;
    exports.xAxisAxisLabelInterval=xAxisAxisLabelIntervalFun;
    exports.xAxisAxisLabelRotate=xAxisAxisLabelRotateFun;
    exports.xAxisAxisTickShow=xAxisAxisTickShowFun;
    exports.xAxisData=xAxisDataFun;
    exports.xAxisGridLineAttr=xAxisGridLineAttrFun;
    exports.xAxisBoundaryGap=xAxisBoundaryGapFun;
    exports.yAxisPosition=yAxisPositionFun;
    exports.yAxisData=yAxisDataAttrFun;
    exports.yAxisGridLineAttr=yAxisGridLineAttrFun;
    exports.yAxisInverse=yAxisInverseFun;
    exports.yAxisSplitAreaShow=yAxisSplitAreaShowFun;
    exports.yAxisAxisLineShow=yAxisAxisLineShowFun;
    exports.yAxisAxisLabelInside=yAxisAxisLabelInsideFun;
    exports.yAxisAxisLabelTextStyleColor=yAxisAxisLabelTextStyleColorFun;
    exports.yAxisAxisLabelInterval=yAxisAxisLabelIntervalFun;
    exports.yAxisAxisLabelRotate=yAxisAxisLabelRotateFun;
    exports.yAxisAxisTickShow=yAxisAxisTickShowFun;


    exports.smooth=smoothFun;
    exports.reverse=reverseFun;
})));