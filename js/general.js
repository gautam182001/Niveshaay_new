// Equal height
function equalHeight() {
  jQuery.fn.extend({
    equalHeight: function () {
      var top = 0;
      var row = [];
      var classname = ("equalHeight" + Math.random()).replace(".", "");
      jQuery(this)
        .each(function () {
          var thistop = jQuery(this).offset().top;
          if (thistop > top) {
            jQuery("." + classname).removeClass(classname);
            top = thistop;
          }
          jQuery(this).addClass(classname);
          jQuery(this).height("auto");
          var h = Math.max.apply(
            null,
            jQuery("." + classname)
              .map(function () {
                return jQuery(this).outerHeight();
              })
              .get()
          );
          jQuery("." + classname).height(h);
        })
        .removeClass(classname);
    },
  });
  jQuery(".className").equalHeight();
  jQuery(".research-section .research-list .research p").equalHeight();
  jQuery(
    ".client-review-section .review-block-outer .quote-block blockquote"
  ).equalHeight();
  setTimeout(function () {
    jQuery(
      ".client-review-section .twitter-review-block .reviewer-block"
    ).equalHeight();
    jQuery(
      ".client-review-section .twitter-review-block .twitter-reviews"
    ).equalHeight();
  }, 100);
}
var flag = true;
function tab_to_accordian() {
  if (jQuery(window).width() < 1200) {
    if (flag) {
      jQuery(".tab-heading-block li .nav-title").each(function () {
        var cur_link = jQuery(this).attr("data-tab");
        jQuery(".tab-content-inner[data-id='" + cur_link + "']")
          .detach()
          .appendTo(jQuery(this).closest("li"));
      });
      jQuery(".tab-heading-block li.active .tab-content-inner").slideDown();
      jQuery(".tab-heading-block li.active")
        .siblings()
        .find(".tab-content-inner")
        .slideUp();
      jQuery(".tab-content-block").remove();
      flag = false;
    }
  } else {
    if (!flag) {
      var _this = jQuery(".tab-heading-block li.active .nav-title").attr(
        "data-tab"
      );

      jQuery(".custom-tabbing-outer").append(
        "<div class='tab-content-block'></div>"
      );
      jQuery(".tab-heading-block li").each(function () {
        jQuery(".tab-content-inner").detach().appendTo(".tab-content-block");
      });
      setTimeout(function () {
        if (_this == undefined) {
          jQuery(".tab-content-inner:first-child").fadeIn();
          jQuery(".tab-heading-block li:first-child").addClass("active");
        } else {
          jQuery(".tab-content-inner[data-id='" + _this + "']")
            .siblings()
            .fadeOut(0);
          jQuery(".tab-content-inner[data-id='" + _this + "']").fadeIn();
        }
      }, 100);
      flag = true;
    }
  }
}
// accordion jquery
function tab_link_click() {
  jQuery(".tab-heading-block li .nav-title").click(function (e) {
    e.preventDefault();
    if (jQuery(window).width() < 1200) {
      var _this = jQuery(this).attr("data-tab");
      jQuery(".tab-content-inner[data-id='" + _this + "']")
        .stop(true, true)
        .slideToggle();
      jQuery(".tab-content-inner[data-id='" + _this + "']")
        .closest("li")
        .siblings()
        .find(".tab-content-inner")
        .stop(true, true)
        .slideUp();
      jQuery(this).closest("li").siblings().removeClass("active");
      jQuery(this).closest("li").toggleClass("active");
    } else {
      var _this = jQuery(this).attr("data-tab");
      jQuery(".tab-content-inner[data-id='" + _this + "']")
        .siblings()
        .fadeOut(0);
      jQuery(".tab-content-inner[data-id='" + _this + "']").fadeIn(300);
      jQuery(this).closest("li").addClass("active");
      jQuery(this).closest("li").siblings().removeClass("active");
    }
  });
}
// header main
function mainPadding() {
  let _headerHeight = jQuery(".niveshaay-header").outerHeight();
  jQuery(".wrapper main").css("padding-top", _headerHeight);
}

styleFlag = true;
function styleFunction() {
  if (jQuery(window).width() <= 991) {
    if (styleFlag) {
      styleFlag = false;
    }
  } else {
    if (!styleFlag) {
      jQuery(".dropdown-wrap").removeClass("active");
      jQuery(".dropdown-wrap .sub-menu").removeAttr("style");
      styleFlag = true;
    }
  }
}

