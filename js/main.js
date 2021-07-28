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
        $(this).removeAttr("size");
        $(this).css("padding-top","0px");
        $(".order__arrow").removeClass("active");
        $(this).removeClass("active");
    });

});