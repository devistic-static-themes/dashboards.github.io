"use strict";var OwlCarousel=OwlCarousel||{};$(function(){OwlCarousel={init:function(){OwlCarousel.owlBasic(),OwlCarousel.owlLazy(),OwlCarousel.owlRTL(),OwlCarousel.owlWheel(),OwlCarousel.owlVideo()},owlBasic:function(){var e=$(".owl-basic");if(0===e.length)return!1;e.owlCarousel({items:1,loop:!0,margin:10,nav:!0,dots:!0,navText:o,autoplay:!0,autoplayTimeout:4500})},owlLazy:function(){var e=$(".owl-lazy");if(0===e.length)return!1;e.owlCarousel({loop:!0,margin:10,nav:!0,dots:!0,navText:o,autoplay:!0,autoplayTimeout:4500,lazyLoad:!0,responsive:{0:{items:2},600:{items:3},1000:{items:5}}})},owlRTL:function(){var e=$(".owl-rtl");if(0===e.length)return!1;e.owlCarousel({loop:!0,margin:10,nav:!0,dots:!0,navText:o,autoplay:!0,autoplayTimeout:4500,rtl:!0,responsive:{0:{items:2},600:{items:3},1000:{items:5}}})},owlWheel:function(){var e=$(".owl-wheel");if(0===e.length)return!1;e.owlCarousel({loop:!0,margin:10,nav:!0,dots:!0,navText:o,autoplay:!0,autoplayTimeout:4500,responsive:{0:{items:2},600:{items:3},1000:{items:5}}}).on("mousewheel",".owl-stage",function(o){o.deltaY>0?e.trigger("next.owl"):e.trigger("prev.owl"),o.preventDefault()})},owlVideo:function(){var e=$(".owl-carousel-video");if(0===e.length)return!1;e.owlCarousel({loop:!0,margin:10,nav:!0,dots:!0,navText:o,autoplay:!0,autoplayTimeout:4500,video:!0,responsive:{0:{items:2},600:{items:3},1000:{items:5}}})}};var o=["<i class='mdi mdi-chevron-left'></i>","<i class='mdi mdi-chevron-right'></i>"];$(document).ready(OwlCarousel.init)});
//# sourceMappingURL=owl.carousel.js.map
