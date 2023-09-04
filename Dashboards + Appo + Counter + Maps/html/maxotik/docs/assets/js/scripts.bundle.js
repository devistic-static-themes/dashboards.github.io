"use strict";var AppConfig=AppConfig||{},$loader=$("#loading"),$wrapper=$("#wrapper"),$header=$("#header");$(function(){AppConfig={init:function(){AppConfig.initAppScrollbars(),AppConfig.appFullScreen(),AppConfig.initPsPageBody(),AppConfig.toggleDataSidebar(),AppConfig.toggleSearch(),AppConfig.authCarousel()},initAppScrollbars:function(){$('[data-scrollable="true"]').each(function(){var e=$(this),n=e.data("height");n&&e.css("max-height",n),AppConfig.initPerfectScrollbar(this)})},initPerfectScrollbar:function(e){new PerfectScrollbar(e,{wheelSpeed:.5,swipeEasing:!0,wheelPropagation:!1,minScrollbarLength:40,suppressScrollX:!0})},appFullScreen:function(){$("#fullScreen").on("click",function(e){$(this).toggleClass("active"),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),e.stopPropagation()})},initPsPageBody:function(){var n=$("#pageHead"),t=$("#pageContent"),o=$("#footer"),l=e.height()-n.height();if(0===$("#pageBody").length)return!1;var a=document.querySelector("#pageBody");e.width()<appUtils.breakpoints("lg")&&(l-=$("#sidebar").outerHeight());var c=l-o.outerHeight()-10;$("#pageBody").css("max-height",l),t.css("min-height",c),AppConfig.initPerfectScrollbar("#pageBody"),a.addEventListener("ps-scroll-y",e=>{e.target.scrollTop>=50?n.addClass("page-body-scrolled"):n.removeClass("page-body-scrolled")})},toggleDataSidebar:function(){var e=$("#openDataSidebar"),t=$("#dataSidebar"),o=$("#closeDataSidebar");e.on("click",function(){t.addClass(n)}),o.on("click",function(){t.removeClass(n)})},toggleSearch:function(){var e=$(".search-icon"),t=$(".search-input"),o=$("#closeSearch");e.on("click",function(){t.addClass(n)}),o.on("click",function(){t.removeClass(n)})},authCarousel:function(){var e=$("#authCarousel");if(0===e.length)return!1;e.owlCarousel({items:1,margin:10,nav:!1,dots:!0})}};var e=$(window),n="show";$(document).ready(AppConfig.init)}),$(window).on("load",function(){$loader.fadeOut(1e3)}),$wrapper.on("scroll",function(){$header.toggleClass("scrolled",$(this).scrollTop()>80)});var Base=Base||{};$(function(){Base={init:function(){Base.initDataFunction(),Base.collapseActive()},collapseActive:function(){var e=$(".collapse");e.on("shown.bs.collapse",function(){$(this).prev().addClass("active")}),e.on("hidden.bs.collapse",function(){$(this).prev().removeClass("active")})},initDataFunction:function(){var e=$('[data-tooltip="tooltip"]'),n=$('[data-popover="popover"]');e.length&&e.tooltip(),n.length&&n.popover()}},$(document).ready(Base.init)});var appUtils=appUtils||{};$(function(){appUtils={GOOGLE_API_KEY:"AIzaSyAmOcUK0pgT3lW3Cr9LoeCVGIrm1_qFq30",GOOGLE_CALENDAR_ID:"addressbook#contacts@group.v.calendar.google.com",CHART_JS_GRID_LINE_COLOR:"#DEE1E6",CHART_JS_AXES_PADDING:10,CHART_JS_BORDER_DASH:[4,4],colors:function(n){if(n&&e[n])return e[n]},breakpoints:function(e){if(e&&n[e])return n[e]}};var e={primary:"#753FDC",secondary:"#5B5F68",brand:"#C83FDC",success:"#17CD62",info:"#2962FF",warning:"#FFD600",danger:"#FF2929",light:"#B8BBC1",dark:"#141823"},n={xl:1200,lg:992,md:768,sm:576,xs:0}});
//# sourceMappingURL=scripts.bundle.js.map
