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
    //更新顶层容器大小
    $('#'+canvasId).width(barObj.canvasWidth);
    $('#'+canvasId).height(barObj.canvasHeight);
    //更新canvas容器的大小
    $('#'+canvasId+'canvas').width(barObj.canvasWidth);
    $('#'+canvasId+'canvas').height(barObj.canvasHeight);

    var option1=hescEchartBar.select(canvasId+'canvas')
        .theme(barObj.theme)
        .color(barObj.color)
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
        .legendTextStyleColor(barObj.legendTextStyleColor)
        .xAxisData(barObj.xAxisData)
        .xAxisGridLineAttr(barObj.xAxisGridLine)
        .xAxisPosition(barObj.xAxisPosition)
        .xAxisInverse(barObj.xAxisInverse)
        .xAxisSplitAreaShow(barObj.xAxisSplitAreaShow)
        .xAxisAxisLineShow(barObj.xAxisAxisLineShow)
        .xAxisAxisLabelInside(barObj.xAxisAxisLabelInside)
        .xAxisAxisLabelTextStyleColor(barObj.xAxisAxisLabelTextStyleColor)
        .xAxisAxisLabelInterval(barObj.xAxisAxisLabelInterval)
        .xAxisAxisLabelRotate(barObj.xAxisAxisLabelRotate)
        .xAxisAxisTickShow(barObj.xAxisAxisTickShow)
        .xAxisBoundaryGap(barObj.xAxisBoundaryGap)
        .yAxisInverse(barObj.yAxisInverse)
        .yAxisSplitAreaShow(barObj.yAxisSplitAreaShow)
        .yAxisAxisLineShow(barObj.yAxisAxisLineShow)
        .yAxisAxisLabelInside(barObj.yAxisAxisLabelInside)
        .yAxisAxisLabelTextStyleColor(barObj.yAxisAxisLabelTextStyleColor)
        .yAxisAxisLabelInterval(barObj.yAxisAxisLabelInterval)
        .yAxisAxisLabelRotate(barObj.yAxisAxisLabelRotate)
        .yAxisAxisTickShow(barObj.yAxisAxisTickShow)
        .yAxisData(barObj.yAxisData)
        .yAxisGridLineAttr(barObj.yAxisGridLine)
        .reverse(barObj.reverse)
        .stack(barObj.stack)
        .seriesBarGap(barObj.seriesBarGap+'%')
        .seriesBarWidth(barObj.seriesBarWidth+'%')
        .bar(canvasData)
        .render()
        .option();
    saveOption(canvasId,option1);
}
/*
折线图配置
 */
