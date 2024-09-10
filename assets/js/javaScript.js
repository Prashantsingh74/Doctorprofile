// for video
document.querySelectorAll(".video-container").forEach(function (container) {
    container.addEventListener("click", function () {
      const thumbnail = container.querySelector(".thumbnail");
      const playButton = container.querySelector(".play-button");
      const iframe = container.querySelector("iframe");
  
      thumbnail.style.display = "none";
      playButton.style.display = "none";
  
      iframe.src += "?autoplay=1";
      iframe.style.display = "block";
    });
  });
  
  // for overview
  $(document).ready(function () {
      var owl = $(".nav-tabs-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          items: 3,
          autoWidth: true, 
          responsive: {
              0: {
                  items: 2,
              },
              600: {
                  items: 3
              },
              1000: {
                  items: 3
              }
          }
      });
  
      $('.nav-link').on('click', function (e) {
          e.preventDefault(); 
          var target = $(this).data('target');
          $('.nav-link').removeClass('active');
          $('.tab-pane').removeClass('show active');
          $(this).addClass('active');
          $(target).addClass('show active');
          setTimeout(function() {
              owl.trigger('next.owl.carousel');
          }, 300); 
      });
      owl.on('changed.owl.carousel', function(event) {
          var currentIndex = event.item.index;
          $('.nav-link').removeClass('active');
          $('.nav-link').eq(currentIndex).addClass('active');
      });
  });
  
  // read more button
  $(document).ready(function () {
    $(".read-more-btn").on("click", function () {
      var $button = $(this);
      var $moreContent = $button.prev("p").find(".more-content");
  
      if ($moreContent.is(":visible")) {
        $moreContent.slideUp();
        $button.text("Read More");
      } else {
        $moreContent.slideDown();
        $button.text("Read Less");
      }
    });
  });
  
  // for Qualification-carousel
  $(document).ready(function () {
    $(".Qualification-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
  });
  