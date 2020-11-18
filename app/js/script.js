console.log('hey');

// OWL CAROUSEL ADDED
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

  var owl = $('.owl-carousel');
    owl.owlCarousel({
    rtl:true,
    items:5,
    loop:true,
    margin:70,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    autoHeight:true
});

