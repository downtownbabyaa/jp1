$(document).ready(function(){
    $(".leftMenu a, .rightMenu a").hover(function(){
        $(this).removeClass("text-gray");
        $(this).siblings().addClass("text-gray");
        
    });
    $(".leftMenu a, .rightMenu a").mouseleave(function(){
        $('.leftMenu a, .rightMenu a').removeClass("text-gray");
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
    // $('.adList').slick({
        

    // });
    $(".header .headbottom .leftMenu a:nth-child(2)").hover(function(){
        $('#otherMenu').remove();
        $(this).append('<div id="otherMenu"><ul><li><a href="">절찬 채용중 👀</a></li><li><a href="">취업꿀팁 대방출 🔥</a></li></ul></div>');
        $(this).mouseleave(function(){
            $('#otherMenu').remove();
        });
    });
    $('.loginBtn').click(function(){
        $("#loginBox").remove();
        $('.body').prepend('<div id="loginBox"></div>').addClass('lock');
        $('#loginBox').hide();
        $('#loginBox').append('<div class="auto"><h1>반가워요<span class="boldText block">점핏에서 커리어점프해요!</span></h1><p class="emailText">이메일</p><input type="text" name="email" id="email" placeholder="이메일을 입력해 주세요." required/><div class="autoCheck flex"><input type="checkbox" name="" id="autoComplete"><p class="autoText">자동 로그인</p></div><button class="loginBtn" type="submit">점핏 시작하기</button><div class="snsLbox"><span class="snsLine"></span><p class="snsText">SNS로 3초만에 로그인</p><span class="snsLine"></span></div><div class="snsLogin"><a href=""></a><a href=""></a><a href=""></a><a href=""></a></div><p class="help">기업 고객이신가요?<a href="">기업서비스 바로가기</a></p></div>');
        $('#loginBox').fadeIn(500);
        $('#loginBox div:first-child').prepend('<button class="closeLogin"></button>');
        $('.closeLogin').click(function(){
            $("#loginBox").fadeOut(500);
            $('.body').removeClass('lock');
        });
        return false;
        
    })
    

})