$(document).ready(function() {
  const arr = ["find-company", "find-meeting", "find-source"];

  function closeAllTab() {
    arr.forEach(item => {
      $("#" + item).css("display", "none");
    });
  }

  arr.forEach(item => {
    const tabItem = $("input[aria-controls = " + item + "]");
    const tabItemCheck = $("input[aria-controls = " + item + "]:checked");
    if (tabItemCheck.length > 0) {
      $("#" + item).css("display", "block");
    }
    tabItem.click(function() {
      closeAllTab();
      $("#" + item).css("display", "block");
    });
  });

  $(".main-single-item").slick({
    slidesToShow: 1.7,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    arrows: false,
    dotsClass: "slick-dots-slide",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  const sliderSelector = $(".single-item");

  sliderSelector.slick({
    dots: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    dotsClass: "slick-dots-slide",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "80px"
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px"
        }
      }
    ]
  });

  sliderSelector.on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".section-slide .content .item").each(function(index) {
      if (nextSlide === index) {
        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    });
  });

  var $window = $(window);
  var $pane = $("#pane1");

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize < 768) {
      $(".pick-up-company-slide").slick({
        speed: 500,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "80px",
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "80px"
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "20px"
            }
          }
        ]
      });
    }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  $('.menu-close').on('click', () => {
    $('.meidai-header-menu').removeClass('active');
  })
});
