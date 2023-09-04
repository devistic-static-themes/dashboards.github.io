
(function($) {

	skel.breakpoints({
		xlarge:  '(max-width: 1680px)',
		large:   '(max-width: 1280px)',
		medium:  '(max-width: 980px)',
		small:   '(max-width: 736px)',
		xsmall:  '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'center',
				openerActiveClass: 'dropotron-active'
			});



			function displayMapAt(lat, lon, zoom) {
			        $("#map")
			                .html(
			                        "<iframe id=\"map_frame\" "
			                                + "width=\"100%\" height=\"600px\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" "
			                                + "src=\https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604331.8992100563!2d-72.56101298860925!3d42.07742816440655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e444e0437e735d%3A0x69df7c4d48b3b627!2sProvidence%2C+RI!5e0!3m2!1sen!2sus!4v1505283007226"
			                                + lat + "," + lon
			                                + "&amp;spn=0.199154,0.399727&amp;t=m&amp;z="
			                                + zoom + "\"" + "></iframe>");

			    }




		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$main.scrollex({
					mode:		'top',
					top:		'40vh',
					enter:		function() { $header.removeClass('alt'); },
					leave:		function() { $header.addClass('alt'); $header.addClass('reveal'); }
				});

			}

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
						//target: $body,
						//visibleClass: 'navPanel-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

		// Spotlights.
			$('.spotlight')
				.each(function() {

					var	$this = $(this),
						$image = $this.find('.image'),
						$img = $image.find('img'),
						x;

					// No image? Skip.
						if ($image.length == 0)
							return;

					// Assign image.
						$image.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set background position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide <img>.
						$img.hide();

				});

	});

})(jQuery);

function grid() {
	var $container = $('.image-grid').imagesLoaded( function() {
				$container.isotope({
					percentPosition: true,
				  itemSelector: '.image-grid .image-item',
				  layoutMode: 'masonry'
				});
			});
}


$(window).on('load resize', function() {
	grid();
})
