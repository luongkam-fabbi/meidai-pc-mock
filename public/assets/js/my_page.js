$(document).ready(function () {
    const arr = ["find-company", "find-meeting", "find-source"];

    function closeAllTab() {
        arr.forEach(item => {
            $("#" + item).css('display', 'none');
        });
    }

    arr.forEach(item => {
        const tabItem = $("input[aria-controls = " + item + "]");
        const tabItemCheck = $("input[aria-controls = " + item + "]:checked");
        if (tabItemCheck.length > 0) {
            $("#" + item).css('display', 'block');
        }
        tabItem.click(function () {
            closeAllTab();
            $("#" + item).css('display', 'block');
        });
    });

    $('.main-single-item').slick({
        slidesToShow: 1.7,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        arrows: false,
        dotsClass: 'slick-dots-slide'
    });

    $('.single-item').slick({
        dots: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        dotsClass: 'slick-dots-slide'
    });
});