"use strict";var SparklineDemo=SparklineDemo||{};$(function(){SparklineDemo={init:function(){SparklineDemo.lineChart(),SparklineDemo.barChart(),SparklineDemo.pieChart(),SparklineDemo.tristateChart(),SparklineDemo.bulletChart(),SparklineDemo.mixedChart()},lineChart:function(){i.length&&i.each(function(){$(this).sparkline("html",{type:"line",width:"220px",height:"100px",lineColor:appUtils.colors("success"),fillColor:appUtils.colors("success"),minSpotColor:appUtils.colors("success"),maxSpotColor:appUtils.colors("success"),highlightLineColor:"rgba(0, 0, 0, 0.3)",highlightSpotColor:appUtils.colors("success")})}),l.length&&l.each(function(){$(this).sparkline("html",{type:"line",width:"220px",height:"100px",lineWidth:3,lineColor:appUtils.colors("danger"),fillColor:"transparent",minSpotColor:appUtils.colors("danger"),maxSpotColor:appUtils.colors("danger"),highlightLineColor:"rgba(0, 0, 0, 0.3)",highlightSpotColor:appUtils.colors("danger")})})},barChart:function(){r.length&&r.sparkline("html",{type:"bar",height:"140",barColor:appUtils.colors("info"),barWidth:6,barSpacing:8})},pieChart:function(){e.length&&e.sparkline([20,40,30],{type:"pie",height:"180",resize:!0,sliceColors:[appUtils.colors("primary"),appUtils.colors("success"),appUtils.colors("danger")]})},tristateChart:function(){o.length&&o.sparkline([5,7,1,0,-6,-8,4,-2,0,-4,5,6],{type:"tristate",height:"100px",barWidth:6,barSpacing:8,posBarColor:appUtils.colors("success"),negBarColor:appUtils.colors("danger")})},bulletChart:function(){t.length&&t.sparkline([10,12,12,9,7],{type:"bullet",height:"50",targetColor:appUtils.colors("danger"),performanceColor:appUtils.colors("primary")})},mixedChart:function(){a.length&&(a.sparkline([5,6,2,9,4,7,10,12,4,7,10],{type:"bar",height:"160",barWidth:"8",resize:!0,barSpacing:"16",barColor:appUtils.colors("brand")}),a.sparkline([5,6,2,9,4,7,10,12,4,7,10],{type:"line",height:"160",lineWidth:2,lineColor:appUtils.colors("warning"),fillColor:"transparent",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}))}};var i=$("#line-sparkline-1"),l=$("#line-sparkline-2"),r=$("#bar-sparkline"),e=$("#pie-sparkline"),o=$("#tristate-sparkline"),t=$("#bullet-sparkline"),a=$("#mixed-sparkline");$(document).ready(SparklineDemo.init)});
//# sourceMappingURL=sparkline.js.map
