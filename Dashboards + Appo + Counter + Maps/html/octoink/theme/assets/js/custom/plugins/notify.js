"use strict";var Notify=Notify||{};$(function(){Notify={init:function(){$("#alert-demo-1").on("click",function(){$.notify({message:"Hello World"},{type:"info"})}),$("#alert-demo-2").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info"})}),$("#alert-demo-3").on("click",function(){$.notify({message:"Hello World",icon:"la la-info"},{type:"info"})}),$("#alert-demo-4").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World",url:"https://github.com/mouse0270/bootstrap-notify",target:"_blank"},{type:"info"})}),$("#alert-demo-5").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info",animate:{enter:"animate fade-in-down",exit:"animate fade-out-up"}})}),$("#alert-demo-6").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info",placement:{from:"top",align:"left"}})}),$("#alert-demo-7").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info",placement:{from:"top",align:"center"}})}),$("#alert-demo-8").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info",placement:{from:"top",align:"right"}})}),$("#alert-demo-9").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info",placement:{from:"bottom",align:"left"}})}),$("#alert-demo-10").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info",placement:{from:"bottom",align:"center"}})}),$("#alert-demo-11").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"info",placement:{from:"bottom",align:"right"}})}),$("#alert-demo-12").on("click",function(){$.notify({title:"Bootstrap notify",message:"Hello World"},{type:"warning",showProgressbar:!0})})}},$(document).ready(Notify.init)});
//# sourceMappingURL=notify.js.map