jQuery(document).ready(function () {
  equalHeight();
  tab_to_accordian();
  tab_link_click();
  styleFunction();
  setTimeout(function () {
    mainPadding();
  }, 300);

  /* faq answer */
  $(".answer").hide();
  $(".question").click(function () {
    $(this).closest(".faq-wrap").find(".answer").slideToggle();
    $(this).closest(".faq-wrap").toggleClass("open");
    $(".answer").not($(this).closest(".faq-wrap").find(".answer")).slideUp();
    $(".faq-wrap").not($(this).closest(".faq-wrap")).removeClass("open");
  });
  // hamburger
  jQuery(".hamburger").click(function () {
    jQuery("html, body").toggleClass("open");
  });
  // header nested accordian
  jQuery(".niveshaay-header .menu-arrow")
    .unbind("click")
    .click(function (e) {
      e.preventDefault();
      if (jQuery(window).width() <= 991) {
        if (jQuery(this).closest(".dropdown-wrap").hasClass("active")) {
          jQuery(this).closest(".dropdown-wrap").find(".sub-menu").slideUp();
          jQuery(this).closest(".dropdown-wrap").removeClass("active");
        } else {
          jQuery(this).closest(".dropdown-wrap").find(".sub-menu").slideDown();
          jQuery(this).closest(".dropdown-wrap").addClass("active");
        }
      }
    });

  if (jQuery(".logo-swiper").length) {
    const swiper = new Swiper(".logo-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      // autoplay: {
      // 	delay: 1000,
      // },
      breakpoints: {
        480: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
        },
      },
    });
  }
  if (jQuery(".niveshay-logo-swiper").length) {
    const swiper = new Swiper(".niveshay-logo-swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
        },
      },
    });
  }
  if (jQuery(".featured-swiper").length) {
    const swiper = new Swiper(".featured-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 700,
      navigation: {
        nextEl: ".feature-swiper-navigation .custom-next",
        prevEl: ".feature-swiper-navigation .custom-prev",
      },
      breakpoints: {
        575: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });
  }
  if (jQuery(".review-swiper").length) {
    const swiper = new Swiper(".review-swiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 700,
      navigation: {
        nextEl: ".review-swiper-navigation .custom-next",
        prevEl: ".review-swiper-navigation .custom-prev",
      },
      grid: {
        rows: 1, // Set the number of rows
        fill: "row", // Order of slide filling ('row' or 'column')
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
        1199: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
          },
        },
      },
    });
  }
  if (jQuery(".twitter-swiper").length) {
    const swiper = new Swiper(".twitter-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 700,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        575: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1199: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      },
    });
  }

  jQuery(".complaints-section .tab-heading-wrapper span").click(function () {
    jQuery(this).closest(".tab-heading-wrapper").toggleClass("open");
  });
  jQuery(".complaints-section .tab-heading-wrapper .tab-heading li").click(
    function () {
      var _id = jQuery(this).attr("data-id");
      jQuery(".complaints-section .tab-heading-wrapper").removeClass("open");
      jQuery(this).addClass("active").siblings().removeClass("active");
      jQuery(
        ".complaints-section .tab-content-wrapper .niveshhay-table-responsive[data-attr='" +
          _id +
          "']"
      )
        .addClass("active")
        .siblings()
        .removeClass("active");
      jQuery(this)
        .closest(".complaints-section .tab-heading-wrapper")
        .find("span")
        .text(jQuery(this).text());
    }
  );

  /* custom modal */
  $(".modal-link").click(function () {
    var data_link = $(this).attr("data-link");
    $(".custom-modal").each(function () {
      var data_tab = $(this).attr("data-tab");
      if (data_tab == data_link) {
        $(this).addClass("modal-visible");
        $("body").addClass("open-modal");
      }
    });
  });
  $(".modal-close").click(function () {
    $(".custom-modal").removeClass("modal-visible");
    $("body").removeClass("open-modal");
  });
  $(".custom-modal .modal-backdrop").click(function () {
    $(".custom-modal").removeClass("modal-visible");
    $("body").removeClass("open-modal");
  });
  $(".custom-modal .modal-content").click(function () {
    $(".custom-modal").removeClass("modal-visible");
    $("body").removeClass("open-modal");
  });
  $(".custom-modal .modal-body ").click(function (e) {
    e.stopPropagation();
  });
});

jQuery(window).resize(function () {
  setTimeout(function () {
    equalHeight();
    mainPadding();
  }, 300);
  tab_to_accordian();
  styleFunction();
});

jQuery(window).on("load", function () {
  setTimeout(function () {
    equalHeight();
  }, 300);
});
