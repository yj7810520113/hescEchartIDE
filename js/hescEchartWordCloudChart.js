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
            (factory((global.hescEchartWordCloud = global.hescEchartWordCloud || {})));
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
        backgroundColor = '#ffffff',
        //绘图区相对于画布偏移属性
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
        //另存为图片等部分
        toolboxAttr = 'default',
        /*
        series相关属性
         */
        seriesName='默认1',
        seriesType='wordcount',
        seriesSizeMin=10,
        seriesSizeMax=90,
        seriesSizeRangeMin=6,
        seriesSizeRangeMax=50,
        seriesTextRotation='',
        seriesRotationRangeMin=-90,
        seriesRotationRangeMax=90,
        seriesShape='circle',
        maskImage='';

    var wordCloud=function (asyncData) {
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
            toolbox:{

            },
            tooltip:{
                trigger:'item',
            },
            //生成series
            series:[{
                name:seriesName,
                type:'wordCloud',
                size:[seriesSizeMin,seriesSizeMax],
                sizeRange:[seriesSizeRangeMin,seriesSizeRangeMax],
                textRotation:stringToArray(seriesTextRotation),
                rotationRange:[seriesRotationRangeMin,seriesRotationRangeMax],
                maskImage:(function () {
                    console.log('maskImage.length'+maskImage.length);
                   if(maskImage.length!=0){
                       var maskImageTemp=maskImage;
                       maskImage=new Image();
                       maskImage.src=maskImageTemp;
                       return maskImage;
                   }
                   else {
                       return false;
                   }
                })(),
                shape:seriesShape,
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data:(function () {
                    var data = [];
                    for (var name in asyncData) {
                        data.push({
                            name: name,
                            value: Math.sqrt(asyncData[name])
                        })
                    }
                    return data
                })()
            }],
            animationEasing: 'elasticOut',
            itemStyle: itemStyle
        }
        return this;

    }

    var render=function(){
        console.log(option);
        var chart = echarts.init(document.getElementById(selectID));
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

    var selectFun=function(selector){
        selectID=selector;
        return this;
    }


    /*
    series
     */
    var seriesNameFun=function (x) {
        seriesName=x;
        return this;
    }
    var seriesSizeMinFun=function (x) {
        seriesSizeMin=x;
        return this;
    }
    var seriesSizeMaxFun=function (x) {
        seriesSizeMax=x;
        return this;
    }
    var seriesSizeRangeMinFun=function (x) {
        seriesSizeRangeMin=x;
        return this;
    }
    var seriesSizeRangeMaxFun=function (x) {
        seriesSizeRangeMax=x;
        return this;
    }

    var seriesTextRotationFun=function (x) {
        seriesTextRotation=x;
        return this;
    }

    var seriesRotationRangeMinFun=function (x) {
        seriesRotationRangeMin=x;
        return this;
    }

    var seriesRotationRangeMaxFun=function (x) {
        seriesRotationRangeMax=x;
        return this;
    }

    var seriesShapeFun=function (x) {
        seriesShape=x;
        return this;
    }
    var maskImageFun=function (x) {
        maskImage=x;
        return this;
    }

    var getOptionFun=function () {
        return option;
    }

    exports.option=getOptionFun;



    exports.select = selectFun;

    exports.wordCloud = wordCloud;
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
     series相关属性
     */
    // seriesName='默认1',
    //     seriesType='wordcount',
    //     seriesSizeMin='10%',
    //     seriesSizeMax='90%',
    //     seriesSizeRangeMin=6,
    //     seriesSizeRangeMax=50,
    //     seriesTextRotation='',
    //     seriesRotationRangeMin=-90,
    //     seriesRotationRangeMax=90,
    //     seriesShape='circle';
    exports.seriesName=seriesNameFun;
    exports.seriesSizeMin=seriesSizeMinFun;
    exports.seriesSizeMax=seriesSizeMaxFun;
    exports.seriesSizeRangeMin=seriesSizeRangeMinFun;
    exports.seriesSizeRangeMax=seriesSizeRangeMaxFun;
    exports.seriesTextRotation=seriesTextRotationFun;
    exports.seriesRotationRangeMin=seriesRotationRangeMinFun;
    exports.seriesRotationRangeMax=seriesRotationRangeMaxFun;
    exports.seriesShape=seriesShapeFun;

    exports.maskImage=maskImageFun;


})));