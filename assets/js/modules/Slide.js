export function slide() {
  $(document).ready(function () {
    $('.top-slide').slick({
      arrows: true,
      dots: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      variableWidth: true
    });
  });
}