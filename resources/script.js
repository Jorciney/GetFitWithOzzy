$(document).ready(function () {

    var filterizd = $('.filtr-container').filterizr({
        //options object
    });
    filterizd.filterizr('setOptions', {delay: 20, delayMode: 'progressive'});
    // filterizd.filterizr('setOptions', {layout: 'sameHeight'});
    filterizd.filterizr('setOptions', {layout: 'sameSize'});
});