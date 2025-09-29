/*
	Author       : 	Theme-Family
	Template Name:	Imran Abbas - Cv/Resume Portfolio Html5 Landing Page Template
	Version      : 	1.1
*/

(function($) {
    "use strict";
	
		/*PRELOADER JS*/
			$(window).on('load', function() { 
				$('.atf-status').fadeOut();
				$('.atf-preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
		/*START ONEPAGE NAV JS*/
		$('#main-menu').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});		
		/*END ONEPAGE NAV JS*/

	
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		
		/*START MENU JS*/
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/
        
		//**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('menu-bg');
				$('.back-to-top').addClass('open');
			} else {
				$('.atf-header-area').removeClass('menu-bg');
				$('.back-to-top').removeClass('open');
			}
		  });
		  
		/*--------------------------------------------------------------
		START SCROLL UP
		--------------------------------------------------------------*/	  
			// Back to top button 
		$(window).on('scroll', function () { 
			var scrolled = $(window).scrollTop();
			if (scrolled > 400) $('.back-to-top').addClass('active');
			if (scrolled < 400) $('.back-to-top').removeClass('active');
		});


		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 50);
		});
	
		/*--------------------------------------------------------------
         END SCROLL UP
      --------------------------------------------------------------*/
			
			//Mouse hover tile effect js//

			$(".card-s").tilt({
			  maxTilt: -20,
			  perspective: 2400,
			  speed: 2200,
			  easing: "cubic-bezier(.03,.98,.52,.99)",
			  scale: 1,
			  
			  });
			  
		//**===================Typed-word ===================**//	
		
			var typed = new Typed('.typed-word', {
				strings: [
					"Software Engineer",
					"Data Engineer",
					"Backend Engineer",
					"Machine Learning Developer",
					"AI & Data Science Enthusiast",
					"LLM & Chatbot Builder"
				  ],
				typeSpeed: 40,
				backSpeed: 40,
				backDelay: 2000,
				startDelay: 1500,
				loop: true,
				showCursor: true
			});
			
		
		//**===================Odometer JS ===================**//
		
			$('.odometer').appear(function() {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		
			  
		//**===================Porfolio isotope===================**//	 
			$(window).on('load', function() { 
			
				var portfolioIsotope = $('.atf-main-portfolio').isotope({
					itemSelector: '.atf-grid-portfolio'
				});

				$('#atf-portfolio-flters li').on('click', function() {
					$("#atf-portfolio-flters li").removeClass('filter-active');
					$(this).addClass('filter-active');

					portfolioIsotope.isotope({
						filter: $(this).data('filter')
					});
				});
			}); 
				

		
		//**===================Magnific Popup ===================**//

			var magnifPopup = function() {
				$('.atf-popup-img').magnificPopup({
					type: 'image',
					removalDelay: 300,
					mainClass: 'mfp-with-zoom',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: true, // By default it's false, so don't forget to enable it

						duration: 300, // duration of the effect, in milliseconds
						easing: 'ease-in-out', // CSS transition easing function

						// The "opener" function should return the element from which popup will be zoomed in
						// and to which popup will be scaled down
						// By defailt it looks for an image tag:
						opener: function(openerElement) {
							// openerElement is the element on which popup was initialized, in this case its <a> tag
							// you don't need to add "opener" option if this code matches your needs, it's defailt one.
							return openerElement.is('img') ? openerElement : openerElement.find('img');
						}
					}
				});
			};

			// Call the functions
			magnifPopup();
			
			 /* WOW Scroll Spy
			========================================================*/
			 var wow = new WOW({
				  //disabled for mobile
					mobile: false
				});

			wow.init();
		
		//**===================Testimonial Slider ===================**//
		
			$("#testimonial-slider").owlCarousel({
				margin:3,
				nav:false,
				loop:true,
				dots:true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});

        
})(jQuery);
