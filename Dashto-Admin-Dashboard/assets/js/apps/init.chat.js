"use strict";var Chat=function(){var t=function(t,i){$(t).slimScroll({height:i,railVisible:!0,size:"4px",opacity:0}).mouseover(function(){$(this).next(".slimScrollBar").css("opacity",.4)})};return{init:function(){$(".chat-widget").length&&t(".chat-widget","411px"),$(".msg-list").length&&t(".msg-list","450px"),$(".msg-list-item").on("click",function(){$(".chat").addClass("js-show-msg")}),$("#chat-back").on("click",function(){$(".chat").removeClass("js-show-msg")})}}}();$(document).ready(function(){Chat.init()});
//# sourceMappingURL=init.chat.js.map
