$(function() {
    var wndw = $(window);
    wndw.scroll(function () {
       console.log($(window).scrollTop());
       var $main = $(this).scrollTop();
 
       if ($main >= $('#Container--goldman-info').offset().top) {
          $('#Menu--js-goldman').css('opacity', '1');
       }
 
       if ($main < $('#Container--goldman-info').offset().top) {
          $('#Menu--js-goldman').css('opacity', '0');
       }
 
   });
 });
 