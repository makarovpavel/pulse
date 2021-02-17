/* slick */

$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              dots: true,
              arrows: false
              }
          }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    }

    toggleSlide('.catalog-item__link')
    toggleSlide('.catalog-item__back')

    // Модальные окна

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });

    

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });


  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символа")
        },
        phone: "Пожалуйста, введите свой номер телефон",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-9999");
  /* jQuery(function($){
    $("#date").mask("99/99/9999");
    $("#phone").mask("(999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
 }); */

  /* Smooth scroll and page up */

  $(window).scroll(function() {
    if($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();

});

  /* owl */

/* $(document).ready(function(){
  $('.carousel__inner').owlCarousel({
    items: 1,   
    loop: true, 
    margin: 10,
    nav: true,
    navText: [
      '<img src="img/left.png">',
      '<img src="img/right.png">'
    ],
    autoplay: true
  })
}); */

/* tini */

/* var slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false
});

document.querySelector('.prev').addEventListener('click', function() {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
  slider.goTo('next');
}); */

  