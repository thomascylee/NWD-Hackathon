$(document).ready(function(){
    $('.toggle-frame').on('click', function(){
        $('.navbar-list').addClass('visible');
        var shift = 0 - $(window).scrollTop();
        $('#wrapper').addClass('fixIt').css('top', shift);
    })
})