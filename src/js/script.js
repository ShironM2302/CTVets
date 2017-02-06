$(document).ready(function(){

  $('.menu-btn').on('click', function(){
    $('.mobile-menu').toggleClass('slide-nav--js');
    $('.wrapper').toggleClass('slide-wrapper--js');
    $('.menu-btn').toggleClass('menu-btn--cross')
  })


  $('.box-container').slick({
    infinite: true,
    centerMode: true,
      centerPadding: '500px',
      slidesToShow: 1,
      arrows:true,
      dots: true,
       responsive: [
         {
           breakpoint: 1300,
           settings: {
             centerMode: true,
             centerPadding: '400px',
             slidesToShow: 1,
             arrows:true,
             dots: true
           }
         },
         {
           breakpoint: 1090,
           settings: {
             centerMode: true,
             centerPadding: '200px',
             slidesToShow: 1,
             arrows:false,
             dots: true
           }
         },
         {
           breakpoint: 800,
           settings: {
             centerMode: true,
             centerPadding: '150px',
             slidesToShow: 1,
             arrows:false,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             centerMode: true,
             centerPadding: '80px',
             slidesToShow: 1,
            arrows:false,
             dots: true
         }
       },
        {
          breakpoint: 550,
          settings: {
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1,
            arrows:false,
            dots: true
          }
        }

      ]

});


// google map


function initMap() {
        var london = {lat:51.508742, lng: -0.120850};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: london
        });
        var marker = new google.maps.Marker({
          position: london,
          map: map
        });
      }

      initMap();


//contact form

$('#name').keyup(function(){
$('.contact-form__name').addClass('typing--js');
if( $(this).val().length == 0 ) {
    $('.contact-form__name').removeClass('typing--js');
}
});

$('#email').keyup(function(){
$('.contact-form__email').addClass('typing--js');
if( $(this).val().length == 0 ) {
    $('.contact-form__email').removeClass('typing--js');
}
});

$('#message').keyup(function(){
$('.contact-form__message').addClass('typing--js');
if( $(this).val().length == 0 ) {
    $('.contact-form__message').removeClass('typing--js');
}
});











});
