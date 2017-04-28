/**
 * Created by WebStorm
 * User:maomao,http://www.mmcode.top
 * Date:2017/4/27
 * Time:8:57
 **/
//存储数据结构
var hescList=[];
//产生随机id的seed
var hashids=new Hashids('hescEchart',5);
//用于datGui控制面板的生成
var datGuiPannel='';
var divChartId='';
//bar相关的配置数据和数据
var barInitialCanvasData=[[{"2011":2},{"2011":4},{"2011":4},{"2011":4}],[{"2012":6},{"2012":8},{"2013":4},{"2013":4}],[{"2014":5},{"2014":2},{"2014":9},{"2014":1}],[{"2015":8},{"2015":6},{"2015":1},{"2015":7}]];
var barInitialDatGuiData ={
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:"#feefff",
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'#fff',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#000',
    gridLeft:50,
    gridRight:50,
    gridTop:50,
    gridBottom:50,
    tooltipAxisPointerType:'shadow',
    legend:'',
    legendAlign:'left',
    legendLeft:200,
    legendTop:10,
    legendOrient:'horizontal',
    xAxisData:'',
    xAxisGridLine:false,
    xAxisPosition:'bottom',
    xAxisInverse:false,
    xAxisSplitAreaShow:false,
    xAxisAxisLineShow:true,
    xAxisAxisLabelInside:false,
    xAxisAxisLabelTextStyleColor:'#000',
    xAxisAxisTickShow:true,
    xAxisBoundaryGap:true,
    yAxisData:'',
    yAxisGridLine:true,
    yAxisPosition:'left',
    yAxisInverse:false,
    yAxisSplitAreaShow:false,
    yAxisAxisLineShow:true,
    yAxisAxisLabelInside:false,
    yAxisAxisLabelTextStyleColor:'#000',
    yAxisAxisTickShow:true,
    reverse:false,
    stack:''
};
var lineInitialCanvasData=[[{"2011":2},{"2011":4},{"2011":4},{"2011":4}],[{"2012":6},{"2012":8},{"2013":4},{"2013":4}],[{"2014":5},{"2014":2},{"2014":9},{"2014":1}],[{"2015":8},{"2015":6},{"2015":1},{"2015":7}]];
var lineInitialDatGuiData={
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:"#ffffff",
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'#fff',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#000',
    gridLeft:50,
    gridRight:50,
    gridTop:50,
    gridBottom:50,
    tooltipAxisPointerType:'shadow',
    legend:'',
    legendAlign:'left',
    legendLeft:200,
    legendTop:10,
    legendOrient:'horizontal',
    seriesAreaStyle:false,
    xAxisData:'',
    xAxisGridLine:false,
    xAxisPosition:'bottom',
    xAxisInverse:false,
    xAxisSplitAreaShow:false,
    xAxisAxisLineShow:true,
    xAxisAxisLabelInside:false,
    xAxisAxisLabelTextStyleColor:'#000',
    xAxisAxisTickShow:true,
    xAxisBoundaryGap:true,
    yAxisData:'',
    yAxisGridLine:true,
    yAxisPosition:'left',
    yAxisInverse:false,
    yAxisSplitAreaShow:false,
    yAxisAxisLineShow:true,
    yAxisAxisLabelInside:false,
    yAxisAxisLabelTextStyleColor:'#000',
    yAxisAxisTickShow:true,
    reverse:false,
    stack:''
};
var pieInitialCanvasData=[{"name":"2011","value":2},{"name":"2012","value":1},{"name":"2013","value":3},{"name":"2014","value":4}];
var pieInitailDatGuiData={
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:"#ffffff",
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'#fff',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#000',
    gridLeft:50,
    gridRight:50,
    gridTop:50,
    gridBottom:50,
    tooltipAxisPointerType:'shadow',
    legend:'',
    legendAlign:'left',
    legendLeft:200,
    legendTop:10,
    legendOrient:'horizontal',
    /*
     series相关属性
     */
    seriesName: '默认1',
    seriesRadiusOutter: 50,
    seriesRadiusInner: 0,
    seriesCenterTop: 50,
    seriesCenterLeft: 50,
    seriesRoseType:'false',
    seriesLabelNormalShow: false
};
var radarInitialCanvasData=[[{"推塔":2},{"输出":4},{"承受伤害":4},{"KDA":4},{"胜率":78}],[{"推塔":3},{"输出":5},{"承受伤害":5},{"KDA":10},{"胜率":60}],[{"推塔":4},{"输出":1},{"承受伤害":1},{"KDA":5},{"胜率":65}],[{"推塔":5},{"输出":4},{"承受伤害":2},{"KDA":8},{"胜率":70}]];
var radarInitialDatGuiData={
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:"#ffffff",
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'#fff',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#000',
    tooltipAxisPointerType:'shadow',
    legend:'',
    legendAlign:'left',
    legendLeft:200,
    legendTop:10,
    legendOrient:'horizontal',

    /*
     radar图特有属性
     */
    tooltipShow:true,
    radarIndicator:'',
    radarCenterLeft:50,
    radarCenterTop:50,
    radarRadius:100,
    radarStartAngle:90,
    radarSplitNumber:4,
    radarShape:'rect',
    radarNameTextStyleColor:'#000',
    radarNameTextStyleFontSize:12,
    radarAxisLineShow:true,
    radarAxisLineLineStyle:'#b0bec5',
    radarSplitLineShow:true,
    radarSplitLineLineStyle:'#b0bec5',
    seriesName:'雷达图',
    seriesType:'radar',
    seriesSymbol:'circle',
    seriesSymbolSize:5,
    seriesLineStyleNormalShow:false,
    seriesLineStyleNormalWidth:0.5,
    seriesLineStyleNormalType:'solid',//dashed、'dotted'
    seriesLineStyleNormalOpacity:1


};
// var barInitialDatGuiData={
//     "preset": "default",
//     "remembered": {
//         "default": {
//             "0": {
//                 "backgroundColor": "#fff",
//                 "tooltipAxisPointerType": "cross",
//                 "reverse": false,
//                 "stack": "",
//                 "title": "我是标题，请修改",
//                 "subtitle": "",
//                 "titleTextStyleFontSize": 18,
//                 "titleBackgroundColor": "#fff",
//                 "titleTextStyleColor": "#000",
//                 "titleTop": 10,
//                 "titleLeft": 10,
//                 "gridTop": 50,
//                 "gridBottom": 50,
//                 "gridLeft": 50,
//                 "gridRight": 50,
//                 "legend": "",
//                 "legendOrient": "horizontal",
//                 "legendAlign": "left",
//                 "legendTop": 10,
//                 "legendLeft": 200,
//                 "xAxisData": "",
//                 "xAxisPosition": "bottom",
//                 "xAxisAxisLabelTextStyleColor": "#000",
//                 "xAxisGridLine": false,
//                 "xAxisInverse": false,
//                 "xAxisSplitAreaShow": false,
//                 "xAxisAxisLineShow": true,
//                 "xAxisAxisTickShow": true,
//                 "xAxisAxisLabelInside": false,
//                 "xAxisBoundaryGap": true,
//                 "yAxisData": "",
//                 "yAxisPosition": "left",
//                 "yAxisAxisLabelTextStyleColor": "#000",
//                 "yAxisGridLine": true,
//                 "yAxisInverse": false,
//                 "yAxisSplitAreaShow": false,
//                 "yAxisAxisLineShow": true,
//                 "yAxisAxisTickShow": true,
//                 "yAxisAxisLabelInside": false
//             }
//         }
//     },
//     "closed": false,
//     "folders": {
//         "标题属性": {
//             "preset": "Default",
//             "closed": true,
//             "folders": {}
//         },
//         "绘图区属性": {
//             "preset": "Default",
//             "closed": true,
//             "folders": {}
//         },
//         "图例属性": {
//             "preset": "Default",
//             "closed": true,
//             "folders": {}
//         },
//         "x轴属性": {
//             "preset": "Default",
//             "closed": false,
//             "folders": {}
//         },
//         "y轴属性": {
//             "preset": "Default",
//             "closed": true,
//             "folders": {}
//         }
//     }
// };
var selectDivId='';

