/**
 * Created by Magdi Mahgoub on 30/10/2016.
 */

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar").find("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });

    $("#hover-over").hover(function(){
        $(this).css("color", "#111111");
        $(this).css("font-weight", "500");
        $(this).text('Magdi Mahgoub ▲');
    }, function(){
        $(this).css("color", "white");
        $(this).css("font-weight", "normal");
        $(this).text('Magdi Mahgoub');
    });

    $(window).scroll( function() {

        /* Check the location of each desired element */
        $(".scroll-in").each(function () {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({'opacity': '1'}, 450);


            }

        });

    });

    var whichToShow = Math.floor(Math.random() * $('.quote').length);

    $('.quote').hide().eq(whichToShow).fadeIn(1000);

});