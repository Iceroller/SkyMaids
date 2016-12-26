(function($) {
    $(function(){
        slider();
        readme();
        /*This area from init Function*/
    });


    function readme(){

        $(function() {

            var $dot5 = $('.readme');
            $dot5.append( ' <a class="toggle" href="#"><span class="open">[ + ]</span><span class="close">[ - ]</span></a>' );


            function createDots()
            {
                $dot5.dotdotdot({
                    after: 'a.toggle'
                });
            }
            function destroyDots() {
                $dot5.trigger( 'destroy' );
            }
            createDots();

            $dot5.on(
                'click',
                'a.toggle',
                function() {
                    $dot5.toggleClass( 'opened' );

                    if ( $dot5.hasClass( 'opened' ) ) {
                        destroyDots();
                    } else {
                        createDots();
                    }
                    return false;
                }
            );



        });

    }

    function slider(){

        jQuery(function($) {
            var el, set, timeRemain, sliderContinue;


            // App
            var Application = {

                settings: {
                    sliderAutoplaySpeed: 3500,
                    sliderSpeed: 2000
                },

                elements: {
                    slider: $('#slick'),
                    slickAllThumbs: $('.slick-dots button'),
                    slickActiveThumb: $('.slick-dots .slick-active button')

                },

                init: function() {
                    set = this.settings;
                    el = this.elements;


                    this.slider();

                },

                /**
                 * Slider
                 */
                slider: function() {

                    el.slider.on('init', function() {
                        $(this).find('.slick-dots button').text('');
                        Application.dotsAnimation();

                    });

                    el.slider.slick({
                        arrows: false,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: set.sliderAutoplaySpeed,
                        fade: true,
                        speed: set.sliderSpeed,
                        cssEase: 'linear',
                        pauseOnHover: true,
                        pauseOnDotsHover: false,
                        adaptiveHeight: true
                    });

                    $('.slick-dots').hover(
                        function() {
                            var trackWidth = $('.slick-dots .slick-active button').width();
                            $('.slick-dots .slick-active button').stop().width(trackWidth);
                            el.slider.slick('slickPause');
                            clearTimeout(sliderContinue);
                        },
                        function() {
                            Application.dotsAnimation(timeRemain);
                            var trackWidth = $('.slick-dots .slick-active button').width();


                            sliderContinue = setTimeout(function() {
                                el.slider.slick('slickNext');
                                el.slider.slick('slickPlay');
                            }, timeRemain);
                        }
                    );

                    el.slider.on('beforeChange', function() {
                        $('.slick-dots button').stop().width(0);
                    });

                    el.slider.on('afterChange', function() {
                        $('.slick-dots button').width(0);
                        Application.dotsAnimation();
                    });

                },

                /**
                 *
                 * @param remain {number}
                 */

                dotsAnimation: function(remain) {

                    if (remain) {
                        var newDuration = remain;
                    } else {
                        var newDuration = set.sliderAutoplaySpeed;
                    }

                    $('.slick-dots .slick-active button').animate({ width: '100%' },
                        {
                            duration: newDuration,
                            easing: 'linear',
                            step: function(now, fx) {
                                var timeCurrent = Math.round((now*set.sliderAutoplaySpeed)/100);
                                timeRemain = set.sliderAutoplaySpeed - timeCurrent;
                            }
                        }
                    );
                },







            };



            //Init
            Application.init();


            $(window).load(function() {
                $('.slick-slide .img--holder').height($(window).height());
            });

            $(window).resize(function() {
                $('.slick-slide .img--holder').height($(window).height());
            });

        });


        $('.slider .wrap').slick({
            аccessibility: false,
            autoplay: true,
            autoplaySpeed: 2600,
            arrows: true,
            pauseOnHover: true,
            slidesToShow: 4,
            adaptiveHeight: true
        });


        $('.wrap').on('beforeChange', function(event, slick, currentSlide, previousSlide){
        });
    }


    /*This area from declaration plugins*/
})(jQuery);

         
//
//
//
//
//
//
//
//
//            $('.fade').slick({
//                dots: false,
//                infinite: true,
//                speed: 500,
//                fade: true,
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                autoplay: true,
//                autoplaySpeed: 2000,
//                cssEase: 'linear'
//            });        
//            
//            
//    /*This area from declaration plugins*/
//})(jQuery);

