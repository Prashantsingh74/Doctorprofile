// for video 
document.querySelectorAll('.video-container').forEach(function(container) {
    container.addEventListener('click', function() {
        const thumbnail = container.querySelector('.thumbnail');
        const playButton = container.querySelector('.play-button');
        const iframe = container.querySelector('iframe');
        
        // Hide the thumbnail and play button
        thumbnail.style.display = 'none';
        playButton.style.display = 'none';
        
        // Set the iframe's src to include autoplay and then show the iframe
        iframe.src += "?autoplay=1"; // Adding autoplay to the video src
        iframe.style.display = 'block';
    });
});




// $(document).ready(function(){
//     var owl = $(".nav-tabs-carousel").owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: false,
//         dots: false,
//         responsive:{
//             0:{
//                 items: 2,
//             },
//             600:{
//                 items: 3
//             },
//             1000:{
//                 items: 3
//             }
//         }
//     });

//     // Click event for navigation links
//     $('.nav-link').on('click', function(e) {
//         e.preventDefault(); // Prevent default action
//         var target = $(this).data('target');

//         // Remove active class from all tabs and hide all tab content
//         $('.nav-link').removeClass('active');
//         $('.tab-pane').removeClass('show active');

//         // Add active class to clicked tab
//         $(this).addClass('active');

//         // Show the corresponding tab content
//         $(target).addClass('show active');


       

//         // Ensure transition has started before moving to the next item
//         setTimeout(function() {
//             owl.trigger('next.owl.carousel');
//         }, 300); // Match the timeout duration to the transition speed
//     });
// });

$(document).ready(function () {
    var owl = $(".nav-tabs-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 3,
        autoWidth: true, // Ensure auto width
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

    // Click event for navigation links
    $('.nav-link').on('click', function (e) {
        e.preventDefault(); // Prevent default action
        var target = $(this).data('target');

        // If the clicked tab is already active, don't slide the carousel
        if ($(this).hasClass('active')) {
            return;
        }

        // Remove active class from all tabs and hide all tab content
        $('.nav-link').removeClass('active');
        $('.tab-pane').removeClass('show active');

        // Add active class to clicked tab
        $(this).addClass('active');

        // Show the corresponding tab content
        $(target).addClass('show active');

        // // Find the index of the clicked tab
        // var clickedIndex = $(this).closest('.nav-item').index();

        // // Move the carousel to the clicked tab's index
        // owl.trigger('to.owl.carousel', [clickedIndex, 300, true]); // Adjust the duration as needed

        // Ensure transition has started before moving to the next item
        setTimeout(function() {
            owl.trigger('next.owl.carousel');
        }, 300); // Match the timeout duration to the transition speed
    });
    
});


// read more button 
$(document).ready(function() {
    $('.read-more-btn').on('click', function() {
        var $button = $(this);
        var $moreContent = $button.prev('p').find('.more-content');

        if ($moreContent.is(':visible')) {
            $moreContent.slideUp(); // Hide additional content
            $button.text('Read More'); // Change button text
        } else {
            $moreContent.slideDown(); // Show additional content
            $button.text('Read Less'); // Change button text
        }
    });
});


// for Qualification-carousel
$(document).ready(function() {
    $(".Qualification-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});



