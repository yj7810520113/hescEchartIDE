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
//缩放系数
var transformScale=1;
var screenInitialDatGuiData={
    width:1920,
    height:1080,
    background:'#0d2a42'
}
var barInitialCanvasData=[[{"2011":2},{"2011":4},{"2011":4},{"2011":4}],[{"2012":6},{"2012":8},{"2013":4},{"2013":4}],[{"2014":5},{"2014":2},{"2014":9},{"2014":1}],[{"2015":8},{"2015":6},{"2015":1},{"2015":7}]];
var barInitialDatGuiData ={
    theme:'walden',
    color:'',
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:'rgba(0,0,0,0)',
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'rgba(0,0,0,0)',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#fff',
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
    legendTextStyleColor:'#fff',
    xAxisData:'',
    xAxisGridLine:false,
    xAxisPosition:'bottom',
    xAxisInverse:false,
    xAxisSplitAreaShow:false,
    xAxisAxisLineShow:true,
    xAxisAxisLabelInside:false,
    xAxisAxisLabelTextStyleColor:'#fff',
    xAxisAxisLabelInterval:0,
    xAxisAxisLabelRotate:0,
    xAxisAxisTickShow:true,
    xAxisBoundaryGap:true,
    yAxisData:'',
    yAxisGridLine:true,
    yAxisPosition:'left',
    yAxisInverse:false,
    yAxisSplitAreaShow:false,
    yAxisAxisLineShow:true,
    yAxisAxisLabelInside:false,
    yAxisAxisLabelTextStyleColor:'#fff',
    yAxisAxisLabelInterval:0,
    yAxisAxisLabelRotate:0,
    yAxisAxisTickShow:true,
    reverse:false,
    stack:'',
    seriesBarGap:0,
    seriesBarWidth:15,




};
var lineInitialCanvasData=[[{"2011":2},{"2011":4},{"2011":4},{"2011":4}],[{"2012":6},{"2012":8},{"2013":4},{"2013":4}],[{"2014":5},{"2014":2},{"2014":9},{"2014":1}],[{"2015":8},{"2015":6},{"2015":1},{"2015":7}]];
var lineInitialDatGuiData={
    theme:'walden',
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:'rgba(255,255,255,0)',
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'rgba(255,255,255,0)',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#fff',
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
    xAxisAxisLabelTextStyleColor:'#fff',
    xAxisAxisTickShow:true,
    xAxisBoundaryGap:true,
    yAxisData:'',
    yAxisGridLine:true,
    yAxisPosition:'left',
    yAxisInverse:false,
    yAxisSplitAreaShow:false,
    yAxisAxisLineShow:true,
    yAxisAxisLabelInside:false,
    yAxisAxisLabelTextStyleColor:'#fff',
    yAxisAxisTickShow:true,
    reverse:false,
    stack:'',

    /*
    5.10添加属性，提取自bar
     */
    color:'',
    yAxisAxisLabelInterval:0,
    yAxisAxisLabelRotate:0,
    xAxisAxisLabelInterval:0,
    xAxisAxisLabelRotate:0,
    legendTextStyleColor:'#fff',
    //平滑曲线
    smooth:false,
};
var pieInitialCanvasData=[{"name":"2011","value":2},{"name":"2012","value":1},{"name":"2013","value":3},{"name":"2014","value":4}];
var pieInitailDatGuiData={
    theme:'walden',
    color:'',
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:'rgba(255,255,255,0)',
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'rgba(255,255,255,0)',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#fff',
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
    legendTextStyleColor:'#fff',
    /*
     series相关属性
     */
    seriesName: '默认1',
    seriesRadiusOutter: 50,
    seriesRadiusInner: 0,
    seriesCenterTop: 50,
    seriesCenterLeft: 50,
    seriesRoseType:'false',
    seriesLabelNormalShow: true
};
var radarInitialCanvasData=[[{"推塔":2},{"输出":4},{"承受伤害":4},{"KDA":4},{"胜率":78}],[{"推塔":3},{"输出":5},{"承受伤害":5},{"KDA":10},{"胜率":60}],[{"推塔":4},{"输出":1},{"承受伤害":1},{"KDA":5},{"胜率":65}],[{"推塔":5},{"输出":4},{"承受伤害":2},{"KDA":8},{"胜率":70}]];
var radarInitialDatGuiData={
    theme:'walden',
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:'rgba(255,255,255,0)',
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'rgba(255,255,255,0)',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#fff',
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
    radarNameTextStyleColor:'#fff',
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
var calendarInitialCanvasData=[{"2017-01-01":713},{"2017-01-02":871},{"2017-01-03":65},{"2017-01-04":629},{"2017-01-05":468},{"2017-01-06":532},{"2017-01-07":823},{"2017-01-08":458},{"2017-01-09":525},{"2017-01-10":200},{"2017-01-11":884},{"2017-01-12":760},{"2017-01-13":845},{"2017-01-14":11},{"2017-01-15":46},{"2017-01-16":458},{"2017-01-17":302},{"2017-01-18":850},{"2017-01-19":485},{"2017-01-20":710},{"2017-01-21":511},{"2017-01-22":931},{"2017-01-23":631},{"2017-01-24":332},{"2017-01-25":675},{"2017-01-26":424},{"2017-01-27":536},{"2017-01-28":540},{"2017-01-29":917},{"2017-01-30":9},{"2017-01-31":26},{"2017-02-01":278},{"2017-02-02":135},{"2017-02-03":629},{"2017-02-04":86},{"2017-02-05":981},{"2017-02-06":91},{"2017-02-07":326},{"2017-02-08":134},{"2017-02-09":932},{"2017-02-10":813},{"2017-02-11":237},{"2017-02-12":664},{"2017-02-13":273},{"2017-02-14":622},{"2017-02-15":360},{"2017-02-16":17},{"2017-02-17":980},{"2017-02-18":870},{"2017-02-19":908},{"2017-02-20":544},{"2017-02-21":734},{"2017-02-22":255},{"2017-02-23":186},{"2017-02-24":4},{"2017-02-25":68},{"2017-02-26":811},{"2017-02-27":751},{"2017-02-28":115},{"2017-03-01":272},{"2017-03-02":819},{"2017-03-03":739},{"2017-03-04":969},{"2017-03-05":488},{"2017-03-06":332},{"2017-03-07":829},{"2017-03-08":867},{"2017-03-09":802},{"2017-03-10":215},{"2017-03-11":858},{"2017-03-12":888},{"2017-03-13":188},{"2017-03-14":866},{"2017-03-15":246},{"2017-03-16":143},{"2017-03-17":1},{"2017-03-18":347},{"2017-03-19":943},{"2017-03-20":796},{"2017-03-21":254},{"2017-03-22":23},{"2017-03-23":373},{"2017-03-24":424},{"2017-03-25":502},{"2017-03-26":899},{"2017-03-27":876},{"2017-03-28":662},{"2017-03-29":56},{"2017-03-30":155},{"2017-03-31":977},{"2017-04-01":578},{"2017-04-02":557},{"2017-04-03":3},{"2017-04-04":730},{"2017-04-05":388},{"2017-04-06":736},{"2017-04-07":915},{"2017-04-08":653},{"2017-04-09":654},{"2017-04-10":353},{"2017-04-11":628},{"2017-04-12":563},{"2017-04-13":799},{"2017-04-14":972},{"2017-04-15":841},{"2017-04-16":702},{"2017-04-17":331},{"2017-04-18":728},{"2017-04-19":723},{"2017-04-20":13},{"2017-04-21":922},{"2017-04-22":20},{"2017-04-23":849},{"2017-04-24":903},{"2017-04-25":736},{"2017-04-26":945},{"2017-04-27":521},{"2017-04-28":349},{"2017-04-29":279},{"2017-04-30":279},{"2017-05-01":924},{"2017-05-02":802},{"2017-05-03":86},{"2017-05-04":344},{"2017-05-05":332},{"2017-05-06":270},{"2017-05-07":613},{"2017-05-08":485},{"2017-05-09":752},{"2017-05-10":733},{"2017-05-11":49},{"2017-05-12":110},{"2017-05-13":456},{"2017-05-14":507},{"2017-05-15":833},{"2017-05-16":259},{"2017-05-17":266},{"2017-05-18":872},{"2017-05-19":700},{"2017-05-20":588},{"2017-05-21":592},{"2017-05-22":68},{"2017-05-23":491},{"2017-05-24":898},{"2017-05-25":313},{"2017-05-26":877},{"2017-05-27":666},{"2017-05-28":326},{"2017-05-29":186},{"2017-05-30":920},{"2017-05-31":496},{"2017-06-01":818},{"2017-06-02":12},{"2017-06-03":34},{"2017-06-04":914},{"2017-06-05":720},{"2017-06-06":535},{"2017-06-07":788},{"2017-06-08":891},{"2017-06-09":565},{"2017-06-10":832},{"2017-06-11":575},{"2017-06-12":225},{"2017-06-13":68},{"2017-06-14":650},{"2017-06-15":131},{"2017-06-16":478},{"2017-06-17":963},{"2017-06-18":906},{"2017-06-19":102},{"2017-06-20":72},{"2017-06-21":834},{"2017-06-22":638},{"2017-06-23":933},{"2017-06-24":631},{"2017-06-25":595},{"2017-06-26":411},{"2017-06-27":960},{"2017-06-28":871},{"2017-06-29":681},{"2017-06-30":930},{"2017-07-01":346},{"2017-07-02":265},{"2017-07-03":770},{"2017-07-04":618},{"2017-07-05":260},{"2017-07-06":550},{"2017-07-07":385},{"2017-07-08":460},{"2017-07-09":137},{"2017-07-10":783},{"2017-07-11":55},{"2017-07-12":522},{"2017-07-13":501},{"2017-07-14":121},{"2017-07-15":975},{"2017-07-16":532},{"2017-07-17":474},{"2017-07-18":78},{"2017-07-19":233},{"2017-07-20":489},{"2017-07-21":629},{"2017-07-22":76},{"2017-07-23":156},{"2017-07-24":131},{"2017-07-25":473},{"2017-07-26":155},{"2017-07-27":925},{"2017-07-28":664},{"2017-07-29":440},{"2017-07-30":381},{"2017-07-31":939},{"2017-08-01":690},{"2017-08-02":407},{"2017-08-03":933},{"2017-08-04":667},{"2017-08-05":272},{"2017-08-06":880},{"2017-08-07":265},{"2017-08-08":261},{"2017-08-09":897},{"2017-08-10":609},{"2017-08-11":735},{"2017-08-12":428},{"2017-08-13":547},{"2017-08-14":735},{"2017-08-15":330},{"2017-08-16":95},{"2017-08-17":80},{"2017-08-18":449},{"2017-08-19":425},{"2017-08-20":51},{"2017-08-21":334},{"2017-08-22":13},{"2017-08-23":981},{"2017-08-24":413},{"2017-08-25":507},{"2017-08-26":753},{"2017-08-27":657},{"2017-08-28":462},{"2017-08-29":574},{"2017-08-30":363},{"2017-08-31":287},{"2017-09-01":203},{"2017-09-02":213},{"2017-09-03":216},{"2017-09-04":166},{"2017-09-05":9},{"2017-09-06":0},{"2017-09-07":15},{"2017-09-08":558},{"2017-09-09":784},{"2017-09-10":833},{"2017-09-11":797},{"2017-09-12":64},{"2017-09-13":847},{"2017-09-14":673},{"2017-09-15":78},{"2017-09-16":901},{"2017-09-17":339},{"2017-09-18":239},{"2017-09-19":543},{"2017-09-20":476},{"2017-09-21":225},{"2017-09-22":43},{"2017-09-23":151},{"2017-09-24":894},{"2017-09-25":728},{"2017-09-26":310},{"2017-09-27":608},{"2017-09-28":545},{"2017-09-29":272},{"2017-09-30":331},{"2017-10-01":207},{"2017-10-02":100},{"2017-10-03":662},{"2017-10-04":326},{"2017-10-05":384},{"2017-10-06":382},{"2017-10-07":20},{"2017-10-08":628},{"2017-10-09":240},{"2017-10-10":399},{"2017-10-11":315},{"2017-10-12":204},{"2017-10-13":117},{"2017-10-14":317},{"2017-10-15":52},{"2017-10-16":420},{"2017-10-17":339},{"2017-10-18":66},{"2017-10-19":785},{"2017-10-20":326},{"2017-10-21":611},{"2017-10-22":423},{"2017-10-23":231},{"2017-10-24":796},{"2017-10-25":109},{"2017-10-26":198},{"2017-10-27":440},{"2017-10-28":322},{"2017-10-29":760},{"2017-10-30":238},{"2017-10-31":982},{"2017-11-01":119},{"2017-11-02":776},{"2017-11-03":808},{"2017-11-04":847},{"2017-11-05":870},{"2017-11-06":617},{"2017-11-07":838},{"2017-11-08":868},{"2017-11-09":547},{"2017-11-10":970},{"2017-11-11":405},{"2017-11-12":681},{"2017-11-13":628},{"2017-11-14":835},{"2017-11-15":164},{"2017-11-16":790},{"2017-11-17":823},{"2017-11-18":765},{"2017-11-19":926},{"2017-11-20":469},{"2017-11-21":117},{"2017-11-22":656},{"2017-11-23":505},{"2017-11-24":23},{"2017-11-25":886},{"2017-11-26":651},{"2017-11-27":987},{"2017-11-28":269},{"2017-11-29":687},{"2017-11-30":204},{"2017-12-01":649},{"2017-12-02":482},{"2017-12-03":989},{"2017-12-04":321},{"2017-12-05":63},{"2017-12-06":917},{"2017-12-07":97},{"2017-12-08":445},{"2017-12-09":56},{"2017-12-10":650},{"2017-12-11":688},{"2017-12-12":973},{"2017-12-13":859},{"2017-12-14":264},{"2017-12-15":364},{"2017-12-16":918},{"2017-12-17":887},{"2017-12-18":461},{"2017-12-19":925},{"2017-12-20":635},{"2017-12-21":679},{"2017-12-22":514},{"2017-12-23":2},{"2017-12-24":86},{"2017-12-25":193},{"2017-12-26":450},{"2017-12-27":284},{"2017-12-28":133},{"2017-12-29":646},{"2017-12-30":813},{"2017-12-31":1}];
var calendarInitialDatGuiData={
    theme:'walden',
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:'rgba(255,255,255,0)',
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'rgba(255,255,255,0)',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#fff',
    gridLeft:50,
    gridRight:50,
    gridTop:50,
    gridBottom:50,
    /*
     visualMap，颜色映射
     */
    visualShow : true,
    visualMapMin : 0,
    visualMapMax : 200,
    visualMapCalculable : true,
    visualMapOrient : 'horizontal',
    visualMapLeft : 200,
    visualMapTop : 20,
    visualMapColorStart : '#3fb1e3',
    visualMapColorEnd : '#96dee8',
    /*
     calendar
     */
    calendarTop : 100,
    calendarLeft : 150,
    calendarOrient : 'horizontal',
    calendarRangeStart : '2017-1-1',
    calendarRangeEnd : '2017-3-31',
    calendarYearLabelMargin : 20,
    calendarMonthLabelNameMap : 'cn',
    calendarMonthLabelMargin : 40,
    calendarDayLabelFirstDay : 1,
    calendarCellSizeWidth : 20,
    calendarCellSizeHeight : 20,
    /*
     series
     */
    seriesType : 'heatmap',
    seriesCoordinateSystem : 'calendar',
    seriesLabelNormalShow : false,
    seriesLabelNormalTextStyleColor : '#fff',
    seriesLabelNormalTextStyleFontsize : 12,
    seriesSymbolSize:50

};
var wordCloudInitialCanvasData={
    "visualMap": 22199,
    "continuous": 10288,
    "contoller": 620,
    "series": 274470,
    "gauge": 12311,
    "detail": 1206,
    "piecewise": 4885,
    "textStyle": 32294,
    "markPoint": 18574,
    "pie": 38929,
    "roseType": 969,
    "label": 37517,
    "emphasis": 12053,
    "yAxis": 57299,
    "name": 15418,
    "type": 22905,
    "gridIndex": 5146,
    "normal": 49487,
    "itemStyle": 33837,
    "min": 4500,
    "silent": 5744,
    "animation": 4840,
    "offsetCenter": 232,
    "inverse": 3706,
    "borderColor": 4812,
    "markLine": 16578,
    "line": 76970,
    "radiusAxis": 6704,
    "radar": 15964,
    "data": 60679,
    "dataZoom": 24347,
    "tooltip": 43420,
    "toolbox": 25222,
    "geo": 16904,
    "parallelAxis": 4029,
    "parallel": 5319,
    "max": 3393,
    "bar": 43066,
    "heatmap": 3110,
    "map": 20285,
    "animationDuration": 3425,
    "animationDelay": 2431,
    "splitNumber": 5175,
    "axisLine": 12738,
    "lineStyle": 19601,
    "splitLine": 7133,
    "axisTick": 8831,
    "axisLabel": 17516,
    "pointer": 590,
    "color": 23426,
    "title": 38497,
    "formatter": 15214,
    "slider": 7236,
    "legend": 66514,
    "grid": 28516,
    "smooth": 1295,
    "smoothMonotone": 696,
    "sampling": 757,
    "feature": 12815,
    "saveAsImage": 2616,
    "polar": 6279,
    "calculable": 879,
    "backgroundColor": 9419,
    "excludeComponents": 130,
    "show": 20620,
    "text": 2592,
    "icon": 2782,
    "dimension": 478,
    "inRange": 1060,
    "animationEasing": 2983,
    "animationDurationUpdate": 2259,
    "animationDelayUpdate": 2236,
    "animationEasingUpdate": 2213,
    "xAxis": 89459,
    "angleAxis": 5469,
    "showTitle": 484,
    "dataView": 2754,
    "restore": 932,
    "timeline": 10104,
    "range": 477,
    "value": 5732,
    "precision": 878,
    "target": 1433,
    "zlevel": 5361,
    "symbol": 8718,
    "interval": 7964,
    "symbolSize": 5300,
    "showSymbol": 1247,
    "inside": 8913,
    "xAxisIndex": 3843,
    "orient": 4205,
    "boundaryGap": 5073,
    "nameGap": 4896,
    "zoomLock": 571,
    "hoverAnimation": 2307,
    "legendHoverLink": 3553,
    "stack": 2907,
    "throttle": 466,
    "connectNulls": 897,
    "clipOverflow": 826,
    "startValue": 551,
    "minInterval": 3292,
    "opacity": 3097,
    "splitArea": 4775,
    "filterMode": 635,
    "end": 409,
    "left": 6475,
    "funnel": 2238,
    "lines": 6403,
    "baseline": 431,
    "align": 2608,
    "coord": 897,
    "nameTextStyle": 7477,
    "width": 4338,
    "shadowBlur": 4493,
    "effect": 929,
    "period": 225,
    "areaColor": 631,
    "borderWidth": 3654,
    "nameLocation": 4418,
    "position": 11723,
    "containLabel": 1701,
    "scatter": 10718,
    "areaStyle": 5310,
    "scale": 3859,
    "pieces": 414,
    "categories": 1000,
    "selectedMode": 3825,
    "itemSymbol": 273,
    "effectScatter": 7147,
    "fontStyle": 3376,
    "fontSize": 3386,
    "margin": 1034,
    "iconStyle": 2257,
    "link": 1366,
    "axisPointer": 5245,
    "showDelay": 896,
    "graph": 22194,
    "subtext": 1442,
    "selected": 2881,
    "barCategoryGap": 827,
    "barGap": 1094,
    "barWidth": 1521,
    "coordinateSystem": 3622,
    "barBorderRadius": 284,
    "z": 4014,
    "polarIndex": 1456,
    "shadowOffsetX": 3046,
    "shadowColor": 3771,
    "shadowOffsetY": 2475,
    "height": 1988,
    "barMinHeight": 575,
    "lang": 131,
    "symbolRotate": 2752,
    "symbolOffset": 2549,
    "showAllSymbol": 942,
    "transitionDuration": 993,
    "bottom": 3724,
    "fillerColor": 229,
    "nameMap": 1249,
    "barMaxWidth": 747,
    "radius": 2103,
    "center": 2425,
    "magicType": 3276,
    "labelPrecision": 248,
    "option": 654,
    "seriesIndex": 935,
    "controlPosition": 121,
    "itemGap": 3188,
    "padding": 3481,
    "shadowStyle": 347,
    "boxplot": 1394,
    "labelFormatter": 264,
    "realtime": 631,
    "dataBackgroundColor": 239,
    "showDetail": 247,
    "showDataShadow": 217,
    "x": 684,
    "valueDim": 499,
    "onZero": 931,
    "right": 3255,
    "clockwise": 1035,
    "itemWidth": 1732,
    "trigger": 3840,
    "axis": 379,
    "selectedOffset": 670,
    "startAngle": 1293,
    "minAngle": 590,
    "top": 4637,
    "avoidLabelOverlap": 870,
    "labelLine": 3785,
    "sankey": 2933,
    "endAngle": 213,
    "start": 779,
    "roam": 1738,
    "fontWeight": 2828,
    "fontFamily": 2490,
    "subtextStyle": 2066,
    "indicator": 853,
    "sublink": 708,
    "zoom": 1038,
    "subtarget": 659,
    "length": 1060,
    "itemSize": 505,
    "controlStyle": 452,
    "yAxisIndex": 2529,
    "edgeLabel": 1188,
    "radiusAxisIndex": 354,
    "scaleLimit": 1313,
    "geoIndex": 535,
    "regions": 1892,
    "itemHeight": 1290,
    "nodes": 644,
    "candlestick": 3166,
    "crossStyle": 466,
    "edges": 369,
    "links": 3277,
    "layout": 846,
    "barBorderColor": 721,
    "barBorderWidth": 498,
    "treemap": 3865,
    "y": 367,
    "valueIndex": 704,
    "showLegendSymbol": 482,
    "mapValueCalculation": 492,
    "optionToContent": 264,
    "handleColor": 187,
    "handleSize": 271,
    "showContent": 1853,
    "angleAxisIndex": 406,
    "endValue": 327,
    "triggerOn": 1720,
    "contentToOption": 169,
    "buttonColor": 71,
    "rotate": 1144,
    "hoverLink": 335,
    "outOfRange": 491,
    "textareaColor": 58,
    "textareaBorderColor": 58,
    "textColor": 60,
    "buttonTextColor": 66,
    "category": 336,
    "hideDelay": 786,
    "alwaysShowContent": 1267,
    "extraCssText": 901,
    "effectType": 277,
    "force": 1820,
    "rippleEffect": 723,
    "edgeSymbolSize": 329,
    "showEffectOn": 271,
    "gravity": 199,
    "edgeLength": 193,
    "layoutAnimation": 152,
    "length2": 169,
    "enterable": 957,
    "dim": 83,
    "readOnly": 143,
    "levels": 444,
    "textGap": 256,
    "pixelRatio": 84,
    "nodeScaleRatio": 232,
    "draggable": 249,
    "brushType": 158,
    "radarIndex": 152,
    "large": 182,
    "edgeSymbol": 675,
    "largeThreshold": 132,
    "leafDepth": 73,
    "childrenVisibleMin": 73,
    "minSize": 35,
    "maxSize": 35,
    "sort": 90,
    "funnelAlign": 61,
    "source": 336,
    "nodeClick": 200,
    "curveness": 350,
    "areaSelectStyle": 104,
    "parallelIndex": 52,
    "initLayout": 359,
    "trailLength": 116,
    "boxWidth": 20,
    "back": 53,
    "rewind": 110,
    "zoomToNodeRatio": 80,
    "squareRatio": 60,
    "parallelAxisDefault": 358,
    "checkpointStyle": 440,
    "nodeWidth": 49,
    "color0": 62,
    "layoutIterations": 56,
    "nodeGap": 54,
    "color(Array": 76,
    "<string>)": 76,
    "repulsion": 276,
    "tiled": 105,
    "currentIndex": 145,
    "axisType": 227,
    "loop": 97,
    "playInterval": 112,
    "borderColor0": 23,
    "gap": 43,
    "autoPlay": 123,
    "showPlayBtn": 25,
    "breadcrumb": 119,
    "colorMappingBy": 85,
    "id": 18,
    "blurSize": 85,
    "minOpacity": 50,
    "maxOpacity": 54,
    "prevIcon": 12,
    "children": 21,
    "shape": 98,
    "nextIcon": 12,
    "showNextBtn": 17,
    "stopIcon": 21,
    "visibleMin": 83,
    "visualDimension": 97,
    "colorSaturation": 56,
    "colorAlpha": 66,
    "emptyItemWidth": 10,
    "inactiveOpacity": 4,
    "activeOpacity": 4,
    "showPrevBtn": 19,
    "playIcon": 26,
    "ellipsis": 19,
    "gapWidth": 19,
    "borderColorSaturation": 10,
    "handleIcon": 2,
    "handleStyle": 6,
    "borderType": 1,
    "constantSpeed": 1,
    "polyline": 2,
    "blendMode": 1,
    "dataBackground": 1,
    "textAlign": 1,
    "textBaseline": 1,
    "brush": 3
};
var wordCloudInitialDatGuiData= {
    theme:'walden',
    canvasWidth:500,
    canvasHeight:400,
    backgroundColor:'rgba(255,255,255,0)',
    title:'我是标题，请修改',
    subtitle:'',
    titleBackgroundColor:'rgba(255,255,255,0)',
    titleTop:10,
    titleLeft:10,
    titleTextStyleFontSize:18,
    titleTextStyleColor:'#fff',
//            series相关属性
//        */
    seriesName:'默认1',
    seriesType:'wordcount',
    seriesSizeMin:10,
    seriesSizeMax:90,
    seriesSizeRangeMin:6,
    seriesSizeRangeMax:50,
    seriesTextRotation:'',
    seriesRotationRangeMin:-90,
    seriesRotationRangeMax:90,
    seriesShape:'circle',
    maskImage:'',
    imgButton:function () {
        $('#imgFileInput').click();
    }

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
添加div的方法,返回值为随机id,这里需要对图的类型进行判断
 */
/*
添加screen
 */
function  addScreen() {
    addHescEle('screen','','',screenInitialDatGuiData);
    //设置screen的高度和宽度
    $("#screen").height(1080);
    $("#screen").width(1920);
}
function addChartDiv(parent,chartType){
// <div id='bar随即id' class="Monitor">
//         <div id="barChild" style="height:calc(100% - 3px);wid    th:calc(100% - 3px);"></div>
//         </div>
    var ids=chartType+'-'+uniqueDivId(hescList.length);
    //这里的长宽为monitor的长宽-3
    var divContent='<div id="'+ids+'" class="Monitor" style="z-index: 11;position:absolute">    <div  class="divControlPannel"><span class="glyphicon glyphicon-remove divControlPannelIcon removediv" style="color: white" id="removediv" onclick="removeDivFun()"></span> <span class="glyphicon glyphicon-download-alt divControlPannelIcon downloadOption" style="color: white" id="downloadOption" onclick="downloadOptionFun()"></span> </div><div id='+ids+'canvas class="canvasclass" style="height:'+(400)+'px;width:'+(500)+'px;"></div>';
    $(parent).append(divContent);
    //transformScale
    var click = {
        x: 0,
        y: 0
    };
    //解决tranform的draggle不粘手的问题
    $('.Monitor').resizable({
        handles:'all',
        autoHide:true,
        minWidth: -($(this).width()) * 10,  // these need to be large and negative
        minHeight: -($(this).height()) * 10, // so we can shrink our resizable while scaled
        resize: resizeFix
        }
    ).draggable({

        start: function(event) {
            click.x = event.clientX;
            click.y = event.clientY;
        },

        drag: function(event, ui) {

            // This is the parameter for scale()
            var zoom = 1.5;

            var original = ui.originalPosition;

            // jQuery will simply use the same object we alter here
            ui.position = {
                left: (event.clientX - click.x + original.left) / transformScale,
                top:  (event.clientY - click.y + original.top ) / transformScale
            };

        }

    });

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
    else if(chartType=='calendar'){
        addHescEle(ids,'static',cloneObj(calendarInitialCanvasData),cloneObj(calendarInitialDatGuiData));
    }
    else if(chartType=='wordCloud'){
        addHescEle(ids,'static',cloneObj(wordCloudInitialCanvasData),cloneObj(wordCloudInitialDatGuiData));
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
                    else if(ids1[0]=='calendar'){
                        renderCalendarChart($(e1).attr('id'),findCanvasDataById($(e1).attr('id')).data,findDatGuiDataById($(e1).attr('id')));
                    }
                    else if(ids1[0]=='wordCloud'){
                        renderWordCloudChart($(e1).attr('id'),findCanvasDataById($(e1).attr('id')).data,findDatGuiDataById($(e1).attr('id')));
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
function addScreenDatGui(){
    addScreenDatGUiPannel(findDatGuiDataById('screen'));
    toolTipHelper();

    function  addScreenDatGUiPannel(screenDefaultDatGUiObj) {
        $('#tabConfig').children().remove();
        datGuiPannel=new dat.GUI({autoPlace:false});
        var customContainer=document.getElementById('tabConfig');
        // $('tabConfig').append('<h4>页面设置</h4>')
        customContainer.appendChild(datGuiPannel.domElement);
        datGuiPannel.add(screenDefaultDatGUiObj,'width',1024,3840).name("屏幕宽").onChange(function () {
            $('#screen').css('width',screenDefaultDatGUiObj.width);
            refreshTransformScale();
        });
        datGuiPannel.add(screenDefaultDatGUiObj,'height',800,2160).name("屏幕高").onChange(function () {
            $('#screen').css('height',screenDefaultDatGUiObj.height);
            refreshTransformScale();

        });
        datGuiPannel.addColor(screenDefaultDatGUiObj,"background").name("幕布背景色").onChange(function () {
            $('#screen').css('background',screenDefaultDatGUiObj.background);
            refreshTransformScale();
        });

    }
}
function addBarDatGui(chartId){
    //selectDivId=chartId;
    addBarDatGuiPannel(findDatGuiDataById(chartId),findCanvasDataById(chartId));
    toolTipHelper();
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
        datGuiPannel.add(barDefaultDatGUiObj,'theme',{vintage:'vintage',westeros:'westeros',wonderland:'wonderland',chalk:'chalk',macarons:'macarons',shine:'shine',halloween:'halloween',dark:'dark',essos:'essos',walden:'walden',infographic:'infographic',roma:'roma',purplePassion:'purplepassion'}).name('主题').listen().onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        });
        datGuiPannel.add(barDefaultDatGUiObj,'color').name('配色方案').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        });

            var barCanvas=datGuiPannel.addFolder('画布大小');
            barCanvas.add(barDefaultDatGUiObj,'canvasWidth',200,1000).name('画布宽').listen().onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            });
            barCanvas.add(barDefaultDatGUiObj,'canvasHeight',150,800).name("画布高").listen().onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            })  ;
            datGuiPannel.addColor(barDefaultDatGUiObj, 'backgroundColor').name('画布背景色').onChange(function () {
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
            barTitle.add(barDefaultDatGUiObj, 'subtitle').name('图表副标题').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.add(barDefaultDatGUiObj, 'titleTextStyleFontSize').name('标题大小').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.addColor(barDefaultDatGUiObj, 'titleBackgroundColor').name('标题背景色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.addColor(barDefaultDatGUiObj, 'titleTextStyleColor').name('标题颜色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.add(barDefaultDatGUiObj, 'titleTop').name('标题上边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barTitle.add(barDefaultDatGUiObj, 'titleLeft').name('标题左边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            var barGrid = datGuiPannel.addFolder("绘图区属性");
            barGrid.add(barDefaultDatGUiObj, 'gridTop').name('绘图区上边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barGrid.add(barDefaultDatGUiObj, 'gridBottom').name('绘图区下边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barGrid.add(barDefaultDatGUiObj, "gridLeft").name('绘图区左边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            barGrid.add(barDefaultDatGUiObj, "gridRight").name('绘图区右边距').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            datGuiPannel.add(barDefaultDatGUiObj, 'tooltipAxisPointerType', {
                阴影: 'shadow',
                交叉线: 'cross',
                垂直线: 'line'
            }).name('提示框类型').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            var barLegend = datGuiPannel.addFolder("图例属性");
        barLegend.addColor(barDefaultDatGUiObj, 'legendTextStyleColor').name('图例字体颜色').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        });
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
            barX.addColor(barDefaultDatGUiObj, 'xAxisAxisLabelTextStyleColor').name('x轴字体颜色').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
        barX.add(barDefaultDatGUiObj, 'xAxisAxisLabelInterval',0,20).name('x轴刻度间隔').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        }).onFinishChange(function(){
            updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
        });
        barX.add(barDefaultDatGUiObj, 'xAxisAxisLabelRotate',-180,180).name('x轴字体旋转角度').onChange(function () {
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
        barX.add(barDefaultDatGUiObj, 'xAxisAxisLabelInside').name('x轴图内刻度').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        }).onFinishChange(function(){
            updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
        });

            barX.add(barDefaultDatGUiObj, 'xAxisBoundaryGap').name('x轴左右边界').onChange(function () {
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
        barY.addColor(barDefaultDatGUiObj, 'yAxisAxisLabelTextStyleColor').name('y轴字体颜色').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        }).onFinishChange(function(){
            updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
        });
        barY.add(barDefaultDatGUiObj, 'yAxisAxisLabelInterval',0,20).name('y轴刻度间隔').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        }).onFinishChange(function(){
            updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
        });
        barY.add(barDefaultDatGUiObj, 'yAxisAxisLabelRotate',-180,180).name('y轴字体旋转角度').onChange(function () {
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
            barY.add(barDefaultDatGUiObj, 'yAxisAxisLabelInside').name('y轴图内刻度').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
        datGuiPannel.add(barDefaultDatGUiObj, 'seriesBarGap',-100,100).name('柱状图间隔').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        }).onFinishChange(function(){
            updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
        });
        datGuiPannel.add(barDefaultDatGUiObj, 'seriesBarWidth',0,100).name('柱状图宽度').onChange(function () {
            renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
        }).onFinishChange(function(){
            updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
        });
            datGuiPannel.add(barDefaultDatGUiObj, 'reverse').name('坐标轴是否转置').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });
            datGuiPannel.add(barDefaultDatGUiObj, 'stack').name('堆叠柱状图').onChange(function () {
                renderBarChart(chartId, barDefaultCanvasData.data, barDefaultDatGUiObj);
            }).onFinishChange(function(){
                updateHescEleByIdToDatGuiConfig(chartId,barDefaultDatGUiObj);
            });


    }

}
function addLineDatGui(chartId) {
    addLineDatGuiPannel(findDatGuiDataById(chartId),findCanvasDataById(chartId));
    toolTipHelper();

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
        datGuiPannel.add(lineDefaultDatGUiObj,'theme',{vintage:'vintage',westeros:'westeros',wonderland:'wonderland',chalk:'chalk',macarons:'macarons',shine:'shine',halloween:'halloween',dark:'dark',essos:'essos',walden:'walden',infographic:'infographic',roma:'roma',purplePassion:'purplepassion'}).name('主题').listen().onChange(function () {
            renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);
        });
        datGuiPannel.add(lineDefaultDatGUiObj,'color').name('配色方案').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var lineCanvas=datGuiPannel.addFolder('画布大小');
        lineCanvas.add(lineDefaultDatGUiObj,'canvasWidth',200,1000).name('画布宽').listen().onChange(function () {
            renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);
        });
        lineCanvas.add(lineDefaultDatGUiObj,'canvasHeight',150,800).name("画布高").listen().onChange(function () {
            renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);
        });
        datGuiPannel.addColor(lineDefaultDatGUiObj,'backgroundColor').name('画布背景色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barTitle=datGuiPannel.addFolder('标题属性');
        barTitle.add(lineDefaultDatGUiObj, 'title').name('图表标题').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'subtitle').name('图表副标题').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'titleTextStyleFontSize').name('标题大小').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.addColor(lineDefaultDatGUiObj,'titleBackgroundColor').name('标题背景色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.addColor(lineDefaultDatGUiObj,'titleTextStyleColor').name('标题颜色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'titleTop').name('标题上边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barTitle.add(lineDefaultDatGUiObj,'titleLeft').name('标题左边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barGrid=datGuiPannel.addFolder("绘图区属性");
        barGrid.add(lineDefaultDatGUiObj,'gridTop').name('绘图区上边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barGrid.add(lineDefaultDatGUiObj,'gridBottom').name('绘图区下边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barGrid.add(lineDefaultDatGUiObj,"gridLeft").name('绘图区左边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barGrid.add(lineDefaultDatGUiObj,"gridRight").name('绘图区右边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barLegend=datGuiPannel.addFolder("图例属性");
        barLegend.add(lineDefaultDatGUiObj,'legend').name('图例值').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.addColor(lineDefaultDatGUiObj,'legendTextStyleColor').name('图例字体颜色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendOrient',{水平:'horizontal',垂直:'vertical'}).name('图例方向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendAlign',{左:'left',右:'right'}).name('图例朝向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendTop').name('图例上边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barLegend.add(lineDefaultDatGUiObj,'legendLeft').name('图例左边距').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barX=datGuiPannel.addFolder('x轴属性');
        barX.add(lineDefaultDatGUiObj,'xAxisData').name('x轴坐标点').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisLabelInterval',0,20).name('x轴刻度间隔').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisLabelRotate',-180,180).name('x轴字体旋转角度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisPosition',{上:'top',下:'bottom'}).name('x轴位置').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.addColor(lineDefaultDatGUiObj,'xAxisAxisLabelTextStyleColor').name('x轴字体颜色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisGridLine').name('x轴网格').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisInverse').name('x轴反向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisSplitAreaShow').name('x轴分割区域').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisLineShow').name('x轴轴线').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisTickShow').name('x轴刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisAxisLabelInside').name('x轴图内刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barX.add(lineDefaultDatGUiObj,'xAxisBoundaryGap').name('x轴左右边界').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        var barY=datGuiPannel.addFolder('y轴属性');
        barY.add(lineDefaultDatGUiObj,'yAxisData').name('y轴坐标点').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisLabelInterval',0,20).name('y轴刻度间隔').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisLabelRotate',-180,180).name('y轴字体旋转角度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisPosition',{左:'left',右:'right'}).name('y轴位置').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.addColor(lineDefaultDatGUiObj,'yAxisAxisLabelTextStyleColor').name('y轴字体颜色').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisGridLine').name('y轴网格').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisInverse').name('y轴反向').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisSplitAreaShow').name('y轴分割区域').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisLineShow').name('y轴轴线').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisTickShow').name('y轴刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        barY.add(lineDefaultDatGUiObj,'yAxisAxisLabelInside').name('y轴图内刻度').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        datGuiPannel.add(lineDefaultDatGUiObj,'tooltipAxisPointerType',{阴影:'shadow',交叉线:'cross',垂直线:'line'}).name('提示框类型').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        datGuiPannel.add(lineDefaultDatGUiObj,'smooth').name('折线是否平滑').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        datGuiPannel.add(lineDefaultDatGUiObj,'reverse').name('坐标轴是否转置').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
        datGuiPannel.add(lineDefaultDatGUiObj,'seriesAreaStyle').name('流图').onChange(function(){renderLineChart(chartId, lineDefaultCanvasData.data, lineDefaultDatGUiObj);});
    }
}
function addPieDatGui(chartId) {
    addPieDatGuiPannel(findDatGuiDataById(chartId), findCanvasDataById(chartId));
    toolTipHelper();

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
        datGuiPannel.add(pieDefaultDatGUiObj,'theme',{vintage:'vintage',westeros:'westeros',wonderland:'wonderland',chalk:'chalk',macarons:'macarons',shine:'shine',halloween:'halloween',dark:'dark',essos:'essos',walden:'walden',infographic:'infographic',roma:'roma',purplePassion:'purplepassion'}).name('主题').listen().onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        datGuiPannel.add(pieDefaultDatGUiObj,'color').name('配色方案').listen().onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieCanvas = datGuiPannel.addFolder('画布大小');
        pieCanvas.add(pieDefaultDatGUiObj, 'canvasWidth', 200, 1000).name('画布宽').listen().onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieCanvas.add(pieDefaultDatGUiObj, 'canvasHeight', 150, 800).name("画布高").listen().onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        datGuiPannel.addColor(pieDefaultDatGUiObj, 'backgroundColor').name('画布背景色').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieTitle = datGuiPannel.addFolder('标题属性');
        pieTitle.add(pieDefaultDatGUiObj, 'title').name('图表标题').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'subtitle').name('图表副标题').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'titleTextStyleFontSize').name('标题大小').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.addColor(pieDefaultDatGUiObj, 'titleBackgroundColor').name('标题背景色').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.addColor(pieDefaultDatGUiObj, 'titleTextStyleColor').name('标题颜色').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'titleTop').name('标题上边距').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieTitle.add(pieDefaultDatGUiObj, 'titleLeft').name('标题左边距').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieGrid = datGuiPannel.addFolder("绘图区属性");
        pieGrid.add(pieDefaultDatGUiObj, 'seriesCenterTop', 0, 100).name("圆心上边距").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        pieGrid.add(pieDefaultDatGUiObj, 'seriesCenterLeft', 0, 100).name("圆心左边距").onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
        var pieLegend = datGuiPannel.addFolder("图例属性");
        pieLegend.addColor(pieDefaultDatGUiObj, 'legendTextStyleColor').name('图例字体颜色').onChange(function () {
            renderPieChart(chartId, pieDefaultCanvasData.data, pieDefaultDatGUiObj);
        });
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
    toolTipHelper();

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
        datGuiPannel.add(radarDefaultDatGUiObj,'theme',{vintage:'vintage',westeros:'westeros',wonderland:'wonderland',chalk:'chalk',macarons:'macarons',shine:'shine',halloween:'halloween',dark:'dark',essos:'essos',walden:'walden',infographic:'infographic',roma:'roma',purplePassion:'purplepassion'}).name('主题').listen().onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        var radarCanvas = datGuiPannel.addFolder('画布大小');
        radarCanvas.add(radarDefaultDatGUiObj, 'canvasWidth', 200, 1000).name('画布宽').listen().onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarCanvas.add(radarDefaultDatGUiObj, 'canvasHeight', 150, 800).name("画布高").listen().onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });

        datGuiPannel.addColor(radarDefaultDatGUiObj, 'backgroundColor').name('画布背景色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        var radarTitle = datGuiPannel.addFolder('标题属性');
        radarTitle.add(radarDefaultDatGUiObj, 'title').name('图表标题').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'subtitle').name('图表副标题').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'titleTextStyleFontSize').name('标题大小').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.addColor(radarDefaultDatGUiObj, 'titleBackgroundColor').name('标题背景色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.addColor(radarDefaultDatGUiObj, 'titleTextStyleColor').name('标题颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'titleTop').name('标题上边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarTitle.add(radarDefaultDatGUiObj, 'titleLeft').name('标题左边距').onChange(function () {
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
        radarRadar.add(radarDefaultDatGUiObj, 'tooltipShow').name('提示框').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarIndicator').name('坐标轴文本').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarCenterTop',0,100).name('图心上边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarCenterLeft',0,100).name('图心左边距').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarRadius').name('雷达图半径').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarStartAngle', 0, 360).name('雷达图旋转角度').onChange(function () {
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
        radarRadar.addColor(radarDefaultDatGUiObj, 'radarNameTextStyleColor').name('雷达图字体颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarNameTextStyleFontSize', 1, 30).name('雷达图字体大小').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarAxisLineShow').name('雷达图坐标线').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarSplitLineShow').name('雷达图分隔线').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.addColor(radarDefaultDatGUiObj, 'radarAxisLineLineStyle').name('雷达图坐标线颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.addColor(radarDefaultDatGUiObj, 'radarSplitLineLineStyle').name('雷达图分割线颜色').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarRadar.add(radarDefaultDatGUiObj, 'radarAxisLineShow').name('雷达图坐标线').onChange(function () {
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
        }).name('雷达图标记点').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesSymbolSize', 0, 20).name('雷达图标记点大小').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalShow').name('show?').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalWidth', 0, 5).name('雷达图线宽度').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalType', {
            实线: 'solid',
            虚线: 'dashed',
            点阵: 'dotted'
        }).name('雷达图线段类型').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
        radarSeries.add(radarDefaultDatGUiObj, 'seriesLineStyleNormalOpacity', 0, 1).name('雷达图线段透明度').onChange(function () {
            renderRadarChart(chartId, radarDefaultCanvasData.data, radarDefaultDatGUiObj);
        });
    }
}
function addCalendarDatGui(chartId) {
    addCalendarDatGuiPannel(findDatGuiDataById(chartId), findCanvasDataById(chartId));
    toolTipHelper();

    function addCalendarDatGuiPannel(CalendarDefaultDatGUiObj, CalendarDefaultCanvasData) {
        /*
         移除之前的dat.gui
         */
        // datGuiPannel.destroy();
        $('#tabConfig').children().remove();

        datGuiPannel = new dat.GUI({autoPlace: false});
        //添加柱状图至控制面板
        var customContainer = document.getElementById('tabConfig');
        customContainer.appendChild(datGuiPannel.domElement);

        renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        //添加事件监听
        datGuiPannel.add(CalendarDefaultDatGUiObj,'theme',{vintage:'vintage',westeros:'westeros',wonderland:'wonderland',chalk:'chalk',macarons:'macarons',shine:'shine',halloween:'halloween',dark:'dark',essos:'essos',walden:'walden',infographic:'infographic',roma:'roma',purplePassion:'purplepassion'}).name('主题').listen().onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        var calendarCanvas = datGuiPannel.addFolder('画布大小');
        calendarCanvas.add(CalendarDefaultDatGUiObj, 'canvasWidth', 200, 1000).name('画布宽').listen().onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCanvas.add(CalendarDefaultDatGUiObj, 'canvasHeight', 150, 800).name("画布高").listen().onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });

        datGuiPannel.addColor(CalendarDefaultDatGUiObj,'backgroundColor').name('画布背景色').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        var calendarTitle=datGuiPannel.addFolder('标题属性');
        calendarTitle.add(CalendarDefaultDatGUiObj, 'title').name('图表标题').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarTitle.add(CalendarDefaultDatGUiObj,'subtitle').name('图标副标题').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarTitle.add(CalendarDefaultDatGUiObj,'titleTextStyleFontSize').name('标题大小').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarTitle.addColor(CalendarDefaultDatGUiObj,'titleBackgroundColor').name('标题背景色').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarTitle.addColor(CalendarDefaultDatGUiObj,'titleTextStyleColor').name('标题颜色').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarTitle.add(CalendarDefaultDatGUiObj,'titleTop').name('标题上边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarTitle.add(CalendarDefaultDatGUiObj,'titleLeft').name('标题左边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        var calendarVisualMap=datGuiPannel.addFolder("图示区属性");
        calendarVisualMap.add(CalendarDefaultDatGUiObj,'visualShow').name('映射显示').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarVisualMap.add(CalendarDefaultDatGUiObj,'visualMapOrient',{水平:'horizontal',垂直:'vertical'}).name('映射图示朝向').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarVisualMap.add(CalendarDefaultDatGUiObj,'visualMapMin').name('映射最小值').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarVisualMap.addColor(CalendarDefaultDatGUiObj,'visualMapColorStart').name('映射颜色起始').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarVisualMap.add(CalendarDefaultDatGUiObj,'visualMapMax').name('映射最大值').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarVisualMap.addColor(CalendarDefaultDatGUiObj,'visualMapColorEnd').name('映射颜色终止').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarVisualMap.add(CalendarDefaultDatGUiObj,'visualMapTop').name('映射上边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarVisualMap.add(CalendarDefaultDatGUiObj,'visualMapLeft').name('映射左边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });

        var calendarCalendar=datGuiPannel.addFolder("日历图属性");
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarTop').name('日历图上边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarLeft').name('日历图左边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarOrient',{水平:'horizontal',垂直:'vertical'}).name('日历图朝向').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarRangeStart').name('日历图起始日期').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarRangeEnd').name('日历图终止日期').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarYearLabelMargin').name('日历图年份边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarMonthLabelMargin').name('日历图月份边距').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarDayLabelFirstDay',{星期天:0,星期一:1,星期二:2,星期三:3,星期四:4,星期五:5,星期六:6}).name('一周起始日期').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarCellSizeWidth',5,40).name('日历图Cell宽度').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarCalendar.add(CalendarDefaultDatGUiObj,'calendarCellSizeHeight',5,40).name('日历图Cell高度').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        var calendarSeries=datGuiPannel.addFolder("日历图填充属性");
        calendarSeries.add(CalendarDefaultDatGUiObj,'seriesType',{填充:'heatmap',散点:'scatter'}).name('日历图展现形式').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarSeries.add(CalendarDefaultDatGUiObj,'seriesLabelNormalShow').name('日历图标签').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarSeries.addColor(CalendarDefaultDatGUiObj,'seriesLabelNormalTextStyleColor').name('散点字体颜色').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarSeries.add(CalendarDefaultDatGUiObj,'seriesLabelNormalTextStyleFontsize',2,20).name('散点字体大小').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
        calendarSeries.add(CalendarDefaultDatGUiObj,'seriesSymbolSize').name('散点填充系数').onChange(function () {
            renderCalendarChart(chartId, CalendarDefaultCanvasData.data, CalendarDefaultDatGUiObj);
        });
    }
}
function addWordCloudDatGui(chartId) {
    addWordCloudDatGuiPannel(findDatGuiDataById(chartId), findCanvasDataById(chartId));
    toolTipHelper();

    function addWordCloudDatGuiPannel(WordCloudDefaultDatGUiObj, WordCloudDefaultCanvasData) {
        /*
         移除之前的dat.gui
         */
        // datGuiPannel.destroy();
        $('#tabConfig').children().remove();

        datGuiPannel = new dat.GUI({autoPlace: false});
        //添加柱状图至控制面板
        var customContainer = document.getElementById('tabConfig');
        customContainer.appendChild(datGuiPannel.domElement);

        renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data,WordCloudDefaultDatGUiObj);
        //添加事件监听
        datGuiPannel.add(WordCloudDefaultDatGUiObj,'theme',{vintage:'vintage',westeros:'westeros',wonderland:'wonderland',chalk:'chalk',macarons:'macarons',shine:'shine',halloween:'halloween',dark:'dark',essos:'essos',walden:'walden',infographic:'infographic',roma:'roma',purplePassion:'purplepassion'}).name('主题').listen().onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        var wordCloudCanvas = datGuiPannel.addFolder('画布大小');
        wordCloudCanvas.add(WordCloudDefaultDatGUiObj, 'canvasWidth', 200, 1000).name('画布宽').listen().onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudCanvas.add(WordCloudDefaultDatGUiObj, 'canvasHeight', 150, 800).name("画布高").listen().onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        datGuiPannel.addColor(WordCloudDefaultDatGUiObj,'backgroundColor').name('画布背景色').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        var wordCloudTitle=datGuiPannel.addFolder('标题属性');
        wordCloudTitle.add(WordCloudDefaultDatGUiObj, 'title').name('图表标题').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudTitle.add(WordCloudDefaultDatGUiObj,'subtitle').name('图表副标题').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudTitle.add(WordCloudDefaultDatGUiObj,'titleTextStyleFontSize').name('标题大小').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudTitle.addColor(WordCloudDefaultDatGUiObj,'titleBackgroundColor').name('标题背景色').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudTitle.addColor(WordCloudDefaultDatGUiObj,'titleTextStyleColor').name('标题颜色').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudTitle.add(WordCloudDefaultDatGUiObj,'titleTop').name('标题上边距').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudTitle.add(WordCloudDefaultDatGUiObj,'titleLeft').name('标题左边距').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        var wordCloudGrid=datGuiPannel.addFolder("绘图区属性");
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesName').name('名称').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesSizeMin',0,100).name('最小大小(%)').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesSizeMax',0,100).name('最大大小(%)').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesSizeRangeMin',1,50).name('最小字体').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesSizeRangeMax',10,150).name('最大字体').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesTextRotation').name('字体朝向(0,45,90)').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesRotationRangeMin',-180,180).name('最小旋转角度').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesRotationRangeMax',-180,180).name('最大旋转角度').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        wordCloudGrid.add(WordCloudDefaultDatGUiObj,'seriesShape').name('形状').onChange(function () {
            renderWordCloudChart(chartId, WordCloudDefaultCanvasData.data, WordCloudDefaultDatGUiObj);
        });
        // wordCloudGrid.add(WordCloudDefaultDatGUiObj,'imgButton').name('词云图');

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
//根据id查找option
function findOptionById(chartId) {
    for(var object1 in hescList){
        if(hescList[object1].divId==chartId){
            return hescList[object1].option;
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


//-----------------------------------------------------------------------------------------------
/*
样式更新
 */
function removeDivFun() {
    console.log("准备移除的divchartid为："+divChartId)
    if($('#'+divChartId).attr('class').indexOf('Monitor')>=0) {
        $('#' + divChartId).remove();
        //移除div后，控制面板跳转到screen的控制面板
        addScreenDatGui();
    }
}
function downloadOptionFun() {
    console.log(findOptionById(divChartId));
    $('#downloadOptionModal textarea').val((formatJson(JSON.stringify(findOptionById(divChartId)))).replace(/"([a-zA-Z0-9]*?)":/g,'$1:').replace(/(rgba\(\d*,)\s*(\d*,)\s*(\d*,)\s*([0-9\.]*\)\")/g,'$1$2$3$4'));
    $("#downloadOptionModal").modal({
//            remote:"test/test.jsp";//可以填写一个url，会调用jquery load方法加载数据
//        backdrop:"static",//指定一个静态背景，当用户点击背景处，modal界面不会消失
        keyboard:true//当按下esc键时，modal框消失
    });
}
//格式化json
var formatJson = function(json, options) {
    var reg = null,
        formatted = '',
        pad = 0,
        PADDING = '    '; // one can also use '\t' or a different number of spaces

    // optional settings
    options = options || {};
    // remove newline where '{' or '[' follows ':'
    options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
    // use a space after a colon
    options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;

    // begin formatting...
    if (typeof json !== 'string') {
        // make sure we start with the JSON as a string
        json = JSON.stringify(json);
    } else {
        // is already a string, so parse and re-stringify in order to remove extra whitespace
        json = JSON.parse(json);
        json = JSON.stringify(json);
    }

    // add newline before and after curly braces
    reg = /([\{\}])/g;
    json = json.replace(reg, '\r\n$1\r\n');

    // add newline before and after square brackets
    reg = /([\[\]])/g;
    json = json.replace(reg, '\r\n$1\r\n');

    // add newline after comma
    reg = /(\,)/g;
    json = json.replace(reg, '$1\r\n');

    // remove multiple newlines
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, '\r\n');

    // remove newlines before commas
    reg = /\r\n\,/g;
    json = json.replace(reg, ',');

    // optional formatting...
    if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
        reg = /\:\r\n\{/g;
        json = json.replace(reg, ':{');
        reg = /\:\r\n\[/g;
        json = json.replace(reg, ':[');
    }
    if (options.spaceAfterColon) {
        reg = /\:/g;
        json = json.replace(reg, ': ');
    }

    $.each(json.split('\r\n'), function(index, node) {
        var i = 0,
            indent = 0,
            padding = '';

        if (node.match(/\{$/) || node.match(/\[$/)) {
            indent = 1;
        } else if (node.match(/\}/) || node.match(/\]/)) {
            if (pad !== 0) {
                pad -= 1;
            }
        } else {
            indent = 0;
        }

        for (i = 0; i < pad; i++) {
            padding += PADDING;
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
};

//resize不粘手的问题
function resizeFix(event, ui) {
    var changeWidth = ui.size.width - ui.originalSize.width; // find change in width
    var newWidth = ui.originalSize.width + changeWidth / transformScale; // adjust new width by our zoomScale

    var changeHeight = ui.size.height - ui.originalSize.height; // find change in height
    var newHeight = ui.originalSize.height + changeHeight / transformScale; // adjust new height by our zoomScale

    ui.size.width = newWidth;
    ui.size.height = newHeight;
}
/*
刷新screen的transform的scale系数
 */
function refreshTransformScale(){
    var screenGap=30;
    var screenContainerHeight=$(window).height()-60;
    var sceenContainerWidth=$(window).width()-315;
    //缩放系数
    console.log($('#screen').height())
    transformScale=(((screenContainerHeight-screenGap)/$('#screen').height())<((sceenContainerWidth-screenGap)/$('#screen').width()))?((screenContainerHeight-screenGap)/$('#screen').height()):((sceenContainerWidth-screenGap)/$('#screen').width());
    //设置screenContainer
    $('#screenContainer').css('height',screenContainerHeight);
    $('#screenContainer').css('width',sceenContainerWidth);
    $('#screenContainer').css('left','315px');
    $('#screenContainer').css('top','60px');
    //设置
    $('#screen').css('top',(screenContainerHeight-$('#screen').height()*transformScale)/2);
    $('#screen').css('left',(sceenContainerWidth-$('#screen').width()*transformScale)/2);
    $('#screen').css('transform','scale('+transformScale+')');
    $('#screen').css('transform-origin','left top');
    console.log(transformScale);
}
/*
添加图形控制面板每个参数的tooltip
 */
function toolTipHelper() {
    $('.dg .property-name').each(function () {
        $(this).append('&nbsp;<span class="datGuiTooltip" data-tooltip-content="#tooltip_content"><img  src="../css/img/信息.png"   style="height: 12px;width: 12px;cursor:help"><div class="tooltip_templates"> <span id="tooltip_content"></span></div></span>  ');
    });
    $('.datGuiTooltip').tooltipster({
        animation: 'swing',
        // animationDuration:[200,200],
        contentAsHTML:true,
        maxWidth:400
    });
    //阻止点击帮助按钮时，时间冒泡
    $('.datGuiTooltip').each(function () {
        $(this).click(function (e) {
            e.stopPropagation();
        });
        $(this).mouseover(function (e) {
            $('.datGuiTooltip').tooltipster('content', hescToolTipHelp.text($(this).parent().text()));
        });
        $(this).mouseout(function (e) {
            $('.datGuiTooltip').tooltipster('content', '');
        });
    });
}

//保存screen配置
function saveScreenConfig(){
    var gridConfig=[];
    //添加screen的配置
    gridConfig.push({
       divId:'screen',
        style:$('#screen').attr('style')
    });
    //添加screen的子元素(DivId)
    $("#screen").children().each(function () {
        gridConfig.push({
            divId:$(this).attr('id'),
            style:$(this).attr("style")
        })
    });
    var userName='admin';
    var screenName='test';
    console.log('加密之后值'+(hashids.encode(userName,screenName)))
    $.post('http://192.168.71.179:8080/webapiproxy/ajax/screen/add/config',{userName:userName,screenName:screenName,gridConfig:JSON.stringify(gridConfig),hescList:JSON.stringify(hescList),hashUrl:hashids.encodeHex(userName+screenName)},function (d) {
        console.log(d);
    })

    console.log(gridConfig);
    console.log(hescList);
}