/*
添加div的方法,返回值为随机id
 */
function addChartDiv(parent,chartType){
// <div id='bar随即id' class="Monitor">
//         <div id="barChild" style="height:calc(100% - 3px);wid    th:calc(100% - 3px);"></div>
//         </div>
    var ids=chartType+'-'+uniqueDivId(hescList.length);
    //这里的长宽为monitor的长宽-3
    var divContent='<div id="'+ids+'" class="Monitor"><div id='+ids+'canvas class="canvasclass" style="height:'+(400)+'px;width:'+(500)+'px;"></div>';
    $(parent).append(divContent);
    $('.Monitor').resizable().draggable();

    //根据chartType的类型初始化hesclist中的对象
    if(chartType=='bar') {
        addHescEle(ids, 'static', cloneObj(barInitialCanvasData), cloneObj(barInitialDatGuiData));
    }
    else if(chartType=='line'){
        addHescEle(ids,'static',cloneObj(lineInitialCanvasData),cloneObj(lineInitialDatGuiData));
    }
    else if(chartType=='pie'){
        addHescEle(ids,'static',cloneObj(pieInitialCanvasData),cloneObj(pieInitailDatGuiData));
    }
    else if(chartType=='radar'){
        addHescEle(ids,'static',cloneObj(radarInitialCanvasData),cloneObj(radarInitialDatGuiData));
    }

    /*
    因为monitor需要对hesclist进行操作，所以放在后面
     为每一个monitor设立width，height改变监听器
     */
    $('.Monitor').each(function () {
        $(this).mutate('height width',function (e1,info) {
            var ids1=$(e1).attr('id').split('-');
            //查找到hescList中指定的元素并替换height和width的值
            for(var hescListHeightWidth in hescList){
                if(hescList[hescListHeightWidth].divId==$(e1).attr('id')){
                    hescList[hescListHeightWidth].datGuiConfig.canvasHeight=$(e1).height();
                    hescList[hescListHeightWidth].datGuiConfig.canvasWidth=$(e1).width();
                    if(ids1[0]=='bar') {
                        renderBarChart($(e1).attr('id'),findCanvasDataById($(e1).attr('id')).data,findDatGuiDataById($(e1).attr('id')));
                    }
                    else if(ids1[0]=='line'){
                        renderLineChart($(e1).attr('id'),findCanvasDataById($(e1).attr('id')).data,findDatGuiDataById($(e1).attr('id')));
                    }
                    else if(ids1[0]=='pie'){
                        renderPieChart($(e1).attr('id'),findCanvasDataById($(e1).attr('id')).data,findDatGuiDataById($(e1).attr('id')));
                    }
                    else if(ids1[0]=='radar'){
                        renderRadarChart($(e1).attr('id'),findCanvasDataById($(e1).attr('id')).data,findDatGuiDataById($(e1).attr('id')));
                    }
                }
            }
        })
    })
    return ids;

}
/*
添加数据结构的方法
 */
