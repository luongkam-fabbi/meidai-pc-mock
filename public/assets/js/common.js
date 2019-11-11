$(document).ready(function () {
    const elmScrollTop = '#up-to-top';

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(elmScrollTop).fadeIn();
        } else {
            $(elmScrollTop).fadeOut();
        }
    });

    $(elmScrollTop).click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});
