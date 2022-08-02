var TIME_OUT = 100;

reveal = function() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.onload = function() {
  $.ajax({url: "https://api.wemov.io/tot/info", success: function(result){
    $('#id_tot_distance').html(result.totDistance*1000);
    $('#id_tot_user').html(result.totRuns);
    $('#id_tot_kr').html(result.totKr);
  }});


  $('#id-menu-mobile-open').click(function(){
    $('#id-menu-body').removeClass('hide');
  });

  $('#id-menu-mobile-close').click(function(){
    $('#id-menu-body').addClass('hide');
  });

  //scrol for buttion up
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('#btn-up').removeClass('hide');
  } else {
      $('#btn-up').addClass('hide');
  }

  $('#btn-up').click(function(){
    topFunction();
  })
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var swiper = new Swiper( '.swiper-container.two', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  effect: 'coverflow',
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows : false,
  }
} );
