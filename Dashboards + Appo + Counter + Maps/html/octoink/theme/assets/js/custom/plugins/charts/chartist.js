"use strict";var ChartistDemo=ChartistDemo||{};$(function(){ChartistDemo={init:function(){ChartistDemo.lineChart(),ChartistDemo.lineNullDataChart(),ChartistDemo.dottedChart(),ChartistDemo.barChart(),ChartistDemo.stackedBarChart(),ChartistDemo.horizontalBarChart(),ChartistDemo.pieChart(),ChartistDemo.gaugeChart(),ChartistDemo.donutChart(),ChartistDemo.lineAnimatedChart(),ChartistDemo.svgAnimatedChart()},lineChart:function(){if(0!==$("#chartist-1").length){new Chartist.Line("#chartist-1",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},{fullWidth:!0,showArea:!0,chartPadding:{right:40}})}},lineNullDataChart:function(){if(0!==$("#chartist-2").length){var t={labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],series:[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null],[{x:3,y:3},{x:4,y:3},{x:5,y:void 0},{x:6,y:4},{x:7,y:null},{x:8,y:4},{x:9,y:4}]]};new Chartist.Line("#chartist-2",t,{fullWidth:!0,chartPadding:{right:10},low:0})}},dottedChart:function(){if(0!==$("#chartist-3").length){var t=function(t){return Array.apply(null,new Array(t))},e=t(52).map(Math.random).reduce(function(t,e,a){return t.labels.push(a+1),t.series.forEach(function(t){t.push(100*Math.random())}),t},{labels:[],series:t(4).map(function(){return new Array})});new Chartist.Line("#chartist-3",e,{showLine:!1,axisX:{labelInterpolationFnc:function(t,e){return e%13==0?"W"+t:null}}})}},barChart:function(){if(0!==$("#chartist-4").length){new Chartist.Bar("#chartist-4",{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[5,4,3,7,5,10,3,4,8,10,6,8],[3,2,9,5,4,6,4,6,7,8,7,4]]},{seriesBarDistance:10},[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]])}},stackedBarChart:function(){if(0!==$("#chartist-5").length){new Chartist.Bar("#chartist-5",{labels:["Q1","Q2","Q3","Q4"],series:[[8e5,12e5,14e5,13e5],[2e5,4e5,5e5,3e5],[1e5,2e5,4e5,6e5]]},{stackBars:!0,axisY:{labelInterpolationFnc:function(t){return t/1e3+"k"}}}).on("draw",function(t){"bar"===t.type&&t.element.attr({style:"stroke-width: 30px"})})}},horizontalBarChart:function(){if(0!==$("#chartist-6").length){new Chartist.Bar("#chartist-6",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},{seriesBarDistance:10,reverseData:!0,horizontalBars:!0,axisY:{offset:70}})}},pieChart:function(){if(0!==$("#chartist-7").length){var t={series:[5,3,4]},e=function(t,e){return t+e};new Chartist.Pie("#chartist-7",t,{labelInterpolationFnc:function(a){return Math.round(a/t.series.reduce(e)*100)+"%"}})}},gaugeChart:function(){if(0!==$("#chartist-8").length){new Chartist.Pie("#chartist-8",{series:[20,10,30,40]},{donut:!0,donutWidth:60,startAngle:270,total:200,showLabel:!1})}},donutChart:function(){if(0!==$("#chartist-9").length){var t=new Chartist.Pie("#chartist-9",{series:[10,20,50,20,5,50,15],labels:[1,2,3,4,5,6,7]},{donut:!0,showLabel:!1});t.on("draw",function(t){if("slice"===t.type){var e=t.element._node.getTotalLength();t.element.attr({"stroke-dasharray":e+"px "+e+"px"});var a={"stroke-dashoffset":{id:"anim"+t.index,dur:1e3,from:-e+"px",to:"0px",easing:Chartist.Svg.Easing.easeOutQuint,fill:"freeze"}};0!==t.index&&(a["stroke-dashoffset"].begin="anim"+(t.index-1)+".end"),t.element.attr({"stroke-dashoffset":-e+"px"}),t.element.animate(a,!1)}}),t.on("created",function(){window.__anim21278907124&&(clearTimeout(window.__anim21278907124),window.__anim21278907124=null),window.__anim21278907124=setTimeout(t.update.bind(t),1e4)})}},lineAnimatedChart:function(){if(0!==$("#chartist-10").length){var t=new Chartist.Line("#chartist-10",{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,9,7,8,5,4,6,2,3,3,4,6],[4,5,3,7,3,5,5,3,4,4,5,5],[5,3,4,5,6,3,3,4,5,6,3,4],[3,4,5,6,7,6,4,5,6,7,6,3]]},{low:0}),e=0;t.on("created",function(){e=0}),t.on("draw",function(t){if(e++,"line"===t.type)t.element.animate({opacity:{begin:80*e+1e3,dur:500,from:0,to:1}});else if("label"===t.type&&"x"===t.axis)t.element.animate({y:{begin:80*e,dur:500,from:t.y+100,to:t.y,easing:"easeOutQuart"}});else if("label"===t.type&&"y"===t.axis)t.element.animate({x:{begin:80*e,dur:500,from:t.x-100,to:t.x,easing:"easeOutQuart"}});else if("point"===t.type)t.element.animate({x1:{begin:80*e,dur:500,from:t.x-10,to:t.x,easing:"easeOutQuart"},x2:{begin:80*e,dur:500,from:t.x-10,to:t.x,easing:"easeOutQuart"},opacity:{begin:80*e,dur:500,from:0,to:1,easing:"easeOutQuart"}});else if("grid"===t.type){var a={begin:80*e,dur:500,from:t[t.axis.units.pos+"1"]-30,to:t[t.axis.units.pos+"1"],easing:"easeOutQuart"},n={begin:80*e,dur:500,from:t[t.axis.units.pos+"2"]-100,to:t[t.axis.units.pos+"2"],easing:"easeOutQuart"},i={};i[t.axis.units.pos+"1"]=a,i[t.axis.units.pos+"2"]=n,i.opacity={begin:80*e,dur:500,from:0,to:1,easing:"easeOutQuart"},t.element.animate(i)}}),t.on("created",function(){window.__exampleAnimateTimeout&&(clearTimeout(window.__exampleAnimateTimeout),window.__exampleAnimateTimeout=null),window.__exampleAnimateTimeout=setTimeout(t.update.bind(t),12e3)})}},svgAnimatedChart:function(){if(0!==$("#chartist-11").length){new Chartist.Line("#chartist-11",{labels:["Mon","Tue","Wed","Thu","Fri","Sat"],series:[[1,5,2,5,4,3],[2,3,4,8,1,2],[5,4,3,2,1,.5]]},{low:0,showArea:!0,showPoint:!1,fullWidth:!0}).on("draw",function(t){"line"!==t.type&&"area"!==t.type||t.element.animate({d:{begin:2e3*t.index,dur:2e3,from:t.path.clone().scale(1,0).translate(0,t.chartRect.height()).stringify(),to:t.path.clone().stringify(),easing:Chartist.Svg.Easing.easeOutQuint}})})}}},$(document).ready(ChartistDemo.init)});
//# sourceMappingURL=chartist.js.map