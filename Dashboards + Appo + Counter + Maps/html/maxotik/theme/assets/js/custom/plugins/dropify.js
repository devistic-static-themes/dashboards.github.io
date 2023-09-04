"use strict";var Dropify=Dropify||{};$(function(){Dropify={init:function(){var r={};$(".drop-file").each(function(){r[this.id]=!0}),i.on("dropify.beforeClear",function(i,o){var e=i.target.id;if(r[e])return confirm("Do you really want to remove"+o.filename+"?")})}};var i=$(".drop-file").dropify();$(document).ready(Dropify.init)});
//# sourceMappingURL=dropify.js.map
