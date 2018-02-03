$(document).ready(function () {

    /* Gallery Filter =========================================================*/
    //initialize the filterizd
    var filterizd = $('.filtr-container').filterizr({});
    filterizd.filterizr('setOptions',
        {
            filter: 'coaching', // this is the default filtering
            delay: 20,
            delayMode: 'progressive',
            layout: 'sameSize'
        });


    //Activate Current Gallery Filter
    // =========================================================================
    $('.filtr-button').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    // ===== Scroll to Top ====
    var offset = 200;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('#return-to-top').fadeIn(400);
        } else {
            $('#return-to-top').fadeOut(400);
        }
    });

    $('#return-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // =====================================================
    // SCROLL on buttons
    // =====================================================
    $('.js--scroll-to-price').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-prices').offset().top}, 1000);
    });
    $('.js--scroll-to-services').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000);
    });
    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });


    // Scroll down & activate NAV Menu==========================================
    //
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').unbind().animate({
                    scrollTop: target.offset().top - 40
                }, 'slow');

                //Activate Current Nav Menu=================================================
                $('a').each(function () {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');

                return false;
            }
        }
    });

    // ON PAGE SCROLL
    // =========================================================================
    var sections = $('.js--page-section')
        , nav = $('.main-nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height - 30,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
});
