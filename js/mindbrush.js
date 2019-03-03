$(function() {
    var wndw = $(window);
    wndw.scroll(function () {
       console.log($(window).scrollTop());
       var $main = $(this).scrollTop();
 
       if ($main >= $('#Container--mindbrush-info').offset().top) {
          $('#Menu--js-mindbrush').css('opacity', '1');
       }
 
       if ($main < $('#Container--mindbrush-info').offset().top) {
          $('#Menu--js-mindbrush').css('opacity', '0');
       }
 
   });
 });
 