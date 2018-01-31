$(document).ready(function () {

    /* Gallery Filter
    ========================================================================== */
    //initialize the filterizd
    var filterizd = $('.filtr-container').filterizr({});
    filterizd.filterizr('setOptions', {delay: 20, delayMode: 'progressive'});
    filterizd.filterizr('setOptions', {layout: 'sameSize'});


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
    })


    // Scroll down & activate NAV Menu======================
    //
    // var navChildren = $("#top-menu li").children();
    // var aArray = [];
    // for (var i = 0; i < navChildren.length; i++) {
    //     var aChild = navChildren[i];
    //     var ahref = $(aChild).attr('href');
    //     aArray.push(ahref);
    // }
    //
    // $(window).scroll(function() {
    //     var windowPos = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     var docHeight = $(document).height();
    //     for (var i = 0; i < aArray.length; i++) {
    //         var theID = aArray[i];
    //         var secPosition = $(theID).offset().top;
    //         secPosition = secPosition - 135;
    //         var divHeight = $(theID).height();
    //         divHeight = divHeight + 90;
    //         if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
    //             $("a[href='" + theID + "']").parent().addClass("active");
    //         } else {
    //             $("a[href='" + theID + "']").parent().removeClass("active");
    //         }
    //     }
    // });
});
