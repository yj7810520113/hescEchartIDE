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
            (factory((global.hescEchartPie = global.hescEchartPie || {})));
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
        legendOrient='horizontal',
        //另存为图片等部分
        toolboxAttr = 'default',
        /*
        series相关属性
         */
        seriesName='默认1',
        seriesRadiusOutter='50%',
        seriesRadiusInner='0%',
        seriesCenterTop='',
        seriesCenterLeft='',
        seriesRoseType=false,
        seriesLabelNormalShow=false;

    var pie=function (asyncData) {
            //----------------图形相关属性--------
            // dom='body',
            // width='800px',
            // height='600px';
            //----------------asyncJson数据相关属性----
            //n为默认坐标下，元素的个数，即为x轴个数
            var dataNum=0;
        //设置series个数，即为多维柱状图的维数
        var seriesNum = 0;

        //设置legend的图示如果没有设置lengattr属性，legend图示取默认值
        console.log(asyncData);
        legendAttr=[];
            asyncData.forEach(function (data2,i) {
                    legendAttr.push(data2.name);
            });
            // console.log();

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
                orient:legendOrient
                //  align:left
            },
            toolbox:{

            },
            tooltip:{
                trigger:'item',
                axisPointer:{
                    type:tooltipAxisPointerType
                }
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
                 series相关属性
                 */
                // seriesName='默认1',
                //     seriesRadius='50%',
                //     seriesCenterTop='',
                //     seriesCenterLeft='',
                //     seriesRoseType=false,
                //     seriesLabelNormalShow=false;
                var series=[];
                var series1= {
                    name: seriesName,
                    type:'pie',
                    radius: [seriesRadiusInner,seriesRadiusOutter],
                    center:[seriesCenterLeft,seriesCenterTop],
                    data:asyncData,
                    roseType:seriesRoseType,
                    label:{
                        normal:{
                            show:seriesLabelNormalShow,
                        }
                    }
                }
                series.push(series1);
                return series;
            })(),
            animationEasing: 'elasticOut',
            itemStyle: itemStyle
        }
        return this;

    }

    var themeFun=function (x) {
        theme=x;
        return this;
    }

    exports.theme=themeFun;
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

    var selectFun=function(selector){
        selectID=selector;
        return this;
    }

    var seriesNameFun=function (x) {
        seriesName=x;
        return this;
    }
    var seriesRadiusOutterFun=function (x) {
        seriesRadiusOutter=x;
        return this;
    }
    var seriesRadiusInnerFun=function (x) {
        seriesRadiusInner=x;
        return this;
    }
    var seriesCenterTopFun=function (x) {
        seriesCenterTop=x;
        return this;
    }
    var seriesCenterLeftFun=function (x) {
        seriesCenterLeft=x;
        return this;
    }
    var seriesRoseTypeFun=function (x) {
        seriesRoseType=x;
        return this;
    }
    var seriesLabelNormalShowFun=function (x) {
        seriesLabelNormalShow=x;
        return this;
    }
    var getOptionFun=function () {
        return option;
    }

    exports.option=getOptionFun;

    exports.select = selectFun;

    exports.pie = pie;
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
    /*
    series相关属性
     */
    /*
     series相关属性
     */
    // seriesName='默认1',
    //     seriesRadius='50%',
    //     seriesCenterTop='',
    //     seriesCenterLeft='',
    //     seriesRoseType=false,
    //     seriesLabelNormalShow=false;
    exports.seriesName=seriesNameFun;
    exports.seriesRadiusOutter=seriesRadiusOutterFun;
    exports.seriesRadiusInner=seriesRadiusInnerFun;
    exports.seriesCenterTop=seriesCenterTopFun;
    exports.seriesCenterLeft=seriesCenterLeftFun;
    exports.seriesRoseType=seriesRoseTypeFun;
    exports.seriesLabelNormalShow=seriesLabelNormalShowFun;



})));