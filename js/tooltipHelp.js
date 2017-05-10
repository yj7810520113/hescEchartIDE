/**
 * Created by WebStorm
 * User:maomao,http://www.mmcode.top
 * Date:2017/5/9
 * Time:8:22
 **/
hescToolTipHelp=(function () {
    var toolTipHelp={
        /*
        常规属性
         */
        screenHeightHelp:'整个画布的高度，即为右边蓝色区域的大小<br/><b>PS:右边蓝色的区域为根据画布大小和用户屏幕显示区域等比例放缩，为下一版本大屏预览预留功能</b><br/><b>目前支持范围为720p-4K</b>',
        screenWidthHelp:'整个画布的宽度，即为右边蓝色区域的大小<br/><b>PS:右边蓝色的区域为根据画布大小和用户屏幕显示区域等比例放缩，为下一版本大屏预览预留功能</b><br/><b>目前支持范围为720p-4K</b>',
        screenBackgroundHelp:'整个画布的背景色',
        themeHelp:'图表的主题，内置多重配色',
        colorHelp:'留空采用主题的配色方案，用户可以修改配色方案，每个颜色之间用逗号隔开，支持hsl<br/><b>例如：#123456,#111111,#533fef</b><p style="color: red">建议，自定义的配色方案个数=图例的个数</p><p style="color: red;font-weight: bold">注意：不支持rgb和rgba</p><p style="color: red;font-weight: bold">注意：修改配色方案会覆盖主题配色！！！</p>',
        canvasHeightHelp:'绘图区高度，用于调整绘图区大小',
        canvasWidthHelp:'绘图区宽度，用于调整绘图区大小',
        backgroundColorHelp:'绘图区的背景色，默认为白色，透明度为0',
        titleHelp:'图表的标题',
        subTitleHelp:'图表的副标题',
        titleTextStyleFontSizeHelp:'标题字体大小',
        titleTextStyleColorHelp:'标题字体颜色',
        titleBackgroundColorHelp:'标题的背景色，默认为白色，透明度为0，建议不修改',
        titleTopHelp:'标题上边距，为标题到图表上边框的距离，若不显示标题，将上边距设置为较大负值即可',
        titleLeftHelp:'标题左边距，为标题到图表左边框的距离，若不显示标题，将左边距设置为较大负值即可',
        /*
        柱状图属性
         */
        gridTopHelp:'图表到绘图区上边框的距离，单位为px',
        gridLeftHelp:'图表到绘图区左边框的距离，单位为px',
        gridRightHelp:'图表到绘图区右边框的距离，单位为px',
        gridBootomHelp:'图表到绘图区下边框的距离，单位为px',
        toolTipAxisPointerType:'鼠标移动到图表上，提示信息和坐标轴交点的展示形式',
        legendAttrHelp:'图表的图例，为数据的种类，默认为：默认值0、默认值1...默认值n，用户可以修改图例值，每个图例值之间用逗号隔开<br/><b>例如:图例1，图例2，图例3</b>',
        legendOrientnHelp:'图例的对齐方式，有水平排列和垂直排列',
        legendAlignHelp:'图例文本相对于图例小矩形的位置，有文本在图例小矩形左边和文本在图例小矩形右边',
        legendTopHelp:'图例到绘图区上边框的距离，单位px',
        legendLeftHelp:'图例到绘图区左边的距离，单位px',
        legendTextStyleColorHelp:'图例字体的颜色',
        xAxisDataHelp:'x轴坐标刻度的值，默认读取数据的x轴值作为x轴坐标刻度，用户可以修改坐标刻度值，每个坐标刻度值之间用逗号隔开</br><b>例如：x1,x2,x3</b><br/><b>建议设置的总个数等于数据的长度</b>',
        xAxisPositionHelp:'x轴的位置，在图表下方，或者是在图表上方',
        xAxisGridLineAttrHelp:'是否显示x轴网格，网格即为垂直于x轴刻度的直线',
        xAxisInverseHelp:'x轴是否翻转，即从0-N转换成N-0',
        xAxisSplitAreaShowHelp:'是否显示x轴分割区域，分割区域即为x轴每个刻度之间填充的差异',
        xAxisLineShowHelp:'是否显示x轴坐标轴',
        xAxisAxisLabelInsideHelp:'x轴坐标文本相对于x轴的位置，默认为x轴下方，勾选即为x轴上方（可能会产生遮盖）,',
        xAxisAxisLabelTextStyleColorHelp:'x轴坐标文本的颜色，默认为白色',
        xAxisAxisLabelIntervalHelp:'坐标轴刻度标签的显示间隔，在类目轴中有效。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。',
        xAxisAxisLabelRotateHelp:'刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠',
        xAxisAxisTickShowHelp:'是否在x轴上显示坐标刻度点',
        xAxisBoundaryGapHelp:'是否在x轴坐标左右留空，默认建议留空<br/><b>若选择坐标轴转置，建议勾选该选项</b>',        xAxisDataHelp:'x轴坐标刻度的值，默认读取数据的x轴值作为x轴坐标刻度，用户可以修改坐标刻度值，每个坐标刻度值之间用逗号隔开</br><b>例如：x1,x2,x3</b><br/><b>建议设置的总个数等于数据的长度</b>',
        yAxisPositionHelp:'y轴的位置，在图表左方，或者是在图表右方',
        yAxisGridLineAttrHelp:'是否显示y轴网格，网格即为垂直于y轴刻度的直线',
        yAxisInverseHelp:'y轴是否翻转，即从0-N转换成N-0',
        yAxisSplitAreaShowHelp:'是否显示y轴分割区域，分割区域即为y轴每个刻度之间填充的差异',
        yAxisLineShowHelp:'是否显示y轴坐标轴',
        yAxisAxisLabelInsideHelp:'y轴坐标文本相对于y轴的位置，默认为y轴下方，勾选即为y轴上方（可能会产生遮盖）,',
        yAxisAxisLabelTeytStyleColorHelp:'y轴坐标文本的颜色，默认为白色',
        yAxisAxisLabelIntervalHelp:'坐标轴刻度标签的显示间隔，在类目轴中有效。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。',
        yAxisAxisLabelRotateHelp:'刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠',
        yAxisAxisTickShowHelp:'是否在y轴上显示坐标刻度点',
        reverseHelp:'是否转置坐标轴，即为x，y轴互换<p style="color:red">建议，勾选转置坐标轴的同时，勾选 x轴属性->x轴左右边界</p>',
        stackAttrHelp:'用于区分堆叠柱状图，留空即为柱状图的维度=数据种类，用户可以修改柱状图的堆叠情况，每个值之间用逗号隔开,每个值代表每一个图例所属的类型<br/><p style="color: red;"><b>现在图例为：图例1，图例2，图例3，图例4<br/>1. 堆叠柱状图设置为：类型1，类型1，类型2，类型2。表示图例1和图例2属于类型1，图例3和图例4属于类型2，所以画出来的堆叠柱状图维度为2，第一个维度有2个叠加层（图例1，图例2），第二个维度有2个叠加层（图例3，图例4）<br><b>2. 再例如，堆叠柱状图设置为：类型1，类型1，类型1，类型2。表示图例1、图例2和图例3属于类型1，图例4属于类型2，所以画出来的堆叠柱状图维度为2，第1个维度有3个叠加层（图例1，图例2，图例3），第二个为只有一个叠加层（图例4）</b></p>',
        /*
        柱状图属性
         */
        seriesBarGapHelp:'柱间距离，单位 %（如 30%，表示柱子宽度的 30%）。如果想要两个系列的柱子重叠，可以设置 barGap 为 -100%。这在用柱子做背景的时候有用',
        seriesBarWidthHelp:'柱条的宽度，宽度为相对于类目宽度的百分比',
        /*
        折线图属性
         */
        seriesAreaStyleHelp:'是否为面积图，面积图即为堆叠的折线图<br/><b>建议：勾选流图同时勾选 x轴属性->x轴左右边界</b>',
        smoothHelp:'是否平滑曲线显示',
        /*
        饼图属性
         */
        seriesRadiusOutterHelp:'饼图外半径，相对于整个绘图区而言，单位 %',
        seriesRadiusInnerHelp:'饼图内半径，相对于整个绘图区而言，单位 %',
        seriesRoseTypeHelp:'是否为玫瑰图<br/>否为普通饼图<br/>区域为区域玫瑰图，区域玫瑰图用半径大小区分数据大小<br/>角度为角度玫瑰图，角度玫瑰图用半径大小和角度大小区分数据大小',
        seriesCenterTopHelp:'圆心到绘图区上边距的距离，单位 %',
        seriesCenterLeftHelp:'圆心到绘图区左边距的距离，单位 %',

        /*
        雷达图
         */
        radarIndicatorsHelp:'雷达图各个顶点的文本，默认会从数据源的key值获取，用户可以修改雷达图顶点的文本，每个值之间用逗号隔开<br/><b>例如：推塔，KDA，输出，承受伤害，胜率</b>',
        radarCenterTopHelp:'雷达图中心到绘图区上边框的距离，单位 %',
        radarCenterLeftHelp:'雷达图中心到绘图区左边框的距离，单位 %',
        radarRadiusHelp:'雷达图半径大小，单位 px',
        radarStartAngelHelp:'雷达图旋转角度，旋转绕图心逆时针旋转',
        radarSplitNumberHelp:'雷达图横向的网格数量，该网格为平行于雷达图边框的网格',
        radarShapeHelp:'雷达图外观，支持圆形和多边形',
        radarNameTextStyleColorHelp:'雷达图各个顶点文本的颜色',
        radarNameTextStyleFontSizeHelp:'雷达图各个顶点文本的字体大小',
        radarAxisLineShowHelp:'雷达图网格线是否显示',
        radarAxisLineLineStyleHelp:'雷达图网格线颜色',
        radarSplitLineShowHelp:'雷达图分割线是否显示，分割线雷达图顶点到图心的连线',
        radarSplitLineLineStyleHelp:'雷达图分割线颜色',
        seriesSymbolHelp:'雷达图顶点图形形状，支持圆、矩形、三角形、箭头',
        seriesSymbolSizeHelp:'雷达图顶点图形大小，单位 px',
        seriesLineStyleNormalShowHelp:'雷达图线段宽度，单位 px',
        seriesLineStyleNormalTypeHelp:'雷达图线段类型，支持 实线、虚线和点阵',
        seriesLineStyleNormalOpacityHelp:'雷达图线段透明度，<br/><b>建议 雷达图连线较多时，更改透明度</b>',

        /*
        日历热图属性
         */
        visualShowHelp:'是否显示映射图例，映射图例即为日历热图上方连续的矩形区域',
        visualMapMinHelp:'映射最小值，默认为0.建议设置为数据源value值的最小值',
        visualMapMaxHelp:'映射最大值，默认为200，建议设置为数据源value值的最大值',
        visualMapOrientHelp:'映射图例的朝向，可以设置为水平或者垂直',
        visualMapLeftHelp:'映射图例的左边距',
        visualMapTopHelp:'映射图例的上边距',
        visualMapColorStartHelp:'数据最小值的颜色，对应映射最小值，用户可以用过设置最小值和最大值颜色，系统会自动对两种颜色进行差值',
        visualMapColorEndHelp:'数据最大值的颜色，对应映射最大值，用户可以用过设置最小值和最大值颜色，系统会自动对两种颜色进行差值',
        calendarTopHelp:'日历图相对于绘图区上边框的距离，单位 px',
        calendarLeftHelp:'日历图相对于绘图区左边框的距离，单位 px',
        calendarOrientHelp:'日历图的朝向，可以选择水平或者垂直',
        calendarRangeStartHelp:'日历图起始日期，对应数据key值的起始日期，格式设置为 yyyy-mm-dd<br><b>例如：2017-01-01</b>',
        calendarRangeEndHelp:'日历图终止日期，对应数据key值的终止日期，格式设置为 yyyy-mm-dd<br><b>例如：2017-01-01</b>',
        calendarYearLabelMarginHelp:'年份标签相对于边框的距离，单位 px',
        calendarMonthLabelNameMapHelp:'月份标签相对于边框的距离，单位 px',
        calendarDayLabelFirstDayHelp:'一周起始日期',
        calendarCellSizeWidthHelp:'日历图每个小矩形的宽度',
        calendarCellSizeHeightHelp:'日历图每个小矩形的高度',
        seriesTypeHelp:'日历图填充的形式有小矩形颜色填充和散点两种<br/>',
        seriesLabelNormalShowHelp:'是否显示日历热图每个小矩形的文本<p style="color: red;font-weight: bold;">注意，只有当填充形式选择散点时才可以显示小矩形文本</p>',
        seriesLabelNormalTextStyleColorHelp:'日历热图每个小矩形文本的颜色<p style="color: red;font-weight: bold;">注意，只有当填充形式选择散点时且勾选日历热图标签，才可以显示字体颜色</p>',
        seriesLabelNormalTextStyleFontsizeHelp:'日历热图每个小矩形文本的字体大小<p style="color: red;font-weight: bold;">注意，只有当填充形式选择散点时且勾选日历热图标签，才可以显示字体大小</p>',
        seriesSymbolSizeHelp:'日历热图的填充系数用于计算散点的半径，计算公式为：散点半径=数据/填充系数<p style="color: red;font-weight: bold;">注意，只有当填充形式选择散点时，才可以通过填充系数计算散点半径</p>',
    }


    var selectToolTopHelp=function (divText) {
        if(divText.trim()=='主题'){
            return toolTipHelp.themeHelp;
        }
        else if(divText.trim()=='配色方案'){
            return toolTipHelp.colorHelp;
        }
        else if(divText.trim()=='屏幕高'){
            return toolTipHelp.screenHeightHelp;
        }
        else if(divText.trim()=='屏幕宽'){
            return toolTipHelp.screenWidthHelp;
        }
        else if(divText.trim()=='幕布背景色'){
            return toolTipHelp.screenBackgroundHelp;
        }
        else if(divText.trim()=='画布宽'){
            return toolTipHelp.canvasWidthHelp;
        }
        else if(divText.trim()=='画布高'){
            return toolTipHelp.canvasHeightHelp;
        }
        else if(divText.trim()=='画布背景色'){
            return toolTipHelp.backgroundColorHelp;
        }
        else if(divText.trim()=='图表标题'){
            return toolTipHelp.titleHelp;
        }
        else if(divText.trim()=='图表副标题'){
            return toolTipHelp.subTitleHelp;
        }
        else if(divText.trim()=='标题大小'){
            return toolTipHelp.titleTextStyleFontSizeHelp;
        }
        else if(divText.trim()=='标题颜色'){
            return toolTipHelp.titleTextStyleColorHelp;
        }
        else if(divText.trim()=='标题背景色'){
            return toolTipHelp.titleBackgroundColorHelp;
        }
        else if(divText.trim()=='标题上边距'){
            return toolTipHelp.titleTopHelp;
        }
        else if(divText.trim()=='标题左边距'){
            return toolTipHelp.titleLeftHelp;
        }
        else if(divText.trim()=='绘图区上边距'){
            return toolTipHelp.gridTopHelp;
        }
        else if(divText.trim()=='绘图区下边距'){
            return toolTipHelp.gridBootomHelp;
        }
        else if(divText.trim()=='绘图区左边距'){
            return toolTipHelp.gridLeftHelp;
        }
        else if(divText.trim()=='绘图区右边距'){
            return toolTipHelp.gridRightHelp;
        }
        else if(divText.trim()=='提示框类型'){
            return toolTipHelp.toolTipAxisPointerType;
        }
        else if(divText.trim()=='图例值'){
            return toolTipHelp.legendAttrHelp;
        }
        else if(divText.trim()=='图例方向'){
            return toolTipHelp.legendAlignHelp;
        }
        else if(divText.trim()=='图例朝向'){
            return toolTipHelp.legendOrientnHelp;
        }
        else if(divText.trim()=='图例上边距'){
            return toolTipHelp.legendTopHelp;
        }
        else if(divText.trim()=='图例左边距'){
            return toolTipHelp.legendLeftHelp;
        }
        else if(divText.trim()=='图例字体颜色'){
            return toolTipHelp.legendTextStyleColorHelp;
        }
        else if(divText.trim()=='x轴坐标点'){
            return toolTipHelp.xAxisDataHelp;
        }
        else if(divText.trim()=='x轴位置'){
            return toolTipHelp.xAxisPositionHelp;
        }
        else if(divText.trim()=='x轴字体颜色'){
            return toolTipHelp.xAxisAxisLabelTextStyleColorHelp;
        }
        else if(divText.trim()=='x轴刻度间隔'){
            return toolTipHelp.xAxisAxisLabelIntervalHelp;
        }
        else if(divText.trim()=='x轴字体旋转角度'){
            return toolTipHelp.xAxisAxisLabelRotateHelp;
        }
        else if(divText.trim()=='x轴网格'){
            return toolTipHelp.xAxisGridLineAttrHelp;
        }
        else if(divText.trim()=='x轴反向'){
            return toolTipHelp.xAxisInverseHelp;
        }
        else if(divText.trim()=='x轴分割区域'){
            return toolTipHelp.xAxisSplitAreaShowHelp;
        }
        else if(divText.trim()=='x轴轴线'){
            return toolTipHelp.xAxisLineShowHelp;
        }
        else if(divText.trim()=='x轴刻度'){
            return toolTipHelp.xAxisAxisTickShowHelp;
        }
        else if(divText.trim()=='x轴图内刻度'){
            return toolTipHelp.xAxisAxisLabelInsideHelp;
        }
        else if(divText.trim()=='x轴左右边界'){
            return toolTipHelp.xAxisBoundaryGapHelp;
        }

        else if(divText.trim()=='y轴坐标点'){
            return toolTipHelp.yAxisDataHelp;
        }
        else if(divText.trim()=='y轴位置'){
            return toolTipHelp.yAxisPositionHelp;
        }
        else if(divText.trim()=='y轴字体颜色'){
            return toolTipHelp.yAxisAxisLabelTeytStyleColorHelp;
        }
        else if(divText.trim()=='y轴网格'){
            return toolTipHelp.yAxisGridLineAttrHelp;
        }
        else if(divText.trim()=='y轴反向'){
            return toolTipHelp.yAxisInverseHelp;
        }
        else if(divText.trim()=='y轴分割区域'){
            return toolTipHelp.yAxisSplitAreaShowHelp;
        }
        else if(divText.trim()=='y轴轴线'){
            return toolTipHelp.yAxisLineShowHelp;
        }
        else if(divText.trim()=='y轴刻度'){
            return toolTipHelp.yAxisAxisTickShowHelp;
        }
        else if(divText.trim()=='y轴图内刻度'){
            return toolTipHelp.yAxisAxisLabelInsideHelp;
        }
        else if(divText.trim()=='y轴刻度间隔'){
            return toolTipHelp.yAxisAxisLabelIntervalHelp;
        }
        else if(divText.trim()=='y轴字体旋转角度'){
            return toolTipHelp.yAxisAxisLabelRotateHelp;
        }
        else if(divText.trim()=='y轴左右边界'){
            return toolTipHelp.yAxisBoundaryGapHelp;
        }
        else if(divText.trim()=='坐标轴是否转置'){
            return toolTipHelp.reverseHelp;
        }
        else if(divText.trim()=='堆叠柱状图'){
            return toolTipHelp.stackAttrHelp;
        }
        /*
        柱状图
         */
        else if(divText.trim()=='柱状图间隔'){
            return toolTipHelp.seriesBarGapHelp;
        }
        else if(divText.trim()=='柱状图宽度'){
            return toolTipHelp.seriesBarWidthHelp;
        }
        /*
        折线图
         */
        else if(divText.trim()=='流图'){
            return toolTipHelp.seriesAreaStyleHelp;
        }
        else  if(divText.trim=='折线是否平滑'){
            return toolTipHelp.smoothHelp;
        }
        /*
        饼图
         */
        else if(divText.trim()=='外半径'){
            return toolTipHelp.seriesRadiusOutterHelp;
        }
        else if(divText.trim()=='内半径'){
            return toolTipHelp.seriesRadiusInnerHelp;
        }
        else if(divText.trim()=='玫瑰图'){
            return toolTipHelp.seriesRoseTypeHelp;
        }
        else if(divText.trim()=='圆心上边距'){
            return toolTipHelp.seriesCenterTopHelp;
        }
        else if(divText.trim()=='圆心左边距'){
            return toolTipHelp.seriesCenterLeftHelp;
        }
        /*
        雷达图
         */
        else if(divText.trim()=='坐标轴文本'){
            return toolTipHelp.radarIndicatorsHelp;
        }
        else if(divText.trim()=='图心上边距'){
            return toolTipHelp.radarCenterTopHelp;
        }
        else if(divText.trim()=='图心左边距'){
            return toolTipHelp.radarCenterLeftHelp;
        }
        else if(divText.trim()=='雷达图半径'){
            return toolTipHelp.radarRadiusHelp;
        }
        else if(divText.trim()=='雷达图旋转角度'){
            return toolTipHelp.radarStartAngelHelp;
        }
        else if(divText.trim()=='网格横向数量'){
            return toolTipHelp.radarSplitNumberHelp;
        }
        else if(divText.trim()=='雷达图外观'){
            return toolTipHelp.radarShapeHelp;
        }
        else if(divText.trim()=='雷达图字体颜色'){
            return toolTipHelp.radarNameTextStyleColorHelp;
        }
        else if(divText.trim()=='雷达图字体大小'){
            return toolTipHelp.radarNameTextStyleFontSizeHelp;
        }
        else if(divText.trim()=='雷达图坐标线'){
            return toolTipHelp.radarAxisLineShowHelp;
        }
        else if(divText.trim()=='雷达图分割线'){
            return toolTipHelp.radarSplitLineShowHelp;
        }
        else if(divText.trim()=='雷达图坐标线颜色'){
            return toolTipHelp.radarAxisLineLineStyleHelp;
        }
        else if(divText.trim()=='雷达图分割线颜色'){
            return toolTipHelp.radarSplitLineLineStyleHelp;
        }
        else if(divText.trim()=='雷达图标记点'){
            return toolTipHelp.seriesSymbolHelp;
        }
        else if(divText.trim()=='雷达图标记点大小'){
            return toolTipHelp.seriesSymbolSizeHelp;
        }
        else if(divText.trim()=='雷达图线宽度'){
            return toolTipHelp.seriesSymbolSizeHelp;
        }
        else if(divText.trim()=='雷达图线段类型'){
            return toolTipHelp.seriesLineStyleNormalTypeHelp;
        }
        else if(divText.trim()=='雷达图线段透明度'){
            return toolTipHelp.seriesLineStyleNormalOpacityHelp;
        }
        else if(divText.trim()=='映射显示'){
            return toolTipHelp.visualShowHelp;
        }
        else if(divText.trim()=='映射图示朝向'){
            return toolTipHelp.visualMapOrientHelp;
        }
        else if(divText.trim()=='映射最小值'){
            return toolTipHelp.visualMapMinHelp;
        }
        else if(divText.trim()=='映射颜色起始'){
            return toolTipHelp.visualMapColorStartHelp;
        }
        else if(divText.trim()=='映射最大值'){
            return toolTipHelp.visualMapColorEndHelp;
        }
        else if(divText.trim()=='映射颜色终止'){
            return toolTipHelp.visualMapColorEndHelp;
        }
        else if(divText.trim()=='映射上边距'){
            return toolTipHelp.visualMapTopHelp;
        }
        else if(divText.trim()=='映射左边距'){
            return toolTipHelp.visualMapLeftHelp;
        }
        else if(divText.trim()=='日历图上边距'){
            return toolTipHelp.calendarTopHelp;
        }
        else if(divText.trim()=='日历图左边距'){
            return toolTipHelp.calendarLeftHelp;
        }
        else if(divText.trim()=='日历图朝向'){
            return toolTipHelp.calendarOrientHelp;
        }
        else if(divText.trim()=='日历图起始日期'){
            return toolTipHelp.calendarRangeStartHelp;
        }
        else if(divText.trim()=='日历图终止日期'){
            return toolTipHelp.calendarRangeEndHelp;
        }
        else if(divText.trim()=='日历图年份边距'){
            return toolTipHelp.calendarYearLabelMarginHelp;
        }
        else if(divText.trim()=='日历图月份边距'){
            return toolTipHelp.calendarMonthLabelNameMapHelp;
        }
        else if(divText.trim()=='一周起始日期'){
            return toolTipHelp.calendarDayLabelFirstDayHelp;
        }
        else if(divText.trim()=='日历图Cell宽度'){
            return toolTipHelp.calendarCellSizeWidthHelp;
        }
        else if(divText.trim()=='日历图Cell高度'){
            return toolTipHelp.calendarCellSizeHeightHelp;
        }
        else if(divText.trim()=='日历图展现形式'){
            return toolTipHelp.seriesTypeHelp;
        }
        else if(divText.trim()=='日历图标签'){
            return toolTipHelp.seriesLabelNormalShowHelp;
        }
        else if(divText.trim()=='散点字体颜色'){
            return toolTipHelp.seriesLabelNormalTextStyleColorHelp;
        }
        else if(divText.trim()=='散点字体大小'){
            return toolTipHelp.seriesLabelNormalTextStyleFontsizeHelp;
        }
        else if(divText.trim()=='散点填充系数'){
            return toolTipHelp.seriesSymbolSizeHelp;
        }




    }

    return{
        text:function(divText){
             return selectToolTopHelp(divText);
        }
    }
})()