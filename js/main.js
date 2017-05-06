
$(document).ready(function(){
    $('body').css({width:$(window).width(),height:$(window).height()});
});
window.onload=function(){
    document.getElementById('music').play(); 
    document.addEventListener("WeixinJSBridgeReady", function () { 
        document.getElementById('music').play(); 
    }, false);
}
$('#musicbtn').click(function(){
    if($(this).hasClass("play")){
        $(this).css("animation-play-state","paused").removeClass("play");
        $('#music')[0].pause();
    }else{
        $(this).css("animation-play-state","running").addClass("play");
        $('#music')[0].play();
    }
});
var mySwiper = new Swiper('.swiper-container', {
    pagination : '.swiper-pagination',
    onSlideChangeStart: function(swiper){
        $('.swiper-slide').eq(swiper.activeIndex).addClass("animate").siblings().removeClass("animate");
        if(swiper.activeIndex==7){
            $('#button').hide();
        }else{
            $('#button').show();
        }
    }
});
