/**
 * Created by WebStorm
 * User:maomao,http://www.mmcode.top
 * Date:2017/4/27
 * Time:13:50
 **/
/*
这里生成各种图形绘制的配置文件
 */
//--------------------------------------------------------
/*
柱状图的配置
 */
function renderBarChart(canvasId,canvasData,barObj){
    // console.log('renderbarchart')
    // console.log(canvasId+' .render')
    console.log(barObj)
    hescEchart.select(canvasId+'canvas')
        .background(barObj.backgroundColor)
        .title(barObj.title)
        .subtitle(barObj.subtitle)
        .titleBackgroundColor(barObj.titleBackgroundColor)
        .titleTop(barObj.titleTop)
        .titleLeft(barObj.titleLeft)
        .titleTextStyleFontSize(barObj.titleTextStyleFontSize)
        .titleTextStyleColor(barObj.titleTextStyleColor)
        .gridLeft(barObj.gridLeft)
        .gridRight(barObj.gridRight)
        .gridTop(barObj.gridTop)
        .gridBottom(barObj.gridBottom)
        .tooltipAxisPointerType(barObj.tooltipAxisPointerType)
        .legendAttr(barObj.legend)
        .legendAlign(barObj.legendAlign)
        .legendLeft(barObj.legendLeft)
        .legendTop(barObj.legendTop)
        .legendOrient(barObj.legendOrient)
        .xAxisData(barObj.xAxisData)
        .xAxisGridLineAttr(barObj.xAxisGridLine)
        .xAxisPosition(barObj.xAxisPosition)
        .xAxisInverse(barObj.xAxisInverse)
        .xAxisSplitAreaShow(barObj.xAxisSplitAreaShow)
        .xAxisAxisLineShow(barObj.xAxisAxisLineShow)
        .xAxisAxisLabelInside(barObj.xAxisAxisLabelInside)
        .xAxisAxisLabelTextStyleColor(barObj.xAxisAxisLabelTextStyleColor)
        .xAxisAxisTickShow(barObj.xAxisAxisTickShow)
        .xAxisBoundaryGap(barObj.xAxisBoundaryGap)
        .yAxisInverse(barObj.yAxisInverse)
        .yAxisSplitAreaShow(barObj.yAxisSplitAreaShow)
        .yAxisAxisLineShow(barObj.yAxisAxisLineShow)
        .yAxisAxisLabelInside(barObj.yAxisAxisLabelInside)
        .yAxisAxisLabelTextStyleColor(barObj.yAxisAxisLabelTextStyleColor)
        .yAxisAxisTickShow(barObj.yAxisAxisTickShow)
        .yAxisData(barObj.yAxisData)
        .yAxisGridLineAttr(barObj.yAxisGridLine)
        .reverse(barObj.reverse)
        .stack(barObj.stack)
        .bar(canvasData)
        .render();
}