function addHescEle(divId,dataType,data,datGuiConfig){
    hescList.push({
        divId:divId,
        canvasData:{
            dataType:dataType,
            data:data
        },
        datGuiConfig:datGuiConfig
    });
}
/*
柱状图dat.gui初始化配置方法,即为dat.gui添加方法
 */
function addBarDatGui(chartId){
    //selectDivId=chartId;
    addBarDatGuiPannel(findDatGuiDataById(chartId),findCanvasDataById(chartId));
    function addBarDatGuiPannel(barDefaultDatGUiObj,barDefaultCanvasData){
        /*
        移除之前的dat.gui
         */
        // datGuiPannel.destroy();
            $('#tabConfig').children().remove();

            datGuiPannel = new dat.GUI({autoPlace: false});
            //添加柱状图至控制面板
            var customContainer = document.getElementById('tabConfig');
            customContainer.appendChild(datGuiPannel.domElement);

            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            //添加事件监听
            var barCanvas=datGuiPannel.addFolder('画布大小');
            barCanvas.add(barDefaultDatGUiObj,'canvasWidth',200,1000).name('画布宽').listen().onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            });
            barCanvas.add(barDefaultDatGUiObj,'canvasHeight',150,800).name("画布高").listen().onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            })  ;
            datGuiPannel.addColor(barDefaultDatGUiObj, 'backgroundColor').name('背景色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            var barTitle = datGuiPannel.addFolder('标题属性');
            barTitle.add(barDefaultDatGUiObj, 'title').name('图表标题').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.add(barDefaultDatGUiObj, 'subtitle').name('图标副标题').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.add(barDefaultDatGUiObj, 'titleTextStyleFontSize').name('标题大小').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.addColor(barDefaultDatGUiObj, 'titleBackgroundColor').name('背景色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.addColor(barDefaultDatGUiObj, 'titleTextStyleColor').name('标题颜色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.add(barDefaultDatGUiObj, 'titleTop').name('上边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.add(barDefaultDatGUiObj, 'titleLeft').name('左边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            var barGrid = datGuiPannel.addFolder("绘图区属性");
            barGrid.add(barDefaultDatGUiObj, 'gridTop').name('上边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barGrid.add(barDefaultDatGUiObj, 'gridBottom').name('下边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barGrid.add(barDefaultDatGUiObj, "gridLeft").name('左边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barGrid.add(barDefaultDatGUiObj, "gridRight").name('右边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            datGuiPannel.add(barDefaultDatGUiObj, 'tooltipAxisPointerType', {
                阴影: 'shadow',
                交叉线: 'cross',
                垂直线: 'line'
            }).name('ToolTip类型').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            var barLegend = datGuiPannel.addFolder("图例属性");
            barLegend.add(barDefaultDatGUiObj, 'legend').name('图例值').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barLegend.add(barDefaultDatGUiObj, 'legendOrient', {
                水平: 'horizontal',
                垂直: 'vertical'
            }).name('图例方向').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barLegend.add(barDefaultDatGUiObj, 'legendAlign', {
                左: 'left',
                右: 'right'
            }).name('图例朝向').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barLegend.add(barDefaultDatGUiObj, 'legendTop').name('图例上边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barLegend.add(barDefaultDatGUiObj, 'legendLeft').name('图例左边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            var barX = datGuiPannel.addFolder('x轴属性');
            barX.add(barDefaultDatGUiObj, 'xAxisData').name('x轴坐标点').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisPosition', {
                上: 'top',
                下: 'bottom'
            }).name('x轴位置').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.addColor(barDefaultDatGUiObj, 'xAxisAxisLabelTextStyleColor').name('字体颜色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisGridLine').name('x轴网格').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisInverse').name('x轴反向').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisSplitAreaShow').name('x轴分割区域').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisAxisLineShow').name('x轴轴线').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisAxisTickShow').name('x轴刻度').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisAxisLabelInside').name('图内刻度').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barX.add(barDefaultDatGUiObj, 'xAxisBoundaryGap').name('左右边界').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            var barY = datGuiPannel.addFolder('y轴属性');
            barY.add(barDefaultDatGUiObj, 'yAxisData').name('y轴坐标点').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.add(barDefaultDatGUiObj, 'yAxisPosition', {
                左: 'left',
                右: 'right'
            }).name('y轴位置').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.addColor(barDefaultDatGUiObj, 'yAxisAxisLabelTextStyleColor').name('字体颜色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.add(barDefaultDatGUiObj, 'yAxisGridLine').name('y轴网格').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.add(barDefaultDatGUiObj, 'yAxisInverse').name('y轴反向').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.add(barDefaultDatGUiObj, 'yAxisSplitAreaShow').name('y轴分割区域').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.add(barDefaultDatGUiObj, 'yAxisAxisLineShow').name('y轴轴线').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.add(barDefaultDatGUiObj, 'yAxisAxisTickShow').name('y轴刻度').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barY.add(barDefaultDatGUiObj, 'yAxisAxisLabelInside').name('图内刻度').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            datGuiPannel.add(barDefaultDatGUiObj, 'reverse').name('坐标轴是否转置').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            datGuiPannel.add(barDefaultDatGUiObj, 'stack').name('多维堆叠柱状图数据模型').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
    }

}
function addLineDatGui(chartId) {
    addLineDatGuiPannel(findDatGuiDataById(chartId),findCanvasDataById(chartId));
    function addLineDatGuiPannel(lineDefaultDatGUiObj,lineDefaultCanvasData) {
        /*
         移除之前的dat.gui
         */
        // datGuiPannel.destroy();
        $('#tabConfig').children().remove();

        datGuiPannel = new dat.GUI({autoPlace: false});
        //添加柱状图至控制面板
        var customContainer = document.getElementById('tabConfig');
        customContainer.appendChild(datGuiPannel.domElement);

        renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);
        //添加事件监听
        var lineCanvas=datGuiPannel.addFolder('画布大小');
        lineCanvas.add(lineDefaultDatGUiObj,'canvasWidth',200,1000).name('画布宽').listen().onChange(function () {
            renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);
        });
        lineCanvas.add(lineDefaultDatGUiObj,'canvasHeight',150,800).name("画布高").listen().onChange(function () {
            renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);
        });
        datGuiPannel.addColor(lineDefaultDatGUiObj,'backgroundColor').name('背景色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barTitle=datGuiPannel.addFolder('标题属性');
        barTitle.add(lineDefaultDatGUiObj, 'title').name('图表标题').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'subtitle').name('图标副标题').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'titleTextStyleFontSize').name('标题大小').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.addColor(lineDefaultDatGUiObj,'titleBackgroundColor').name('背景色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.addColor(lineDefaultDatGUiObj,'titleTextStyleColor').name('标题颜色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'titleTop').name('上边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'titleLeft').name('左边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barGrid=datGuiPannel.addFolder("绘图区属性");
        barGrid.add(lineDefaultDatGUiObj,'gridTop').name('上边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barGrid.add(lineDefaultDatGUiObj,'gridBottom').name('下边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barGrid.add(lineDefaultDatGUiObj,"gridLeft").name('左边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barGrid.add(lineDefaultDatGUiObj,"gridRight").name('右边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barLegend=datGuiPannel.addFolder("图例属性");
        barLegend.add(lineDefaultDatGUiObj,'legend').name('图例值').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendOrient',{水平:'horizontal',垂直:'vertical'}).name('图例方向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendAlign',{左:'left',右:'right'}).name('图例朝向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendTop').name('图例上边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendLeft').name('图例左边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barX=datGuiPannel.addFolder('x轴属性');
        barX.add(lineDefaultDatGUiObj,'xAxisData').name('x轴坐标点').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisPosition',{上:'top',下:'bottom'}).name('x轴位置').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.addColor(lineDefaultDatGUiObj,'xAxisAxisLabelTextStyleColor').name('字体颜色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisGridLine').name('x轴网格').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisInverse').name('x轴反向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisSplitAreaShow').name('x轴分割区域').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisLineShow').name('x轴轴线').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisTickShow').name('x轴刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisLabelInside').name('图内刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisBoundaryGap').name('左右边界').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barY=datGuiPannel.addFolder('y轴属性');
        barY.add(lineDefaultDatGUiObj,'yAxisData').name('y轴坐标点').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisPosition',{左:'left',右:'right'}).name('y轴位置').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.addColor(lineDefaultDatGUiObj,'yAxisAxisLabelTextStyleColor').name('字体颜色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisGridLine').name('y轴网格').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisInverse').name('y轴反向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisSplitAreaShow').name('y轴分割区域').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisLineShow').name('y轴轴线').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisTickShow').name('y轴刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisLabelInside').name('图内刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        datGuiPannel.add(lineDefaultDatGUiObj,'tooltipAxisPointerType',{阴影:'shadow',交叉线:'cross',垂直线:'line'}).name('ToolTip类型').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        datGuiPannel.add(lineDefaultDatGUiObj,'reverse').name('坐标轴是否转置').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        datGuiPannel.add(lineDefaultDatGUiObj,'seriesAreaStyle').name('流图').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
    }
}
function addPieDatGui(chartId) {
    addPieDatGuiPannel(findDatGuiDataById(chartId), findCanvasDataById(chartId));
    function addPieDatGuiPannel(pieDefaultDatGUiObj, pieDefaultCanvasData) {
        /*
         移除之前的dat.gui
         */
        // datGuiPannel.destroy();
        $('#tabConfig').children().remove();

        datGuiPannel = new dat.GUI({autoPlace: false});
        //添加柱状图至控制面板
        var customContainer = document.getElementById('tabConfig');
        customContainer.appendChild(datGuiPannel.domElement);

        renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        //添加事件监听
        var pieCanvas = datGuiPannel.addFolder('画布大小');
        pieCanvas.add(pieDefaultDatGUiObj, 'canvasWidth', 200, 1000).name('画布宽').listen().onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieCanvas.add(pieDefaultDatGUiObj, 'canvasHeight', 150, 800).name("画布高").listen().onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        datGuiPannel.addColor(pieDefaultDatGUiObj, 'backgroundColor').name('背景色').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieTitle = datGuiPannel.addFolder('标题属性');
        pieTitle.add(pieDefaultDatGUiObj, 'title').name('图表标题').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'subtitle').name('图标副标题').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'titleTextStyleFontSize').name('标题大小').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.addColor(pieDefaultDatGUiObj, 'titleBackgroundColor').name('背景色').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.addColor(pieDefaultDatGUiObj, 'titleTextStyleColor').name('标题颜色').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'titleTop').name('上边距').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'titleLeft').name('左边距').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieGrid = datGuiPannel.addFolder("绘图区属性");
        pieGrid.add(pieDefaultDatGUiObj, 'seriesCenterTop', 0, 100).name("圆心上边距").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieGrid.add(pieDefaultDatGUiObj, 'seriesCenterLeft', 0, 100).name("圆心下边距").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieLegend = datGuiPannel.addFolder("图例属性");
        pieLegend.add(pieDefaultDatGUiObj, 'legendOrient', {水平: 'horizontal', 垂直: 'vertical'}).name('图例方向').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieLegend.add(pieDefaultDatGUiObj, 'legendAlign', {左: 'left', 右: 'right'}).name('图例朝向').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieLegend.add(pieDefaultDatGUiObj, 'legendTop').name('图例上边距').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieLegend.add(pieDefaultDatGUiObj, 'legendLeft').name('图例左边距').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieSeries = datGuiPannel.addFolder("数据属性");
        pieSeries.add(pieDefaultDatGUiObj, 'seriesName').name("数据名").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieSeries.add(pieDefaultDatGUiObj, 'seriesRadiusOutter', 0, 100).name("外半径").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieSeries.add(pieDefaultDatGUiObj, 'seriesRadiusInner', 0, 100).name("内半径").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });

        pieSeries.add(pieDefaultDatGUiObj, 'seriesRoseType', {
            否: 'false',
            区域: 'area',
            角度: 'angle'
        }).name("玫瑰图").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieSeries.add(pieDefaultDatGUiObj, 'seriesLabelNormalShow').name("外标签").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
    }
}
function addRadarDatGui(chartId) {
    addRadarDatGuiPannel(findDatGuiDataById(chartId), findCanvasDataById(chartId));
    function addRadarDatGuiPannel(radarDefaultDatGUiObj, radarDefaultCanvasData) {
        /*
         移除之前的dat.gui
         */
        // datGuiPannel.destroy();
        $('#tabConfig').children().remove();

        datGuiPannel = new dat.GUI({autoPlace: false});
        //添加柱状图至控制面板
        var customContainer = document.getElementById('tabConfig');
        customContainer.appendChild(datGuiPannel.domElement);

        renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        //添加事件监听
        var radarCanvas = datGuiPannel.addFolder('画布大小');
        radarCanvas.add(radarDefaultDatGUiObj, 'canvasWidth', 200, 1000).name('画布宽').listen().onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarCanvas.add(radarDefaultDatGUiObj, 'canvasHeight', 150, 800).name("画布高").listen().onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });

        datGuiPannel.addColor(radarDefaultDatGUiObj, 'backgroundColor').name('背景色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        var radarTitle = datGuiPannel.addFolder('标题属性');
        radarTitle.add(radarDefaultDatGUiObj, 'title').name('图表标题').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'subtitle').name('图标副标题').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'titleTextStyleFontSize').name('标题大小').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.addColor(radarDefaultDatGUiObj, 'titleBackgroundColor').name('背景色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.addColor(radarDefaultDatGUiObj, 'titleTextStyleColor').name('标题颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'titleTop').name('上边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'titleLeft').name('左边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        var radarLegend = datGuiPannel.addFolder("图例属性");
        radarLegend.add(radarDefaultDatGUiObj, 'legend').name('图例值').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarLegend.add(radarDefaultDatGUiObj, 'legendOrient', {
            水平: 'horizontal',
            垂直: 'vertical'
        }).name('图例方向').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarLegend.add(radarDefaultDatGUiObj, 'legendAlign', {
            左: 'left',
            右: 'right'
        }).name('图例朝向').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarLegend.add(radarDefaultDatGUiObj, 'legendTop').name('图例上边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarLegend.add(radarDefaultDatGUiObj, 'legendLeft').name('图例左边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        var radarRadar = datGuiPannel.addFolder("绘图区属性");
        radarRadar.add(radarDefaultDatGUiObj, 'tooltipShow').name('Tooltip').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarIndicator').name('坐标轴Label').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarCenterTop').name('上边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarCenterLeft').name('左边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarRadius').name('半径').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarStartAngle', 0, 360).name('旋转角度').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarSplitNumber', 0, 20).name('网格横向数量').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarShape', {
            矩形: 'rect',
            圆形: 'circle'
        }).name('雷达图外观').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.addColor(radarDefaultDatGUiObj, 'radarNameTextStyleColor').name('标签字体颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarNameTextStyleFontSize', 1, 30).name('标签字体大小').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarAxisLineShow').name('坐标线').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarSplitLineShow').name('分隔线').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.addColor(radarDefaultDatGUiObj, 'radarAxisLineLineStyle').name('坐标线颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.addColor(radarDefaultDatGUiObj, 'radarSplitLineLineStyle').name('分割线颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarAxisLineShow').name('坐标线').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        var radarSeries = datGuiPannel.addFolder('雷达图属性')
        radarSeries.add(radarDefaultDatGUiObj, 'seriesName').name('图名').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesSymbol', {
            圆形: 'circle',
            矩形: 'rect',
            三角形: 'triangle',
            箭头: 'arrow'
        }).name('标记点').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesSymbolSize', 0, 20).name('标记点大小').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalShow').name('show?').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalWidth', 0, 5).name('线宽度').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalType', {
            实线: 'solid',
            虚线: 'dashed',
            点阵: 'dotted'
        }).name('线段类型').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalOpacity', 0, 1).name('线段透明度').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
    }
}

