"use strict";const $window=$(window),map=document.getElementById("map");$.fn.isInViewport=function(){const e=$(this).offset().top,t=e+$(this).outerHeight(),n=$window.scrollTop(),o=n+$window.height();return t>n&&e<o};const ScriptBundle=function(e){const t=[-8,8],n=[6,-6];const o=()=>{const t=e(".scroll-image"),n=e(".tagline");return 0!==t.length&&(t.each(function(){const t=e(this);t.isInViewport()&&t.css("background-position","50% "+-$window.scrollTop()/6+"px")}),0!==n.length&&void n.each(function(){const t=e(this);if(t.isInViewport()){const n=$window.scrollTop(),o=e(document).height(),i=parseInt(100*n/o);t.css({transform:"translate(-"+i+"%, -60%)"})}}))},i=e=>{const o=(e=>{let t=0,n=0;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}})(e),i=e.target,r=document.body.scrollLeft+document.documentElement.scrollLeft,a=document.body.scrollTop+document.documentElement.scrollTop,c=i.getBoundingClientRect(),l=o.x-c.left-r,s=o.y-c.top-a;TweenMax.to(i,1,{x:(t[1]-t[0])/c.width*l+t[0],y:(n[1]-n[0])/c.height*s+n[0]})},r=e=>{TweenMax.to(e.target,2,{x:0,y:0})};return{init:function(){(()=>{const t=window.performance.timing,n=-(t.loadEventEnd-t.navigationStart),o=100*parseInt(n/1e3%60,10),i=e("#loading_percentage"),r=Math.abs(Math.floor(o/100));let a=0;const c=setInterval(function(){a+=1,i.text(a),100===a&&clearInterval(c)},r),l=setInterval(function(){e("body").addClass("page-loaded"),100===a&&clearInterval(l)},o)})(),e("#hamburger").on("click",function(){e("body").toggleClass("open-navbar")}),new WOW({animateClass:"animated",offset:50}).init(),(()=>{let e,t=!1;const n=document.querySelectorAll(".hover-image");if(0===n.length)return!1;const o=()=>{t&&(t=!1),clearTimeout(e),e=setTimeout(()=>t=!0,80)},a=e=>requestAnimationFrame(()=>{t&&i(e)}),c=n=>requestAnimationFrame(()=>{t&&(t=!1,clearTimeout(e),r(n))});n.forEach(e=>{e.addEventListener("mouseenter",o),e.addEventListener("mousemove",a),e.addEventListener("mouseleave",c)})})(),(()=>{const t=e("#speak");if(0===t.length)return!1;t.owlCarousel({items:1,loop:!0,margin:30,nav:!1,dots:!0,navText:["",""],autoplay:!0,autoplayTimeout:4500})})(),(()=>{if(!map)return!1;var t=e("body"),n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmOcUK0pgT3lW3Cr9LoeCVGIrm1_qFq30&callback=initMap&libraries=&v=weekly",t.append(n)})()},scrollAnimation:function(){o()}}}(jQuery);function initMap(){const e={lat:22.322064,lng:72.617828},t=new google.maps.Map(map,{zoom:6,center:e});new google.maps.Marker({position:e,map:t})}$window.on("load",function(){$(".works").masonry({itemSelector:".works .work-item",columnWidth:".works .work-item",percentPosition:!0})}),$window.on("resize scroll",function(){ScriptBundle.scrollAnimation()}),$(document).ready(function(){ScriptBundle.init()});
//# sourceMappingURL=scripts.bundle.js.map