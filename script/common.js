$(function () {
    // 메뉴 클릭시 해당 섹션이동
    $(".top1").click(function(){
        $("html").animate({
            scrollTop : $(".story").offset().top
        });
    });
    $(".top2").click(function(){
        $("html").animate({
            scrollTop : $(".product").offset().top
        });
    });
    $(".top3").click(function(){
        $("html").animate({
            scrollTop : $(".contents").offset().top
        });
    });
    $(".top4").click(function(){
        $("html").animate({
            scrollTop : $(".question").offset().top
        });
    });
    $(".top5").click(function(){
        $("html").animate({
            scrollTop : $(".care").offset().top
        });
    });

    // 탑버튼 
    $(".ttn").click(function(){
        $("html").animate({scrollTop : 0})
    });

    $(window).scroll(function(){
        let tt = $(document).scrollTop();
        // console.log(tt)
        if(tt > 1000){
            $(".ttn").css({display:'block'})
        } else{
            $(".ttn").css({display :'none'})
        }
    });
    
    // 햄버거바 
    $(".h_btn").click(function () {
        $(".h_menu").stop().animate({ right: '0' }, 1000);
    });

    $(".close").click(function () {
        $(".h_menu").stop().animate({ right: '-100%' }, 1000);
    });

    // story

    // contents
    $(".cicon_box>a").click(function () {
        if ($(this).attr("href") == "#") {
            return false;
        }
    });

    $(".ccicon img").on({
        mouseover: function (e) {
            $(e.target).css({ borderTop: '3px solid #ffc410', paddingTop :'10px' });
        },
        mouseout: function (e) {
            $(e.target).css({ borderTop: 'none' });
        }
    });

    $('.ccicon:nth-child(2)>img').click(function () {
        $('.c_box1').css({ zIndex: '7' });
        $('.c_box2').css({ zIndex: '9' });
        $('.c_box3').css({ zIndex: '8' });
        $('.cicon3>img').attr('src', '../main/img/main1920/main_contents_icon3.svg')
        $('.cicon2>img').attr('src', '../main/img/main1920/main_contents_icon2_1.svg')
        $('.cicon1>img').attr('src', '../main/img/main1920/main_contents_icon1_1.svg')
    });

    $('.ccicon:nth-child(3)>img').click(function () {
        $('.c_box1').css({ zIndex: '8' });
        $('.c_box2').css({ zIndex: '7' });
        $('.c_box3').css({ zIndex: '9' });
        $('.cicon3>img').attr('src', '../main/img/main1920/main_contents_icon3_1.svg')
        $('.cicon2>img').attr('src', '../main/img/main1920/main_contents_icon2.svg')
        $('.cicon1>img').attr('src', '../main/img/main1920/main_contents_icon1_1.svg')
    });

    $('.ccicon:nth-child(1)>img').click(function () {
        $('.c_box1').css({ zIndex: '9' });
        $('.c_box2').css({ zIndex: '8' });
        $('.c_box3').css({ zIndex: '7' });
        $('.cicon3>img').attr('src', '../main/img/main1920/main_contents_icon3.svg')
        $('.cicon2>img').attr('src', '../main/img/main1920/main_contents_icon2.svg')
        $('.cicon1>img').attr('src', '../main/img/main1920/main_contents_icon1.svg')
    });


    //care





});



