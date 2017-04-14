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

    function stringToArray(d){
        var ds=d.split(/,|，/);
        d=[];
        for(var dsi in ds){
            d.push(ds[dsi]);
        }
        return d;
    }

    // Object.prototype.each = function (obj, callback, args) {
    //     var value,
    //         i = 0,
    //         length = obj.length,
    //         isArray = isArraylike(obj);
    //     var class2type = {};
    //     function typeObj(objType) {
    //         if (objType == null) {
    //             return objType + "";
    //         }
    //         return typeof objType === "object" || typeof objType === "function" ?
    //             toString.call(objType) || "object" :
    //             typeof objType;
    //     }
    //     function isArraylike(obj) {
    //         //如果obj里面有length键，则length等于obj.lenght;否则等于false
    //         var length = "length" in obj && obj.length,
    //             //检测obj的类型
    //             type = typeObj(obj);
    //
    //         //如果obj是function类型 或者是window对象 则返回false;
    //         if (type === "function" ) {
    //             return false;
    //         }
    //
    //         //如果是dom元素，则为if(length)；若length为true；则返回true
    //         if (obj.nodeType === 1 && length) {
    //             return true;
    //         }
    //         //如果obj的类型是"array",    //length为0,    //length的属性是number为true //length大于0；//length-1在obj里面是否存在
    //         return type === "array" || length === 0 || typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    //     }
    //     if (args) {
    //         if (isArray) {
    //             for (; i < length; i++) {
    //                 value = callback.apply(obj[i], args);
    //
    //                 if (value === false) {
    //                     break;
    //                 }
    //             }
    //         } else {
    //             for (i in obj) {
    //                 value = callback.apply(obj[i], args);
    //
    //                 if (value === false) {
    //                     break;
    //                 }
    //             }
    //         }
    //     } else {
    //         if (isArray) {
    //             for (; i < length; i++) {
    //                 value = callback.call(obj[i], i, obj[i]);
    //
    //                 if (value === false) {
    //                     break;
    //                 }
    //             }
    //         } else {
    //             for (i in obj) {
    //                 value = callback.call(obj[i], i, obj[i]);
    //
    //                 if (value === false) {
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    //
    //     return obj;
    // }
    var selectID=null;
    //option相关属性
    var option=null,
        backgroundColor = '#ffffff',
        title = '我是标题，请设置title属性',
        subtitle = false,
        //legend数据的图示，默认为x轴坐标的数值
        legendAttr = '',
        //legend的对齐方式
        legendAlignAttr = 'left',
        //另存为图片等部分
        toolboxAttr = 'default',
        //x轴显示的坐标文字
        xAxisData = '',
        //x轴是否显示网格
        xAxisGridLineAttr = 'false',
        //y轴显示的坐标文字
        yAxisDataAttr = '',
        //y轴是否显示网格
        yAxisGridLineAttr = 'true',
        //绘图区相对于画布的偏移
        gridAttr = {top:'80px',left:'80px',right:'80px',bottom:'80px'},
        //stack的设置,默认情况下为一维普通柱状图
        stackAttr='',
        //判断x，y轴是否转置，即为条形图横过来画
        reverse=false;

    var bar=function (asyncData) {
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
            asyncData[0].forEach(function (data2) {
            for (var key in data2) {
                legendAttr.push(key);
            }
            // console.log();
        });}
        //否则将legendAttr转换为array
        else{
            legendAttr=stringToArray(legendAttr);
        }

        /*
         生成的配置文件
         */
        option={
            backgroundColor:backgroundColor,
            title:{
                text:title,
                subtext:subtitle
            },
            //legend暂时还未确定
            legend:{
                data:legendAttr
              //  align:left
            },
            toolbox:{

            },
            tooltip:{
                trigger:'axis',
                axisPointer:{
                    type:'shadow'
                }
            },
            xAxis:{
                data:(function () {
                    if(reverse==false) {
                        //处理string转换为array的情况
                        if (xAxisData.length != 0) {
                            return stringToArray(xAxisData);
                        }
                        else {
                            //返回默认xAxis坐标点的值
                            if (seriesNum == 1 &&legendAttr.length!=0) {
                                //若为一维普通普通柱状图返回legendAttr即为坐标点值
                                return legendAttr;
                            }
                            else {
                                var defaultXAxisData = [];
                                for (var i = 0; i < dataNum; i++) {
                                    defaultXAxisData.push('默认值' + i);
                                }
                                return defaultXAxisData;
                            }

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
                 }
            },
            yAxis:{
                data:(function () {
                    if(reverse==true) {
                        //处理string转换为array的情况
                        if (xAxisData.length != 0) {
                            return stringToArray(xAxisData);
                        }
                        else {
                            //返回默认xAxis坐标点的值
                            if (seriesNum == 1 && legendAttr.length!=0) {
                                //若为一维普通普通柱状图返回legendAttr即为坐标点值
                                return legendAttr;
                            }
                            else {
                                var defaultXAxisData = [];
                                for (var i = 0; i < dataNum; i++) {
                                    defaultXAxisData.push('默认值' + i);
                                }
                                return defaultXAxisData;
                            }

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
                }
            },
            grid:gridAttr,
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
                        type:'bar',
                        stack:(function () {
                            if(stackAttr.length==0){
                                return null;
                            }
                            else{
                                if(i<stringToArray(stackAttr).length) {
                                    return (stringToArray(stackAttr))[i];
                                }
                                else{
                                    return 'stacked';
                                }
                            }
                        })(),
                        data:(function () {
                            var seriesData=[];
                            asyncData.forEach(function(d1){
                                for(var key in d1[i]){
                                    seriesData.push((d1[i])[key]);
                                }
                            });
                            return seriesData;
                        })(),
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                    }
                    seriesAttr.push(series1);
                }
                return seriesAttr;
            })(),
            animationEasing: 'elasticOut'
        }
        return this;

    }

    var stackAttrFun=function (x) {
        stackAttr=x;
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
    var legendAttrFun=function (x) {
        legendAttr=x;
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
    var gridAttrFun=function(x){
        gridAttr=x;
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


    exports.select = selectFun;

    exports.bar = bar;
    exports.stack=stackAttrFun;
    exports.render=render;
    exports.background=backgroundColorFun;
    exports.title=titleFun;
    exports.subtitle=subtitleFun;
    exports.legendAttr=legendAttrFun;
    exports.xAxisData=xAxisDataFun;
    exports.xAxisGridLineAttr=xAxisGridLineAttrFun;
    exports.yAxisData=yAxisDataAttrFun;
    exports.yAxisGridLineAttr=yAxisGridLineAttrFun;
    exports.gridAttr=gridAttrFun;
    exports.reverse=reverseFun;
})));