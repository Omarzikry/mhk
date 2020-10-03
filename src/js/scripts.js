$(document).ready(function () {
  // hero slider
  $(".hero-slider").slick({
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: function () {
      return '<span class="dot"></span>';
    },
    dotsClass: "hero-dots",
    pauseOnHover: false,
  });

  // customer reviews slider
  $(".customer-slider").slick({
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<img src="./assets/imgs/left-chevron.svg" class="prev-arrow" />',
    nextArrow:
      '<img src="./assets/imgs/right-chevron.svg" class="next-arrow" />',
  });
  // toggle side menu
  $(".nav-toggle").click(function () {
    $(".nav").toggleClass("open");
    $(".nav-toggle").toggleClass("open");
    $(".side-menu").toggleClass("open");
    $("body,html").toggleClass("overflow-hidden");
  });
});
