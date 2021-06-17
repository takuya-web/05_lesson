$(function(){
  $(".p-banner__slick").slick({
  autoplay: true,
  arrows: true,
  slidesToShow: 2,
  inifinite: true,

  responsive: [{
    breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrow: false,
      }
    }]
  });
});