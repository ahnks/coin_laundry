$(function(){
    $(".main>li").hover(function(){
        $(this).children(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })//메뉴 호버시 나오는 서브메뉴




    $(function(){
        var btn = $(".m_menu_btn")
        var menu = $(".m_menu")

        btn.click(function(){
            if (btn.hasClass("on")){
                btn.removeClass("on")
                menu.removeClass("on")
                $(".m_menu_bg").hide()
            }else{
                btn.addClass("on")
                menu.addClass("on")
                $(".m_menu_bg").show()
            }
        })//
    })
    //모바일 메뉴 버튼
    $(function(){
        $(".m_menu>li").hover(function(){
            $(this).children(".m_sub").stop().slideDown()
        },function(){
            $(".m_sub").stop().slideUp()
        })
    })


    $(window).scroll(function(){
        var top=$(this).scrollTop()
        console.log("top:",top)

        if(top>300){
            $(".location ul li").each(function(i){
                setTimeout(function(){
                    $(".location ul li").eq(i).addClass("ani")
                },i*200)
            })
        }else{
            $(".location ul li").each(function(i){
                setTimeout(function(){
                    $(".location ul li").eq(i).removeClass("ani")
                },i*200)
            })
        }//매장찾기 애니메이션


        if(top>1600){
            $(".guide ul li img").each(function(i){
                setTimeout(function(){
                    $(".guide ul li img").eq(i).addClass("ani")
                },i*200)
            })
            $(".g_text").each(function(i){
                setTimeout(function(){
                    $(".g_text").eq(i).addClass("ani")
                },i*400)
            })
        }else{
            $(".guide ul li img").each(function(i){
                setTimeout(function(){
                    $(".guide ul li img").eq(i).removeClass("ani")
                },i*200)
            })
            $(".g_text").each(function(i){
                setTimeout(function(){
                    $(".g_text").eq(i).removeClass("ani")
                },i*400)
            })
        } //이용안내 애니메이션

        if(top>2400){
            $(".franchise ul li").each(function(i){
                setTimeout(function(){
                    $(".franchise ul li").eq(i).addClass("ani")
                },i*300)
            })//
        }else{
            $(".franchise ul li").each(function(i){
                setTimeout(function(){
                    $(".franchise ul li").eq(i).removeClass("ani")
                },i*300)
            })
        }//창업안내 애니메이션

    })//스크롤시 애니메이션


    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2500,
        dots:true,
        arrows:true,
    })//슬라이드

    $(".close").click(function(){
        $(".popup").hide()
    })//팝업닫기

})//