window.onload = function(){
    // Animate loader off screen
      $(".preload").fadeOut("slow");
      $("body").css('overflow', 'visible');
      $(".try-animate").css('animation-play-state', 'running');
    };
    $(function() {
     $(".menu").click(function() {
       if ($("#navigation").hasClass("hidden")) {
         $("#navigation").attr("class", "visible");
       //   $(".Container--menu").css("position", "static");
         $("#logo").css("color", "#fff");
       } else {
         $("#navigation").attr("class", "hidden");
         $("#logo").css("color", "#222");
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