"use strict";

var ScriptsBundle = ScriptsBundle || {};

$(function() {
    ScriptsBundle = {
        init: function() {
            ScriptsBundle.hamburger();
            ScriptsBundle.caseStudy();
            ScriptsBundle.scrollToElement();
            ScriptsBundle.blog();
            ScriptsBundle.submitContactForm();
            ScriptsBundle.modal();
        },
		
		hamburger: function() {
			$('#hamburger').on('click', function() {
				$('.navbar').slideToggle();
			});
		},
		
		scrollToElement: function() {
			$('a[href^="#"]').on('click', function(event) {
				var target = $(this.getAttribute('href'));
				if( target.length ) {
					event.preventDefault();
					$('html, body').stop().animate({
						scrollTop: target.offset().top
					}, 1000);
				}
			});
		},
		
		caseStudy: function() {
			var $case = $('#case_study');
			if($case.length === 0) {
				return false;
			}
			
			$case.owlCarousel({
				items: 1,
				loop: true,
				margin: 10,
				nav: true,
				navText: ['', ''],
				dots: false
			})
		},
		
		blog: function() {
			var $blog = $('#blog_carousel');
			if($blog.length === 0) {
				return false;
			}
			
			$blog.owlCarousel({
				items: 1,
				loop: true,
				margin: 10,
				nav: false,
				dots: true
			})
		},
		
		submitContactForm: function() {
			var $contact = $('#contact_form');
			$contact.submit(function (event) {
				event.preventDefault();
				
				var url = "js/contact.php";
				
				var show = 'show';
				var error = 'error ' + show;
				var REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				var name = $('#name').val();
				var email = $('#email').val();
				var msg = $('#msg').val();
				
				var $formMsg = $('#form_msg');
				var $fnError = $('#fn_error');
				var $emError1 = $('#em_error_1');
				var $emError2 = $('#em_error_2');
				
				if(name.length === 0) {
					$fnError.addClass(show);
					return false;
				} else {
					$fnError.removeClass(show);
				}
				
				if(email.length === 0) {
					$emError1.addClass(show);
					return false;
				} else {
					$emError1.removeClass(show);
					if(!REGEX.test(String(email).toLowerCase())) {
						$emError2.addClass(show);
						return false;
					} else {
						$emError2.removeClass(show);
					}
				}
				
				$.ajax({
					type: "post",
					url: url,
					data: "name=" + name + "&email=" + email + "&msg=" + msg,
				}).done(function (data) {
					if (data === "true") {
						{
							$formMsg.empty();
							$formMsg.append("Your message has been sent. We'll be in touch with you soon").addClass(show).removeClass(error);
						}
					}
					else {
						$formMsg.empty();
						$formMsg.append("Sending fail, Please try again letter").addClass(error);
					}
				}).fail(function (data) {
					$formMsg.append("Sending fail, Please try again letter").addClass(error);
				});
			});
		},
		
		modal: function() {
			var dataModal = $('[data-modal]');
			var close = $('[data-close]');
			var $iframe = $('#video iframe');
			var iframeSrc = $iframe.attr('src');
			var iframeSrcAuto = iframeSrc + '?autoplay=1';
			
			dataModal.on('click', function() {
				var id = $(this).data('modal');
				$('body').addClass('modal-open');
				$iframe.attr("src", iframeSrcAuto);
				$(id).show();
			});
			
			close.on('click', function() {
				$('body').removeClass('modal-open');
				$iframe.attr("src", iframeSrc);
				$('.modal-container').hide();
			});
		}
        
    };
    
    $(document).ready(ScriptsBundle.init);
});