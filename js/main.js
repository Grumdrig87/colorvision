jQuery(document).ready(function($) {
  
  

  //adaptive
  if ($(window).width() < 994) {
    $('[data-footwrap]').after('<div class="footer__mob-wrap df fdc aic"></div>');
    $('[data-history]').appendTo('.footer__mob-wrap');
    $('[data-soc]').appendTo('.footer__mob-wrap');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
          $('[data-header]').addClass('fix')
      } else {
        $('[data-header]').removeClass('fix')
      };
      if ($(window).scrollTop() + $(window).height() < $('.footer').offset().top && $(window).scrollTop() > 0) {
        $('[data-btn]').addClass('show')
      } else {
        $('[data-btn]').removeClass('show')
      }
    })

  }
  


// slide to id
$('[data-scroll]').on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
    
})