function renderLineChart(canvasId,canvasData,lineObj){
    // console.log(lineObj)
    //更新顶层容器大小
    $('#'+canvasId).width(lineObj.canvasWidth);
    $('#'+canvasId).height(lineObj.canvasHeight);
    //更新canvas容器的大小
    $('#'+canvasId+'canvas').width(lineObj.canvasWidth);
    $('#'+canvasId+'canvas').height(lineObj.canvasHeight);

    var option1=hescEchartLine.select(canvasId+'canvas')
        .theme(lineObj.theme)
        .color(lineObj.color)
        .background(lineObj.backgroundColor)
        .title(lineObj.title)
        .subtitle(lineObj.subtitle)
        .titleBackgroundColor(lineObj.titleBackgroundColor)
        .titleTop(lineObj.titleTop)
        .titleLeft(lineObj.titleLeft)
        .titleTextStyleFontSize(lineObj.titleTextStyleFontSize)
        .titleTextStyleColor(lineObj.titleTextStyleColor)
        .gridLeft(lineObj.gridLeft)
        .gridRight(lineObj.gridRight)
        .gridTop(lineObj.gridTop)
        .gridBottom(lineObj.gridBottom)
        .tooltipAxisPointerType(lineObj.tooltipAxisPointerType)
        .legendAttr(lineObj.legend)
        .legendAlign(lineObj.legendAlign)
        .legendLeft(lineObj.legendLeft)
        .legendTop(lineObj.legendTop)
        .legendOrient(lineObj.legendOrient)
        .legendTextStyleColor(lineObj.legendTextStyleColor)
        .xAxisData(lineObj.xAxisData)
        .xAxisGridLineAttr(lineObj.xAxisGridLine)
        .xAxisPosition(lineObj.xAxisPosition)
        .xAxisInverse(lineObj.xAxisInverse)
        .xAxisSplitAreaShow(lineObj.xAxisSplitAreaShow)
        .xAxisAxisLineShow(lineObj.xAxisAxisLineShow)
        .xAxisAxisLabelInside(lineObj.xAxisAxisLabelInside)
        .xAxisAxisLabelTextStyleColor(lineObj.xAxisAxisLabelTextStyleColor)
        .xAxisAxisLabelInterval(lineObj.xAxisAxisLabelInterval)
        .xAxisAxisLabelRotate(lineObj.xAxisAxisLabelRotate)
        .xAxisAxisTickShow(lineObj.xAxisAxisTickShow)
        .xAxisBoundaryGap(lineObj.xAxisBoundaryGap)
        .yAxisInverse(lineObj.yAxisInverse)
        .yAxisSplitAreaShow(lineObj.yAxisSplitAreaShow)
        .yAxisAxisLineShow(lineObj.yAxisAxisLineShow)
        .yAxisAxisLabelInside(lineObj.yAxisAxisLabelInside)
        .yAxisAxisLabelTextStyleColor(lineObj.yAxisAxisLabelTextStyleColor)
        .yAxisAxisLabelInterval(lineObj.yAxisAxisLabelInterval)
        .yAxisAxisLabelRotate(lineObj.yAxisAxisLabelRotate)
        .yAxisAxisTickShow(lineObj.yAxisAxisTickShow)
        .yAxisData(lineObj.yAxisData)
        .yAxisGridLineAttr(lineObj.yAxisGridLine)
        .reverse(lineObj.reverse)
        .seriesAreaStyle(lineObj.seriesAreaStyle)
        .smooth(lineObj.smooth)
        .line(canvasData)
        .render()
        .option();
    saveOption(canvasId,option1);

}
/*
饼图配置
 */
function renderPieChart(canvasId,canvasData,pieObj) {
    $('#'+canvasId).width(pieObj.canvasWidth);
    $('#'+canvasId).height(pieObj.canvasHeight);
    //更新canvas容器的大小
    $('#'+canvasId+'canvas').width(pieObj.canvasWidth);
    $('#'+canvasId+'canvas').height(pieObj.canvasHeight);
    var option1=hescEchartPie.select(canvasId+'canvas')
        .theme(pieObj.theme)
        .color(pieObj.color)
        .background(pieObj.backgroundColor)
        .title(pieObj.title)
        .subtitle(pieObj.subtitle)
        .titleBackgroundColor(pieObj.titleBackgroundColor)
        .titleTop(pieObj.titleTop)
        .titleLeft(pieObj.titleLeft)
        .titleTextStyleFontSize(pieObj.titleTextStyleFontSize)
        .titleTextStyleColor(pieObj.titleTextStyleColor)
        .gridLeft(pieObj.gridLeft)
        .gridRight(pieObj.gridRight)
        .gridTop(pieObj.gridTop)
        .gridBottom(pieObj.gridBottom)
        .tooltipAxisPointerType(pieObj.tooltipAxisPointerType)
        .legendAttr(pieObj.legend)
        .legendAlign(pieObj.legendAlign)
        .legendLeft(pieObj.legendLeft)
        .legendTop(pieObj.legendTop)
        .legendOrient(pieObj.legendOrient)
        .legendTextStyleColor(pieObj.legendTextStyleColor)
        .seriesName(pieObj.seriesName)
        .seriesRadiusOutter(pieObj.seriesRadiusOutter+'%')
        .seriesRadiusInner(pieObj.seriesRadiusInner+'%')
        .seriesCenterLeft(pieObj.seriesCenterLeft+'%')
        .seriesCenterTop(pieObj.seriesCenterTop+'%')
        .seriesRoseType(pieObj.seriesRoseType=='false'?false:pieObj.seriesRoseType)
        .seriesLabelNormalShow(pieObj.seriesLabelNormalShow)
        .pie(canvasData)
        .render()
        .option();
    saveOption(canvasId,option1);

}
/*
雷达图配置
 */
