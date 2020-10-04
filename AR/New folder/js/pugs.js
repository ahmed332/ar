$(document).ready(function(){
    var nav = $('.navbar.navbar-dark');
    var fixedTop = 'fixed-top';
    var headerHeight = $('#header').height();
    $(window).scroll(function(){
        if($(window).scrollTop() > headerHeight)
        nav.addClass(fixedTop);
        else
        nav.removeClass(fixedTop);
    })

    $(function() {
        $('nav li a').click( function() {
            $(this).parent().siblings().children().removeClass('active');
            $(this).addClass('active');
        });
    });





})


var coverHeight = $('#cover-image').height();
$(window).scroll(function(){


    if($(window).scrollTop() >coverHeight )
    $('#backtotop').addClass('visible')
    else{
        $('#backtotop').removeClass('visible')

        
    }




})