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
        xAxisDataHelp:'x轴坐标刻度的值，默认读取数据的x轴值作为x轴坐标刻度，用户可以修改坐标刻度值，每个坐标刻度值之间用逗号隔开</br><b>例如：x1,x2,x3</b><br/><b>建议设置的总个数等于数据的长度</b>',
        xAxisPositionHelp:'x轴的位置，在图表下方，或者是在图表上方',
        xAxisGridLineAttrHelp:'是否显示x轴网格，网格即为垂直于x轴刻度的直线',
        xAxisInverseHelp:'x轴是否翻转，即从0-N转换成N-0',
        xAxisSplitAreaShowHelp:'是否显示x轴分割区域，分割区域即为x轴每个刻度之间填充的差异',
        xAxisLineShowHelp:'是否显示x轴坐标轴',
        xAxisAxisLabelInsideHelp:'x轴坐标文本相对于x轴的位置，默认为x轴下方，勾选即为x轴上方（可能会产生遮盖）,',
        xAxisAxisLabelTextStyleColorHelp:'x轴坐标文本的颜色，默认为白色',
        xAxisAxisTickShowHelp:'是否在x轴上显示坐标刻度点',
        xAxisBoundaryGapHelp:'是否在x轴坐标左右留空，默认建议留空<br/><b>若选择坐标轴转置，建议勾选该选项</b>',        xAxisDataHelp:'x轴坐标刻度的值，默认读取数据的x轴值作为x轴坐标刻度，用户可以修改坐标刻度值，每个坐标刻度值之间用逗号隔开</br><b>例如：x1,x2,x3</b><br/><b>建议设置的总个数等于数据的长度</b>',
        yAxisPositionHelp:'y轴的位置，在图表左方，或者是在图表右方',
        yAxisGridLineAttrHelp:'是否显示y轴网格，网格即为垂直于y轴刻度的直线',
        yAxisInverseHelp:'y轴是否翻转，即从0-N转换成N-0',
        yAxisSplitAreaShowHelp:'是否显示y轴分割区域，分割区域即为y轴每个刻度之间填充的差异',
        yAxisLineShowHelp:'是否显示y轴坐标轴',
        yAxisAxisLabelInsideHelp:'y轴坐标文本相对于y轴的位置，默认为y轴下方，勾选即为y轴上方（可能会产生遮盖）,',
        yAxisAxisLabelTeytStyleColorHelp:'y轴坐标文本的颜色，默认为白色',
        yAxisAxisTickShowHelp:'是否在y轴上显示坐标刻度点',
        reverseHelp:'是否转置坐标轴，即为x，y轴互换',
        stackAttrHelp:'用于区分堆叠柱状图，留空即为柱状图的维度=数据种类，用户可以修改柱状图的堆叠情况，每个值之间用逗号隔开<br/><b>例如：1,1,2,2</b> 表示柱状图维度为2，第1个维度堆叠层为2，第二个维度堆叠层为2<br><b>例如：1,2,2,2</b> 表示柱状图维度为2，第1个维度堆叠层为1，第2个维度堆叠层为3<br/><b>例如：1,2,3,4</b> 表示柱状图维度为4，每个维度堆叠层都为1',

        /*
        折线图属性
         */
        seriesAreaStyleHelp:'是否为面积图，面积图即为堆叠的折线图<br/><b>建议：勾选流图同时勾选 x轴属性->x轴左右边界</b>',
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

    }


    var selectToolTopHelp=function (divText) {
        if(divText.trim()=='主题'){
            return toolTipHelp.themeHelp;
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
        else if(divText.trim()=='x轴坐标点'){
            return toolTipHelp.xAxisDataHelp;
        }
        else if(divText.trim()=='x轴位置'){
            return toolTipHelp.xAxisPositionHelp;
        }
        else if(divText.trim()=='x轴字体颜色'){
            return toolTipHelp.xAxisAxisLabelTextStyleColorHelp;
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
        折线图
         */
        else if(divText.trim()=='流图'){
            return toolTipHelp.seriesAreaStyleHelp;
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
        // else if(divText.trim()==''){
        //     return toolTipHelp.;
        // }

        // seriesRadiusOutterHelp:'饼图外半径，相对于整个绘图区而言，单位 %',
        //     seriesRadiusInnerHelp:'饼图内半径，相对于整个绘图区而言，单位 %',
        //     seriesRoseTypeHelp:'是否为玫瑰图<br/>否为普通饼图<br/>区域为区域玫瑰图，区域玫瑰图用半径大小区分数据大小<br/>角度为角度玫瑰图，角度玫瑰图用半径大小和角度大小区分数据大小',




    }

    return{
        text:function(divText){
             return selectToolTopHelp(divText);
        }
    }
})()