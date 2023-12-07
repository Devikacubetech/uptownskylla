let scrollCount = 0;
AOS.init({
  once: true,
  easing: 'ease',
  offset: 20
});


const uptownNavbar = document.querySelector('.uptown_navbar');
const NavbarHeight = uptownNavbar.clientHeight;


window.addEventListener("scroll", function () {
  if (window.scrollY > NavbarHeight) {
    uptownNavbar.classList.add('stickyDiv');
    $('.uptown_navbar .logo-image img').css('max-height', '85px')
  } else {
    uptownNavbar.classList.remove('stickyDiv');
    $('.uptown_navbar .logo-image img').css('max-height', '135px')
  }
});

const secondoffcnvas = document.querySelector('.second-offcanvas');
const backarrows = document.querySelectorAll('.navbar-back-arrows');
const forwardsarrows = document.querySelectorAll('.navbar-forwards-arrows');
let whychooseus = document.querySelector('.why-choose-us-content');
let floorplan = document.querySelector('.floor-plan-content');


forwardsarrows[0].addEventListener('click', function () {
  secondoffcnvas.classList.add('second-offcanvas-show');
  floorplan.style.display = 'none';
  whychooseus.style.display = 'none';
  whychooseus.style.display = 'block';
})


forwardsarrows[1].addEventListener('click', function () {
  secondoffcnvas.classList.add('second-offcanvas-show');
  floorplan.style.display = 'none';
  whychooseus.style.display = 'none';
  floorplan.style.display = 'block';
})

backarrows[0].addEventListener('click', function () {
  secondoffcnvas.classList.remove('second-offcanvas-show');

})

backarrows[1].addEventListener('click', function () {
  secondoffcnvas.classList.remove('second-offcanvas-show');
})


const secondOffcanvas = document.querySelector('.second-offcanvas');

const bottomToTop = document.querySelector('.bottom-to-top-btn');

$(document).ready(function () {
  $(window).scroll(function () {

    if ($(window).scrollTop() > $(window).height()) {
      bottomToTop.style.display = 'block'
    } else {
      bottomToTop.style.display = 'none'
    }
  });
});


$(bottomToTop).click(function () {
  $('html').animate({ scrollTop: 0 });
});



$(document).ready(function () {
  var phoneInputID = '#phone1';
  var input = document.querySelector(phoneInputID);
  var iti = window.intlTelInput(input, {
    formatOnDisplay: true,
    hiddenInput: 'full_number',
    preferredCountries: ['es'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js',
  });

  $(phoneInputID).on('countrychange', function (event) {
    var selectedCountryData = iti.getSelectedCountryData();
    (newPlaceholder = intlTelInputUtils.getExampleNumber(
      selectedCountryData.iso2,
      true,
      intlTelInputUtils.numberFormat.INTERNATIONAL
    )),
      iti.setNumber('');
    mask = newPlaceholder.replace(/[1-9]/g, '0');
    $(this).mask(mask);
  });

  iti.promise.then(function () {
    $(phoneInputID).trigger('countrychange');
  });
});

$(document).ready(function () {
  var phoneInputID = '#phone2';
  var input = document.querySelector(phoneInputID);
  var iti = window.intlTelInput(input, {
    formatOnDisplay: true,
    hiddenInput: 'full_number',
    preferredCountries: ['es'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js',
  });

  $(phoneInputID).on('countrychange', function (event) {
    var selectedCountryData = iti.getSelectedCountryData();
    (newPlaceholder = intlTelInputUtils.getExampleNumber(
      selectedCountryData.iso2,
      true,
      intlTelInputUtils.numberFormat.INTERNATIONAL
    )),
      iti.setNumber('');
    mask = newPlaceholder.replace(/[1-9]/g, '0');
    $(this).mask(mask);
  });

  iti.promise.then(function () {
    $(phoneInputID).trigger('countrychange');
  });
});


var counted = {};

$(window).scroll(function () {

  $('.counter').each(function () {
    var $section = $(this);
    var sectionClass = $section.attr('class');

    if (!counted[sectionClass]) {
      var sectionTop = $section.offset().top - window.innerHeight;
      if ($(window).scrollTop() > sectionTop) {
        $section.find('.count').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count') || $this.attr('data-value'); // Support both data-count and data-value
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });

        counted[sectionClass] = true;
      }
    }
  });

});

$(function () {
  // Owl Carousel
  var owl = $("#owl-carousel-1");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
  });
});

$(document).ready(function () {
  var imageSlider = $("#making-living-image-slider");
  var textSlider = $("#making-living-text-slider");

  imageSlider.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
  });

  textSlider.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        nav: false
      },
      992: {
        nav: true
      },
    }
  });

  // Synchronize the navigation of both sliders
  imageSlider.on('changed.owl.carousel', function (event) {
    if (event.namespace && event.property.name === 'position') {
      var target = event.relatedTarget.relative(event.property.value);
      textSlider.owlCarousel('to', target, 300, true);
    }
  });

  textSlider.on('changed.owl.carousel', function (event) {
    if (event.namespace && event.property.name === 'position') {
      var target = event.relatedTarget.relative(event.property.value);
      imageSlider.owlCarousel('to', target, 300, true);
    }
  });
});




$(function () {
  // Owl Carousel
  var owl = $("#customer-review-slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        nav: false
      },
      992: {
        nav: true
      },
    }
  });
});

$(document).ready(function() {
  if ($('.ontime-bar-overlay').length > 0) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > ($('.ontime-bar-overlay').offset().top - window.innerHeight)) {
        $('.ontime-bar-overlay').css('width', '100%');
        $('.completion-bar-overlay').css('width', '80%');
      }
    });
  }
});
















