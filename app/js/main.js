$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  $(".star").rateYo({
    starWidth: "17px", /* ширина звезды */
    normalFill: "#ccccce", /* цвет не закрашенной звезды */ 
    ratedFill: "#ffc35b",  /* цвет закрашенной звезды */ 
    readOnly: true, /* нельзя изменить рейтинг */  
  });

});