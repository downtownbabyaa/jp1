$(document).ready(function(){
    $(".header .headbottom .leftMenu a, .header .headbottom .rightMenu a").hover(function(){
        $(this).removeClass("text-gray");
        $(this).siblings().addClass("text-gray");
    });
    $(".header .headbottom .leftMenu, .header .headbottom .rightMenu").mouseleave(function(){
        $(this).children('a').removeClass("text-gray");
    });
    $('.titleBox ul').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: true,
        swipe: false,
      });
    $('.subBar').slick({
        autoplay: false,
        infinite: false,
        arrows: true,
        swipe: false,
    });
    
})