function renderRadarChart(canvasId,canvasData,radarObj) {
    $('#'+canvasId).width(radarObj.canvasWidth);
    $('#'+canvasId).height(radarObj.canvasHeight);
    //更新canvas容器的大小
    $('#'+canvasId+'canvas').width(radarObj.canvasWidth);
    $('#'+canvasId+'canvas').height(radarObj.canvasHeight);
    var option1=hescEchartRadar.select(canvasId+'canvas')
        .theme(radarObj.theme)
        .background(radarObj.backgroundColor)
        .title(radarObj.title)
        .subtitle(radarObj.subtitle)
        .titleBackgroundColor(radarObj.titleBackgroundColor)
        .titleTop(radarObj.titleTop)
        .titleLeft(radarObj.titleLeft)
        .titleTextStyleFontSize(radarObj.titleTextStyleFontSize)
        .titleTextStyleColor(radarObj.titleTextStyleColor)
        .legendAttr(radarObj.legend)
        .legendAlign(radarObj.legendAlign)
        .legendLeft(radarObj.legendLeft)
        .legendTop(radarObj.legendTop)
        .legendOrient(radarObj.legendOrient)
        .tooltipShow(radarObj.tooltipShow)
        .radarIndicator(radarObj.radarIndicator)
        .radarCenterLeft(radarObj.radarCenterLeft+'%')
        .radarCenterTop(radarObj.radarCenterTop+'%')
        .radarRadius(radarObj.radarRadius)
        .radarStartAngle(radarObj.radarStartAngle)
        .radarSplitNumber(radarObj.radarSplitNumber)
        .radarShape(radarObj.radarShape)
        .radarNameTextStyleColor(radarObj.radarNameTextStyleColor)
        .radarNameTextStyleFontSize(radarObj.radarNameTextStyleFontSize)
        .radarAxisLineShow(radarObj.radarAxisLineShow)
        .radarAxisLineLineStyle(radarObj.radarAxisLineLineStyle)
        .radarSplitLineShow(radarObj.radarSplitLineShow)
        .radarSplitLineLineStyle(radarObj.radarSplitLineLineStyle)
        .seriesName(radarObj.seriesName)
        .seriesType(radarObj.seriesType)
        .seriesSymbol(radarObj.seriesSymbol)
        .seriesSymbolSize(radarObj.seriesSymbolSize)
        .seriesLineStyleNormalShow(radarObj.seriesLineStyleNormalShow)
        .seriesLineStyleNormalWidth(radarObj.seriesLineStyleNormalWidth)
        .seriesLineStyleNormalType(radarObj.seriesLineStyleNormalType)
        .seriesLineStyleNormalOpacity(radarObj.seriesLineStyleNormalOpacity)
        .radar(canvasData)
        .render()
        .option();
    saveOption(canvasId,option1);



}
/*
日历热图配置
 */
