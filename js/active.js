(function($){
    'use strict';

    // This code is for partner area slider
    if($.fn.owlCarousel){
          var footer_partner_wrapper = $('.footer_partner_wrapper');
          footer_partner_wrapper.owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1000,
            smartSpeed: 1000,
            responsive:{
                1200:{
                    items: 5
                },
                992:{
                    items: 5
                },
                768:{
                    items: 5
                },
                300:{
                    items: 3
                },
                480:{
                    items: 5
                }
            }
        });
    }  // Partner area slider end


    // This code is for biographie single film slider
    if($.fn.owlCarousel){
          var biographie_single_film_wrapper = $('.biographie_single_film_wrapper');
          biographie_single_film_wrapper.owlCarousel({
            loop: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 0,
            smartSpeed: 1000,
            responsive:{
                1600: {
                    items: 8
                },
                1200:{
                    items: 6
                },
                992:{
                    items: 5
                },
                768:{
                    items: 4
                },
                300:{
                    items: 2
                },
                480:{
                    items: 3
                }
            }
        });
    }  // biographi page slider end

    // This code is for award area slider
    if($.fn.owlCarousel){
          var awards_slider_wrapper = $('.awards_slider_wrapper');
          awards_slider_wrapper.owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 3000,
            animateIn: "fadeInDown",
            animateOut: "fadeOutDown",
            mouseDrag: false,
            responsive:{
                1200:{
                    items: 1
                },
                992:{
                    items: 1
                },
                768:{
                    items: 1
                },
                300:{
                    items: 1
                },
                480:{
                    items: 1
                }
            }
        });
    }  // award area slider end

    // This code is for Hero area Countdown
    $('#clock').countdown('2018/10/27', function(event) {
        var $this = $(this).html(event.strftime(''
      + '<li>%D <span>days</span></li>  '
      + '<li>%H <span>hours</span></li>  '
      + '<li>%M <span>minutes</span></li>  '
      + '<li>%S <span>seconds</span></li> '));
    });  
    // countdown js end

    // This code is for CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // counter up js end

    // This code is for Magnetic Pop_Up
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
    // magnetic pop up end

    // This Code is for scroll bottom
    $(".scroll_down").on('click', function(){
        var $this = $(this);
        var sectionToSlide = $this.parents('.common_area').next();
        $('html, body').animate({ scrollTop:  sectionToSlide.offset().top + 1 }, 'slow');
    });
    // scroll bottom end

    // this code is for meanmenu
    $('.header_area .mainmenu nav').meanmenu();


    // This COde is for Animation
    var $revealClass = $('.reveal');
    $revealClass.css({
        'animation-name': 'none',
        'visibility': 'hidden'
    });
    $revealClass.waypoint(function (direction) {
        var animationName = $(this).attr('data-anim'),
            animDelay = $(this).attr('data-anim-delay'),
            animDuration = $(this).attr('data-anim-duration');
        $(this).css({
            'animation-name': animationName,
            'data-anim-duration': animDuration,
            '-webkit-animation-delay': animDelay,
            '-moz-animation-delay': animDelay,
            'animation-delay': animDelay,
            'visibility': 'visible'
        });
    },{
        offset: '90%'
    });



    // This Code is for Blog Carousel
    var blogCarousel1 = $('.blog-carousel1');
    blogCarousel1.owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        mouseDrag: false,
        autoplay: false,
        autoplaySpeed: 2000,
        nav: false,
        fluidSpeed: 2000,
        dotsSpeed: 500,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });   

    var blog_carousel1_center = $('.blog-carousel1 .owl-item.center');
    blog_carousel1_center.prev().addClass('prEv');
    blog_carousel1_center.next().addClass('neXt');

    blogCarousel1.on('translate.owl.carousel', function () {
        $('.owl-item').removeClass('prEv neXt');
    }).on('translated.owl.carousel', function () {
        blog_carousel1_center = $('.blog-carousel1 .owl-item.center');
        blog_carousel1_center.prev().addClass('prEv');
        blog_carousel1_center.next().addClass('neXt');
    });

    var blogCarousel2 = $('.blog-carousel2');
    blogCarousel2.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        dots: true,
        margin: 10,
        stagePadding: 0,
        dotsSpeed: 1000,
        smartSpeed: 2000
    });

    blogCarousel2.on('translate.owl.carousel', function (property) {
        blogCarousel1.find('.owl-dot:eq(' + property.page.index + ')').click();
    });
    blogCarousel1.on('translate.owl.carousel', function (property) {
        blogCarousel2.find('.owl-dot:eq(' + property.page.index + ')').click();
    });
    // Blog Carousel End



    // This Code is for Expedition slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.expeditation-slider2'
    });

    $('.expeditation-slider2').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    
    // Convert All Image to SVG
    $('img.svg').each(function () {
        var $img = $(this),
            imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');

    });
    
    
    //Ajax Contact Form Start
    var cForm = $('#ajaxForm'),
        formMessages = $('.response_messages');

	// Set up an event listener for the contact form.
	cForm.submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = cForm.serialize();
        
        function clearFormData(duration){
            setTimeout(function(){
                formMessages.html('');
            }, duration*1000);
        }
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: cForm.attr('action'),
			data: formData
		})
		.done(function(response) {
            formMessages.html('<h3>'+ response +'</h3>');
            cForm.find('[name]').val('');
            clearFormData(10);
		}).fail(function(jqXHR, textStatus) {
            formMessages.html('<h3>Something went wrong</h3>');
            clearFormData(5);
        });
	});
    
    
    // This code is for window load function
    $(window).on('load', function(){

        //this code is for Isotop mesonary
        var $portfolio = $('.gallery_items');
        $portfolio.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'packery',
            filter: '*'
        });
        
        $('.filter-menu li').on('click', function(){
            $('.filter-menu li').removeClass('current_menu_item');
            $(this).addClass('current_menu_item');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
        }); // Isotop mesonary end
        
        
        // This Code is for Preloader
        $('.preloader').fadeOut('slow');
        $('.preloader-bg').fadeOut('slow');
        // preloader js end
        
    });

})(jQuery);