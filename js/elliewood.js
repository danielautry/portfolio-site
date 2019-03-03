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

       if ($main >= $('.Container--articles').offset().top) {
         $('#Menu--js-elliewood').css('opacity', '1');
      }

      if ($main < $('.Container--articles').offset().top) {
         $('#Menu--js-elliewood').css('opacity', '0');
      }

 
    // console.log($("#Jumpbox").offset().top);
    // $window = $(window);
       if ($main > 150) {
        $('#Container-article--1').css('opacity', '1');
        $('#Container-article--1').addClass('animated slideInUp');
        $('#Container-article--2').css('opacity', '1');
        $('#Container-article--2').addClass('animated slideInUp');
       }

       if ($main > 450) {
        $('#Container-article--3').css('opacity', '1');
        $('#Container-article--3').addClass('animated fadeIn slideInUp');
        $('#Container-article--4').css('opacity', '1');
        $('#Container-article--4').addClass('animated slideInUp');
       }

       if ($main > 1200) { 
        $('#Elliewood-text--overview').addClass('animated fadeIn');
       }
 
       if ($main > 1200) { 
        $('#Elliewood-text--1').addClass('animated fadeIn');
        $('#Elliewood-image--1').addClass('animated fadeIn');
       }

       if ($main > 1850) { 
        $('#Elliewood-container--1').addClass('animated fadeIn');
       }

       if ($main > 2350) { 
        $('#Elliewood-container--2').addClass('animated fadeIn');
       }

       if ($main > 2800) { 
        $('#Elliewood-container--3').addClass('animated fadeIn');
       }

       if ($main > 3500) { 
        $('.Elliewood-text--2').addClass('animated fadeInUp');
        $('.Elliewood-text--3').addClass('animated fadeInUp');
        $('#Elliewood-image--2').addClass('animated fadeInUp');
       }

       if ($main > 4350) { 
        $('.Elliewood-text--4').addClass('animated fadeInUp');
        $('.Elliewood-text--5').addClass('animated fadeInUp');
       }

       if ($main > 4500) { 
        $('#Container-line--1').addClass('animated fadeIn');
        $('#Elliewood-block--1').addClass('animated fadeIn');
        $('#Elliewood-block--2').addClass('animated fadeIn');       
        $('#Elliewood-block--3').addClass('animated fadeIn');        
        $('#Elliewood-block--4').addClass('animated fadeIn');        
        $('#Elliewood-block--5').addClass('animated fadeIn');
       }

       if ($main > 5100) { 
        $('#Elliewood-container--4').addClass('animated fadeIn slow');
       }

       if ($main > 6900) { 
        $('#Elliewood-container--5').addClass('animated fadeIn');
       }

       if ($main > 7500) { 
        $('#Elliewood-container--6').addClass('animated fadeIn');
       }
       
       if ($main > 8200) { 
        $('#Elliewood-container--7').addClass('animated fadeIn');
       }
       
       if ($main > 8900) { 
        $('#Elliewood-container--8').addClass('animated fadeIn');
       }

       if ($main > 9600) { 
        $('#Elliewood-container--9').addClass('animated fadeIn');
       }

       if ($main > 9900) { 
        $('#Elliewood-quote--1').addClass('animated fadeIn');
       }

       if ($main > 10100) { 
        $('#Elliewood-quote--2').addClass('animated fadeIn');
       }

       if ($main > 10300) { 
        $('#Elliewood-quote--3').addClass('animated fadeIn');
       }

       if ($main > 10950) { 
        $('#Container-line--2').addClass('animated fadeIn');
        $('#Elliewood-block--6').addClass('animated fadeIn');
        $('#Elliewood-block--7').addClass('animated fadeIn slow');       
        $('#Elliewood-block--8').addClass('animated fadeIn');        
        $('#Elliewood-block--9').addClass('animated fadeIn');        
        $('#Elliewood-block--10').addClass('animated fadeIn');
       }

       if ($main > 12100) { 
        $('#Elliewood-container--10').addClass('animated fadeIn');
       }
 
   });
 });
 