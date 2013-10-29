/*jslint browser: true*/
/*encoding: utf-8*/
(function (window, undefined) {
    "use strict";

    var $ = jQuery.noConflict();

    $(document).ready(function() {
        $('.accordeon').hide();

        // Au clic sur les liens à ancre (navigation pricipale)
        $('a[href^="#"]').on('click', function (event) {
            var the_id;

            // Because this is relative link
            the_id = $(this).attr("href");

            // Déclenche la fonction animate()
            $('html, body').animate({  
                scrollTop: $(the_id).offset().top  
            }, 1000); 

        }); 

        // Au clic sur les éléments de classe .details (boutons)
        $('.details').on('click', function (event) {
            var the_id, accordion;

            the_id    = $(this).attr("href"),
            accordion = $(this).parents('.project').children('.accordeon');

            // Close all accordions
            $('.accordeon').slideUp();
            $('.accordeon').children(".details").replaceAll("<button class='details'>Masquer</button>");

            // If current accordion is opened, return
            if (accordion.is(":visible")) {
                $(this).replaceWith("<button class='details'>En savoir plus</button>"); 
                return false; 
            }

            // If current accordion is closed, we open it

            $(this).replaceWith("<button class='details'>Masquer</button>");
            accordion.slideDown(400, function () {

                // Déclenche la fonction animate()
                $('html, body').animate({  
                    scrollTop: $(this).parents('.project').offset().top-$('#nav-header').height()
                }, 'slow');             
            }); 
        });
    });

}(jQuery));