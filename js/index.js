/**
 * Created by kehan on 2017/7/16.
 */
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {$(".navbar-fixed-top").addClass("top-nav");
    }else {$(".navbar-fixed-top").removeClass("top-nav");}
})