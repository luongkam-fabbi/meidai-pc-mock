$(document).ready(function() {
    const sliderSelector = $('.single-item');

    sliderSelector.slick({
        dots: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        dotsClass: 'slick-dots-slide'
    });

    sliderSelector.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.section-slide .content .item').each(function(index) {
            if (nextSlide === index) {
                $(this).css("display", "block");
            } else {
                $(this).css("display", "none");
            }
        });
    });
});