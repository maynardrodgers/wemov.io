var TIME_OUT = 100;

effect = function() {
  var effects = document.querySelectorAll(".reveal,.zoom,.reveal_left,.reveal_right,.face_out");

  for (var i = 0; i < effects.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = effects[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      effects[i].classList.add("active");
    } else {
      effects[i].classList.remove("active");
    }
  }
}

window.onscroll = function() {
  setTimeout(function(){ effect(); }, TIME_OUT);
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

  //first load 
  setTimeout(function(){ effect(); }, TIME_OUT);
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
  preloadImages: false,
  lazy: true,
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows : false,
  }
} );
