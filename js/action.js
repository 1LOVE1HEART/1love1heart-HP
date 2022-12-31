// $('#header').load('./header.html');
// $('footer').load('./footer.html');



$('.videoSlider').owlCarousel({

  loop: true,
  margin: 100,
  dots: false,
  stagePadding: 300,
  nav:true,
  navText:['<img src="images/slick__prev__v.png">','<img src="images/slick__next__v.png">'],
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  items: 1,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          stagePadding: 30,
          margin: 20,
        
      },
      600:{
          items:2,
          nav:false,
          stagePadding: 30,
          margin: 20,
        
      },
      1000:{
          items:1,
         
        
      }
  }

});



$('.page--top-wrap a').click(function(){
  $('html,body').animate({
    'scrollTop': '0'
  }, 350)
});


$(window).scroll(function(){
  if ($(window).scrollTop() < ($(window).height()-50)){
    $('.page--top-wrap').fadeOut(350);
  }else{
    $('.page--top-wrap').fadeIn(350);
  }
});

$('#monMenu').click( ()=> {
  $('#mobNav').slideToggle(500);
})




