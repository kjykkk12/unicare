$(function () {

    // 탑버튼 
    $(".ttn").click(function () {
        $("html").animate({ scrollTop: 0 })
    });

    $(window).scroll(function () {
        let tt = $(document).scrollTop();
        // console.log(tt)
        if (tt > 1000) {
            $(".ttn").css({ display: 'block' })
        } else {
            $(".ttn").css({ display: 'none' })
        }
    });

    // 햄버거바     
    $(".h_btn").click(function () {
        $(".h_menu").stop().animate({ right: '0' }, 1000);
    });

    $(".close").click(function () {
        $(".h_menu").stop().animate({ right: '-100%' }, 1000);
    });

    $(window).resize(function () {
        let wWidth = $(window).width();
        // console.log(wWidth)
        if (wWidth > 1005) {
            $(".h_menu").css({ display: 'none' });
        } else {
            $(".h_menu").css({ display: 'block' });
        }
    });

    // contents
    $(".cicon_box>a").click(function () {
        if ($(this).attr("href") == "#") {
            return false;
        }
    });

    // $(".ccicon img").on({
    //     mouseover: function (e) {
    //         $(e.target).css({ borderTop: '3px solid #ffc410', paddingTop: '10px' });
    //     },
    //     mouseout: function (e) {
    //         $(e.target).css({ borderTop: 'none' });
    //     }
    // });

    $('.ccicon:nth-child(2)>img').click(function () {
        $('.c_box1').css({ zIndex: '7' });
        $('.c_box2').css({ zIndex: '9' });
        $('.c_box3').css({ zIndex: '8' });
    });

    $('.ccicon:nth-child(3)>img').click(function () {
        $('.c_box1').css({ zIndex: '8' });
        $('.c_box2').css({ zIndex: '7' });
        $('.c_box3').css({ zIndex: '9' });
    });

    $('.ccicon:nth-child(1)>img').click(function () {
        $('.c_box1').css({ zIndex: '9' });
        $('.c_box2').css({ zIndex: '8' });
        $('.c_box3').css({ zIndex: '7' });
    });


    //care
    $(".ca_subbox>figure>a").click(function () {
        if ($(this).attr("href") == "#") {
            return false;
        }
    });

    $(window).resize(function () {
        if ($(window).width() < 1025) {
            // 메인 슬라이드 
            $(".ca_box").slick({
                autoplay: true,
                autoplaySpeed: 2000,
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: 'unslick'
                    }
                ]
            })
        } else {
            // window 크기가 1024보다 클때
            $(".ca_subbox>figure>a>img").on({
                mouseover: function () {
                    $(this).css({ transform: 'scale(1.2)', opacity: '50%', padding: ' 25px 10px', transition: '1s' });
                },
                mouseout: function () {
                    $(this).css({ transform: 'scale(1)', opacity: '100%', padding: ' 0', transition: '1s' });
                }
            });
        }
    });


    $(window).resize(function () {
        if ($(window).width() < 1025) {
            // 메인 슬라이드 
            $(".ca_box").slick({
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover : true,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: 'unslick'
                    }
                ]
            })
        } else {
            // window 크기가 1024보다 클때
            $(".ca_subbox>figure>a>img").on({
                mouseover: function () {
                    $(this).css({ transform: 'scale(1.2)', opacity: '50%', padding: ' 25px 10px', transition: '1s' });
                },
                mouseout: function () {
                    $(this).css({ transform: 'scale(1)', opacity: '80%', padding: ' 0', transition: '1s' });
                }
            });

        }
    });


    //
});



