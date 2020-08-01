$(function(){
if(window.matchMedia('(max-width: 1103px)').matches){
    var headers = $('.header-media');
    var header = $('header');
    header.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            headers.fadeIn();
        } else {
            headers.fadeOut();
        }
    });
}else{
    var header = $('header');
    header.show();
}
});