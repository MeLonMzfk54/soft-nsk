$(document).ready(function(){

    $(".header__burger").on('click',function(){
        $(this).toggleClass("active");
        $(".header__menu").toggleClass("active");
    });

    $("#sel").on('click',function(){              
        $(".order__arrow").toggleClass("active");
        $(this).toggleClass("active");
    });

    $("#sel").on("focusout",function(){
        $(".order__arrow").removeClass("active");
        $(this).removeClass("active");
    });

    $(".scroll__link").on('click',function(e){
        e.preventDefault();
        let top = $($(this).attr("data-scroll")).offset().top;
        $(".header__burger").removeClass("active");
        $(".header__menu").removeClass('active');
        $("html, body").animate({scrollTop: top}, 500);
    });

    $('.order__res').text($(".order__range").val() + " %");
    $(".order__range").on("input change",function(){
        $(".order__res").html($(this).val() + " %");
    });
});