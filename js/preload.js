window.onload = function(){
    // when window is loaded, fade out animation
    $(".Preload").fadeOut("slow", function() {
        $(".Preload").css("visibility", "hidden");
    });
    $("body").css('overflow', 'visible');
};

$(function() {
    var wndw = $(window);
    wndw.scroll(function () {
        var $main = $(this).scrollTop();
        if ($("#about").length) {
            if ($main >= ($("#about").offset().top) - 40) {
                $(".link-white").addClass("u-text-black");
                $('.Menu--js').css('visibility', 'visible');
                $('.Menu--js').css('opacity', '1');
                $('.Menu--main').css('visibility', 'hidden');
                $('.Menu--main').css('opacity', '0');
            }
    
            if ($main < ($("#about").offset().top) - 40) {
                $(".link-white").removeClass("u-text-black");
                $('.Menu--js').css('visibility', 'hidden');
                $('.Menu--js').css('opacity', '0');
                $('.Menu--main').css('visibility', 'visible');
                $('.Menu--main').css('opacity', '1');
            }
        }
        if ($(".Container--stat").length) {
            if ($main >= $('.Container--stat').offset().top) {
                $('.Menu--js').css('visibility', 'visible');
                $('.Menu--js').css('opacity', '1');
                $('.Menu--main').css('visibility', 'hidden');
                $('.Menu--main').css('opacity', '0');
            }
    
            if ($main < $('.Container--stat').offset().top) {
                $('.Menu--js').css('visibility', 'hidden');
                $('.Menu--js').css('opacity', '0');
                $('.Menu--main').css('visibility', 'visible');
                $('.Menu--main').css('opacity', '1');
            }
        }
    });
});
  