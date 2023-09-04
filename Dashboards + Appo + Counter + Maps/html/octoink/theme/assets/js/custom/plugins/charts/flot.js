"use strict";var FlotChart=FlotChart||{};$(function(){FlotChart={init:function(){FlotChart.lineChart(),FlotChart.pieChart(),FlotChart.areaChart(),FlotChart.realTimeCart(),FlotChart.barChart(),FlotChart.stackBarChart()},lineChart:function(){var o=$("#flot-line-chart");if(0!==o.length){var e={series:{shadowSize:0,lines:{show:!0}},grid:{borderWidth:1,labelMargin:10,mouseActiveRadius:6,borderColor:"#eee",show:!0,hoverable:!0,clickable:!0},xaxis:{tickColor:"#eee",tickDecimals:0,font:{lineHeight:15,style:"normal",color:"#000"},shadowSize:0,ticks:[[0,"Jan"],[1,"Feb"],[2,"Mar"],[3,"Apr"],[4,"May"],[5,"Jun"],[6,"Jul"],[7,"Aug"],[8,"Sep"],[9,"Oct"],[10,"Nov"],[11,"Dec"]]},yaxis:{tickColor:"#eee",tickDecimals:0,font:{lineHeight:15,style:"normal",color:"#000"},shadowSize:0},legend:{container:".flc-line",backgroundOpacity:.5,noColumns:0,backgroundColor:"white",lineWidth:0},colors:[appUtils.colors("primary"),appUtils.colors("success"),appUtils.colors("danger")]};$.plot(o,[{data:a,lines:{show:!0},label:"Product A",stack:!0,color:"#8854d0"},{data:r,lines:{show:!0},label:"Product B",stack:!0,color:"#17a2b8"},{data:t,lines:{show:!0},label:"Product C",stack:!0,color:"#ff8840"}],e)}},pieChart:function(){var a=$("#flot-pie-chart");if(0!==a.length){var r=[{data:18e3,color:appUtils.colors("brand"),label:"Linda"},{data:2e4,color:appUtils.colors("danger"),label:"John"},{data:13e3,color:appUtils.colors("info"),label:"Margaret"},{data:15e3,color:appUtils.colors("success"),label:"Richard"}];$.plot(a,r,{series:{pie:{show:!0,radius:1,label:{show:!0,radius:.75,formatter:function(a,r){return"<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>"+a+"<br/>"+Math.round(r.percent)+"%</div>"},background:{opacity:.5}}}},legend:{show:!1}})}},areaChart:function(){var a=$("#flot-area-chart");if(0!==a.length){$.plot(a,[{data:[[0,0],[1,35],[2,35],[3,30],[4,30],[5,5],[6,32],[7,37],[8,30],[9,35],[10,30],[11,5]],lines:{show:!0,fill:.6},label:"Product 1",stack:!0,color:appUtils.colors("primary")}],{series:{shadowSize:0,curvedLines:{apply:!0,active:!0,monotonicFit:!0},lines:{show:!1,fill:.98,lineWidth:0}},grid:{borderWidth:0,labelMargin:10,hoverable:!0,clickable:!0,mouseActiveRadius:6},xaxis:{tickDecimals:0,tickLength:0},yaxis:{tickDecimals:0,tickLength:0},legend:{show:!1}})}},realTimeCart:function(){var a=$("#flot-real-chart");if(0!==a.length){var r=[],t=300,o=$.plot(a,[l()],{series:{shadowSize:0,lines:{fill:!1}},yaxis:{min:0,max:100},xaxis:{show:!1,borderColor:"#fff"},colors:[appUtils.colors("info")],grid:{borderColor:"#FFF",borderWidth:0,labelMargin:0,axisMargin:0,minBorderMargin:0}}),e=30;!function a(){o.setData([l()]),o.draw(),setTimeout(a,e)}()}function l(){for(r.length>0&&(r=r.slice(1));r.length<t;){var a=(r.length>0?r[r.length-1]:50)+10*Math.random()-5;a<0?a=0:a>100&&(a=100),r.push(a)}for(var o=[],e=0;e<r.length;++e)o.push([e,r[e]]);return o}},barChart:function(){var a=$("#flot-bar-chart");if(0!==a.length){$.plot(a,[[["January",10],["February",8],["March",4],["April",13],["May",17],["June",9]]],{series:{bars:{show:!0,barWidth:.6,align:"center"}},xaxis:{mode:"categories",tickLength:0},grid:{borderWidth:0,labelMargin:10,hoverable:!0,clickable:!0,mouseActiveRadius:6}})}},stackBarChart:function(){for(var a=$("#flot-stack-chart"),r=[],t=0;t<=10;t+=1)r.push([t,parseInt(30*Math.random())]);for(var e=[],l=0;l<=10;l+=1)e.push([l,parseInt(30*Math.random())]);for(var i=[],s=0;s<=10;s+=1)i.push([s,parseInt(30*Math.random())]);$.plot(a,o,{series:{stack:0,lines:{show:!1,fill:!0,steps:!1},bars:{show:!0,fill:!0,barWidth:.6}},grid:{borderWidth:0,labelMargin:10,hoverable:!0,clickable:!0,mouseActiveRadius:6}})}};var a=[[0,30],[1,35],[2,35],[3,30],[4,30]],r=[[0,50],[1,40],[2,45],[3,60],[4,50]],t=[[0,40],[1,50],[2,35],[3,25],[4,40]],o=[{data:a,color:appUtils.colors("primary")},{data:r,color:appUtils.colors("success")},{data:t,color:appUtils.colors("danger")}];$(document).ready(FlotChart.init)});
//# sourceMappingURL=flot.js.map
