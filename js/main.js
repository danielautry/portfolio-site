$(function() {
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

      var project1 = 400;
      var project2 = 600;
      var project3 = 1600;
      var project4 = 2100;
      var project5 = 2800;
      var project6 = 3000;

   // console.log($("#Jumpbox").offset().top);
   // $window = $(window);
      if ($main > project1) {
         $('#Pane--1').css('opacity', '1');
         // $('#Pane--1').addClass('animated bounceInUp slow');
         $('#Container-pic--1').css('opacity', '1');
         // $('#Container-pic--1').addClass('animated bounceInUp slow');
         // $('#Container-text--1').addClass('animated fadeIn slower');
         // $('#Container-text--1').css('opacity', '1');
         $('#Container-text--1').addClass('animated fadeIn');
      }

      if ($main > project2) { 
         $projectContainer.addClass('u-bg-white');  
         $('#Pane--2').css('opacity', '1');
         // $('#Pane--2').addClass('animated bounceInUp slow'); 
         $('#Container-pic--2').css('opacity', '1');
         // $('#Container-pic--2').addClass('animated bounceInUp slow');
         $('#Container-text--2').addClass('animated fadeIn slow');
      }
      
      // if ($main < project2) {
      //    $projectContainer.removeClass('u-bg-lightBlue');
      // }

      if ($main > project3) {
         // if ($projectContainer.hasClass('u-bg-lightBlue')) {
         //    $projectContainer.removeClass('bg-lightBlue');
         // }
         $projectContainer.addClass('u-bg-white');
         $('#Pane--3').css('opacity', '1');
         // $('#Pane--3').addClass('animated bounceInUp slow'); 
         $('#Container-pic--3').css('opacity', '1');
         // $('#Container-pic--3').addClass('animated bounceInUp slow');
         $('#Container-text--3').addClass('animated fadeIn slow');
      }

      // if ($main < project3 && $main > project2) {
      //    $projectContainer.addClass('u-bg-lightBlue');
      //    $projectContainer.removeClass('u-bg-white');
      // }

      if ($main > project4) {
         // if ($projectContainer.hasClass('bg-white')) {
         //    $projectContainer.removeClass('bg-white');
         // }
         // $projectContainer.addClass('bg-navy');
         $('#Pane--4').css('opacity', '1');
         // $('#Pane--4').addClass('animated bounceInUp slow'); 
         $('#Container-pic--4').css('opacity', '1');
         // $('#Container-pic--4').addClass('animated bounceInUp slow');
         $('#Container-text--4').addClass('animated fadeIn slow');
      }

      if ($main > project5) {
         // if ($projectContainer.hasClass('bg-white')) {
         //    $projectContainer.removeClass('bg-white');
         // }
         // $projectContainer.addClass('bg-navy');
         $('#Pane--5').css('opacity', '1');
         // $('#Pane--4').addClass('animated bounceInUp slow'); 
         $('#Container-pic--5').css('opacity', '1');
         // $('#Container-pic--4').addClass('animated bounceInUp slow');
         $('#Container-text--5').addClass('animated fadeIn slow');
      }
      // if ($main < project4 && $main > project3) {
      //    // $projectContainer.addClass('bg-white');
      //    $projectContainer.removeClass('bg-white');
      // }

      // if ($main > project6) {
      //    $('body').addClass('u-bg-charcoal')
      // }

      // if ($main < project6) {
      //    $('body').removeClass('u-bg-charcoal')
      // }
      

      // if ($main > project6) {
      //    if ($projectContainer.hasClass('bg-offBlue')) {
      //       $projectContainer.removeClass('bg-offBlue');
      //    }
      //    $('.Container--project').addClass('bg-charcoal');
      //    $('.Pane--fei').addClass('animated slideInUp');
      //    $('#FEI-pic').addClass('animated slideInUp');
      //    $('.ProjectText--fei').addClass('animated pulse');
      //    $fei.css('opacity', '1');
      // }
      // if ($main < project6 && $main > project5) {
      //    $('.Container--project').addClass('bg-offBlue');
      //    $('.Container--project').removeClass('bg-charcoal');
      // }

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
