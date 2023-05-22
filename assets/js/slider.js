(function ($) {
  $(document).ready(function () {
    $(".slider-hero").slick({
      dots: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    });
  });
})(jQuery);
