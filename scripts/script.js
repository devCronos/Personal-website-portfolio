/**
 * Created by Cronos on 4/26/2017.
 */
//smooth scrolling
    $('a[href*=\\#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
//scrollspy

$("#sc1").scrollspy({ offset: -150}); //errorish
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("#contactnav").toggleClass("active");
        $("#skillnav").toggleClass("active");
    }
});
//shadow
$(document).ready(function(){
    $(window).scroll(function(){
//will set shadow to appear after the intro image
        var position = $(window).scrollTop();
        if( position > $("#aboutme").offset()['top']-50 ){
            $("#top-shadow").css({'display':'block', 'opacity':position/20});
        }
        else {
            $("#top-shadow").css({'display':'none', 'opacity':position/20});
        }
    });
});
//hero parallax
$(window).scroll(function () {
    var position = $(window).scrollTop();
//        console.log(position);
//        console.log("'transform':'translate(0px,' + position/4 +'%)'");
    $('.hero-text').css({
        'transform':'translate(0px,' + position/9 +'%)'
    });
});

//new
$('#menu-button').click(function (e) {
    $('.collapse').css("display","none")
});
// jquey tooltip
$( function() {
    $( '#achievements' ).tooltip();
} );

//scroll reaveal
window.sr = ScrollReveal();
sr.reveal('#aboutme-text p',200);
sr.reveal('.ach-entry',200);
// sr.reveal('.foot-linker');

//google anal
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-98182310-1', 'auto');
ga('send', 'pageview');