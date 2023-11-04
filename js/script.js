(function() {
  $("nav ul li a").click(function() {
    const thisSection = $(this).attr("href");
    $("html")
      .stop()
      .animate({ scrollTop: $(thisSection).offset().top - 200 }, "easeOutCirc");
    return false;
  });

  $(window).on("load", function() {
    $(".flexslider").flexslider({
      animation: "slide",
      slideShowSpeed: 500,
      pauseOnHover: true
    });

    let counter = 1;

    function contetnRotator() {
      $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function() {
        if ($(this).is("#rotator blockquote:last-child")) {
          setTimeout(() => {
            $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, () => {
              counter = 1;
              contetnRotator();
            });
          }, 7000);
        } else {
          setTimeout(() => {
            $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, () => {
              counter++;
              contetnRotator();
            });
          }, 7000);
        }
      });
    }

    contetnRotator();
  });

  //   Tabbed interface Script
  $("#tabs ul li a").click(function() {
    $("#tabs > div").css({ display: "none" });
    $("#tabs ul li a").css({ backgroundColor: "#c8d6af" });
    $(this).css({ backgroundColor: "#f7ffea" });
    const thisTab = $(this).attr("href");
    $(thisTab).fadeIn(500, "easeInCirc");
    return false;
  });
})();
