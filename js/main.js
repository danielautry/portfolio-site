window.onload = function(){
   // Animate loader off screen
     $(".Preload").fadeOut("slow");
     $("body").css('overflow', 'visible');
   };

function scrollToPortfolio() {
   $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 1000);
   return false;
}
  
// ADD IN FUNCTION IF ANIMATE.CSS CAN'T LOAD
$(function() {
   $('#Menu--home').addClass('animated fadeIn');
   $('.Container--main').addClass('animated fadeIn');
   $('#Container--main_text').addClass('animated fadeIn slow');

   var wndw = $(window);
   wndw.scroll(function () {
      // console.log($(wndw).scrollTop());
      var $main = $(this).scrollTop();
      var project1 = 600;
      var project2 = 1200;
      var project3 = 1800;
      var project4 = 2500;
      var project5 = 3100;
      var about = 3800;
      var writings = 4400;
      var contact = 5200;

      if ($main >= $('#portfolio').offset().top) {
         $('.Menu--js').css('visibility', 'visible');
         $('.Menu--js').css('opacity', '1');
         $('.Menu--main').css('visibility', 'hidden');
         $('.Menu--main').css('opacity', '0');
      }

      if ($main < $('#portfolio').offset().top) {
         $('.Menu--js').css('visibility', 'hidden');
         $('.Menu--js').css('opacity', '0');
         $('.Menu--main').css('visibility', 'visible');
         $('.Menu--main').css('opacity', '1');
      }

      if ($main > project1) {
         $('#Container--1').addClass('animated fadeIn');
      }

      if ($main > project2) { 
         $('#Container--2').addClass('animated fadeIn');
      }

      if ($main > project3) { 
         $('#Container--3').addClass('animated fadeIn');
      }

      if ($main > project4) { 
         $('#Container--4').addClass('animated fadeIn');
      }

      if ($main > project5) { 
         $('#Container--5').addClass('animated fadeIn');
         $('#dan').addClass('animated fadeIn');
         $('#babylon').addClass('animated fadeIn');
         $('#radical').addClass('animated fadeIn');
         $('#cullop').addClass('animated fadeIn');
         $('#recharge').addClass('animated fadeIn');

      }

      if ($main > about) { 
         $('#Container--6').addClass('animated fadeIn');
      }

      if ($main > writings) { 
         $('#Container--7').addClass('animated fadeIn');
      }

      if ($main > contact) { 
         $('#Container--8').addClass('animated fadeIn');
      }
  });
});