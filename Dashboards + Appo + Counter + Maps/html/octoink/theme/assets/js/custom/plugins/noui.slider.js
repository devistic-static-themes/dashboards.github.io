"use strict";var NoUiSlider=NoUiSlider||{};$(function(){NoUiSlider={init:function(){NoUiSlider.demo1(),NoUiSlider.demo2(),NoUiSlider.demo3(),NoUiSlider.demo4(),NoUiSlider.demo5(),NoUiSlider.demo6(),NoUiSlider.demo7()},demo1:function(){if(0===$("#no-ui-range-1").length)return!1;var e=document.getElementById("no-ui-range-1");noUiSlider.create(e,{start:[4e3],range:{min:[2e3],max:[1e4]}})},demo2:function(){if(0===$("#no-ui-range-2").length)return!1;var e=document.getElementById("no-ui-range-2");noUiSlider.create(e,{start:[4e3],range:{min:[2e3],max:[1e4]}});var n=document.getElementById("no-ui-range-value-2");e.noUiSlider.on("update",function(e,i){n.value=e[i]}),n.addEventListener("change",function(){e.noUiSlider.set(this.value)})},demo3:function(){if(0===$("#no-ui-range-3").length)return!1;var e=document.getElementById("no-ui-range-3");noUiSlider.create(e,{start:[20,40,60],connect:[!0,!1,!0,!0],range:{min:[0],max:[100]}})},demo4:function(){if(0===$("#no-ui-range-4").length)return!1;var e=document.getElementById("no-ui-range-4");noUiSlider.create(e,{start:[20,80],margin:30,range:{min:0,max:100}})},demo5:function(){if(0===$("#no-ui-range-5").length)return!1;var e=document.getElementById("no-ui-range-5");noUiSlider.create(e,{start:[20,80,120],tooltips:[!1,wNumb({decimals:1}),!0],range:{min:0,max:200}})},demo6:function(){if(0===$("#no-ui-range-6").length)return!1;var e=document.getElementById("no-ui-range-6");noUiSlider.create(e,{start:[20,90],step:30,range:{min:0,max:210},pips:{mode:"steps",density:3,format:wNumb({decimals:2,prefix:"$"})}})},demo7:function(){if(0===$("#no-ui-range-7").length)return!1;var e=document.getElementById("no-ui-range-7");noUiSlider.create(e,{start:[10,90],step:30,orientation:"vertical",range:{min:0,max:210},pips:{mode:"steps",density:3,format:wNumb({decimals:2,prefix:"$"})}})}},$(document).ready(NoUiSlider.init)});
//# sourceMappingURL=noui.slider.js.map