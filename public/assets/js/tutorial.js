$(document).ready(function() {
  $(".tutorial-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 20000,
    autoplay: true,
    arrows: false,
    dotsClass: "slick-dots-slide",
  });

  $(".tutorial2-slideee").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    dotsClass: "slick-dots-slide"
  });
});
