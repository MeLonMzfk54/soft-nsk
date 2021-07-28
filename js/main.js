$(document).ready(function(){

    
    $(".header__burger").on('click',function(){
        $(this).toggleClass("active");
        $(".header__menu").toggleClass("active");
    });

    $(".order__wrapper").on('click',function(){
        $(".order__arrow").toggleClass("active");
        $(this).toggleClass("active");
    });

    $("#sel").on("focusout",function(){
        $("#sel").removeAttr("size");
        $("#sel").css("padding-top","0px");
        $(".order__arrow").removeClass("active");
        $('.order__wrapper').removeClass("active");
    });

});