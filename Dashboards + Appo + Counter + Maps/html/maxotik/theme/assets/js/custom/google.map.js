"use strict";var GoogleMap=GoogleMap||{};$(function(){GoogleMap={init:function(){var o=$("body"),a=document.createElement("script");a.src="https://maps.googleapis.com/maps/api/js?key="+appUtils.GOOGLE_API_KEY+"&callback=GoogleMap.initMap",o.append(a)},initMap:function(){var o={lat:-25.344,lng:131.036},a=new google.maps.Map(document.getElementById("map"),{zoom:6,center:o});new google.maps.Marker({position:o,map:a})}},$(document).ready(GoogleMap.init)});
//# sourceMappingURL=google.map.js.map
