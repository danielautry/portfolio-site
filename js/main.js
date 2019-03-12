window.onload = function(){
   // Animate loader off screen
     $(".preload").fadeOut("slow");
     $("body").css('overflow', 'visible');
   };
   $(function() {
    $(".menu").click(function() {
      if ($("#navigation").hasClass("hidden")) {
        $("#navigation").attr("class", "visible animated fadeIn");
      } else {
        $("#navigation").attr("class", "hidden animated fadeOut");
      }
      $(this).toggleClass("open");
    });
  
   //  $("#navigation").click(function() {
   //    if ($("#navigation").hasClass("visible")) {
   //      $(".menu").toggleClass("open");
   //    } else {
   //    }
   //    $(this).attr("class", "slideOutLeft hidden");
   //  });
  
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        if ($("#navigation").hasClass("visible")) {
          $(".menu").toggleClass("open");
        } else {
        }
        $("#navigation").attr("class", "animated slideOutRight hidden");
      }
    });
  });
  
// ADD IN FUNCTION IF ANIMATE.CSS CAN'T LOAD
$(function() {
   $('#Menu--home').addClass('animated fadeIn');
   $('.Container--main').addClass('animated fadeIn');
   $('#Container--main_text').addClass('animated fadeIn slow');
   var wndw = $(window);
   wndw.scroll(function () {
      console.log($(window).scrollTop());
      var $main = $(this).scrollTop();
      var $projectContainer = $('.CaseStudy');
      var $highLine = $('#HighLine');
      var $jumpbox = $('#Jumpbox');
      var $propel = $('#Propel');
      var $mindbrush = $('#Mindbrush');
      var $goldman = $('#Goldman');
      var $fei = $('#FEI');

      var project1 = 600;
      var project2 = 1200;
      var project3 = 1800;
      var project4 = 2500;
      var project5 = 3100;
      var about = 3800;
      var writings = 4400;
      var contact = 5200;

   // console.log($("#Jumpbox").offset().top);
   // $window = $(window);
      if ($main >= $('#Elliewood--project').offset().top) {
         $('#Menu--js').css('visibility', 'visible');
         $('#Menu--js').css('opacity', '1');
      }

      if ($main < $('#Elliewood--project').offset().top) {
         $('#Menu--js').css('visibility', 'hidden');
         $('#Menu--js').css('opacity', '0');
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
         $('#radical').addClass('animated fadeIn');
         $('#recharge').addClass('animated fadeIn');
         $('#cullop').addClass('animated fadeIn');
         $('#hc').addClass('animated fadeIn');
         $('#babylon').addClass('animated fadeIn');
         $('#fei').addClass('animated fadeIn');
         $('#storyware').addClass('animated fadeIn');
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

/**
 * This was built using the scrollie jQuery Plugin
 * https://github.com/Funsella/jquery-scrollie
 */

// dont use this for final version

// $( window ).ready(function() {

//     // var wHeight = $(window).height();

//     $('.Container')
//       // .height(wHeight)
//       .scrollie({
//         scrollOffset : -50,
//         scrollingInView : function(elem) {

//           var bgColor = elem.data('background-color');

//           $('.Container--project').css('background-color', bgColor);

//         }
//       });

//       // $('.Pane')
//       //   .height(wHeight)
//       //   .scrollie({
//       //     scrollOffset : -50,
//       //     scrollingInView : function(elem) {
//       //
//       //       var bgColorInner = elem.data('background-color');
//       //
//       //       $('.Pane').css('background-color', bgColorInner);
//       //
//       //     }
//       //   });

//   });