function renderCalendarChart(canvasId,canvasData,calendarObj){
    $('#'+canvasId).width(calendarObj.canvasWidth);
    $('#'+canvasId).height(calendarObj.canvasHeight);
    //更新canvas容器的大小
    $('#'+canvasId+'canvas').width(calendarObj.canvasWidth);
    $('#'+canvasId+'canvas').height(calendarObj.canvasHeight);
    var option1=hescEchartCalendar.select(canvasId+'canvas')
        .theme(calendarObj.theme)
        .background(calendarObj.backgroundColor)
        .title(calendarObj.title)
        .subtitle(calendarObj.subtitle)
        .titleBackgroundColor(calendarObj.titleBackgroundColor)
        .titleTop(calendarObj.titleTop)
        .titleLeft(calendarObj.titleLeft)
        .titleTextStyleFontSize(calendarObj.titleTextStyleFontSize)
        .titleTextStyleColor(calendarObj.titleTextStyleColor)
        .visualShow(calendarObj.visualShow)
        .visualMapMin(calendarObj.visualMapMin)
        .visualMapMax(calendarObj.visualMapMax)
        .visualMapOrient(calendarObj.visualMapOrient)
        .visualMapLeft(calendarObj.visualMapLeft)
        .visualMapTop(calendarObj.visualMapTop)
        .visualMapColorStart(calendarObj.visualMapColorEnd)
        .visualMapColorEnd(calendarObj.visualMapColorStart)
        .calendarTop(calendarObj.calendarTop)
        .calendarLeft(calendarObj.calendarLeft)
        .calendarOrient(calendarObj.calendarOrient)
        .calendarRangeStart(calendarObj.calendarRangeStart)
        .calendarRangeEnd(calendarObj.calendarRangeEnd)
        .calendarYearLabelMargin(calendarObj.calendarYearLabelMargin)
        .calendarMonthLabelMargin(calendarObj.calendarMonthLabelMargin)
        .calendarDayLabelFirstDay(calendarObj.calendarDayLabelFirstDay)
        .calendarCellSizeWidth(calendarObj.calendarCellSizeWidth)
        .calendarCellSizeHeight(calendarObj.calendarCellSizeHeight)
        .seriesType(calendarObj.seriesType)
        .seriesLabelNormalShow(calendarObj.seriesLabelNormalShow)
        .seriesLabelNormalTextStyleColor(calendarObj.seriesLabelNormalTextStyleColor)
        .seriesLabelNormalTextStyleFontsize(calendarObj.seriesLabelNormalTextStyleFontsize)
        .seriesSymbolSize(calendarObj.seriesSymbolSize)
        .calendar(canvasData)
        .render()
        .option();
    saveOption(canvasId,option1);

}
/*
词云配置
 */
function renderWordCloudChart(canvasId,canvasData,wordCloudObj){
    console.log(wordCloudObj)
    $('#'+canvasId).width(wordCloudObj.canvasWidth);
    $('#'+canvasId).height(wordCloudObj.canvasHeight);
    //更新canvas容器的大小
    $('#'+canvasId+'canvas').width(wordCloudObj.canvasWidth);
    $('#'+canvasId+'canvas').height(wordCloudObj.canvasHeight);
    var option1=hescEchartWordCloud.select(canvasId+'canvas')
        .theme(wordCloudObj.theme)
        .background(wordCloudObj.backgroundColor)
        .title(wordCloudObj.title)
        .subtitle(wordCloudObj.subtitle)
        .titleBackgroundColor(wordCloudObj.titleBackgroundColor)
        .titleTop(wordCloudObj.titleTop)
        .titleLeft(wordCloudObj.titleLeft)
        .titleTextStyleFontSize(wordCloudObj.titleTextStyleFontSize)
        .titleTextStyleColor(wordCloudObj.titleTextStyleColor)
        .seriesName(wordCloudObj.seriesName)
        .seriesSizeMin(wordCloudObj.seriesSizeMin+'%')
        .seriesSizeMax(wordCloudObj.seriesSizeMax+'%')
        .seriesSizeRangeMin(wordCloudObj.seriesSizeRangeMin)
        .seriesSizeRangeMax(wordCloudObj.seriesSizeRangeMax)
        .seriesTextRotation(wordCloudObj.seriesTextRotation)
        .seriesRotationRangeMin(wordCloudObj.seriesRotationRangeMin)
        .seriesRotationRangeMax(wordCloudObj.seriesRotationRangeMax)
        .seriesShape(wordCloudObj.seriesShape)
        .maskImage(wordCloudObj.maskImage)
        .wordCloud(canvasData)
        .render()
        .option();
    saveOption(canvasId,option1);

}

/*
每次调用存入option
 */
function saveOption(canvasId,option){
    for(var saveOption1 in hescList){
        if(hescList[saveOption1].divId==canvasId){
            hescList[saveOption1].option=option;
            break;
        }
    }
}