function addCanvasData(divChartId){
    //更新jsoneditor中的text
    return  findCanvasDataById(divChartId);

}

/*
 更新bardefaultDatGuiObj（这里因为js是浅拷贝所以不需要手动替换元素，js会自动修改hescList元素的值）
 */
function updateHescEleByIdToDatGuiConfig(chartId,datGuiConfig){
    // console.log(hescList);
    // console.log('----------------')
    // for(var object1 in hescList){
    //     if(hescList[object1].divId==chartId){
    //         hescList[object1].datGuiConfig=datGuiConfig;
    //     }
    // }
    // console.log(hescList)
}
/*
 更新bardefaultDatGuiObj（这里因为js是浅拷贝所以不需要手动替换元素，js会自动修改hescList元素的值）
 */
function updateHescEleByIdToCanvasData(chartId,data){
    for(var object1 in hescList){
        if(hescList[object1].divId==chartId){
            hescList[object1].canvasData.data=data;
        }
    }

}

/*
根据id查找数据结构的方法
 */
function findHescEle(divId){
    for(var hescListEle in hescList){
        if(divId==hescList[hescListEle].divId){
            return hescList[hescListEle];
            break;
        }
    }
}
/*
更新数据结构的方法
 */
function replaceHescEle(divId,dataType,data,datGuiConfig){
    for(var hescListEle in hescList){
        if(divId==hescList[hescListEle].divId){
            hescList[hescListEle].canvasData={dataType:dataType,data:data};
            hescList[hescListEle].datGuiConfig=datGuiConfig;
            break;
        }
    }
}
//通过id查找datguidata
function findDatGuiDataById(chartId){
    for(var object1 in hescList){
        if(hescList[object1].divId==chartId){
            return hescList[object1].datGuiConfig;
        }
    }
}
//根据id查找canvasdata
function findCanvasDataById(chartId) {
    for(var object1 in hescList){
        if(hescList[object1].divId==chartId){
            return hescList[object1].canvasData;
        }
    }
}
/*
获取唯一的id
 */
function uniqueDivId(id){
    return hashids.encode(id);
}

/*
初始barInitialDatGuiData 、barInitialCanvasData对象拷贝
 https://www.zhihu.com/question/23031215
 */
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};