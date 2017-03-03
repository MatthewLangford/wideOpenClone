$(document).ready(function () {
    $(document).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('nav').css('background-color', '#ffffff');
            $('.button').css('color', '#697175');
            $('.topLogo').attr('src', 'http://wideopentech.com/themes/wot-2013-gm/_/img/wot-logo-dark.svg');
            $('.topLogo').css({'margin-top': '-8%', 'transition': '300ms'});
            $('.navButtons').css('margin-top', '1%');
        }
        if($(this).scrollTop() === 0){
            $('nav').css('background-color', "transparent");
            $('.button').css('color', 'white');
            $('.navButtons').css({'margin-top': '0%', 'margin-bottom': '4px'});
            $('.topLogo').css({'margin-top': '2.5vh', 'transition': '300ms'});
            $('.topLogo').attr('src', 'http://wideopentech.com/themes/wot-2013-gm/_/img/wot-logo-whitex2.svg');
        }
    });







}) ;