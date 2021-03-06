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
            var the_id, accordion, button;

            the_id    = $(this).attr("href"),
            accordion = $(this).parents('.project').children('.accordeon');
            button    = $(this);


            // Close all accordions
            $('.accordeon').slideUp(400, function() {
                button.text('En savoir plus');
            });

            // If current accordion is opened, return
            if (accordion.is(":visible")) { 
                return false; 
            }

            button.text('Masquer');

            // If current accordion is closed, we open it
            accordion.slideDown(400, function () {
                // Déclenche la fonction animate()
                $('html, body').animate({  
                    scrollTop: $(this).parents('.project').offset().top-$('#nav-header').height()
                }, 'slow');             
            }); 
        });
    });

}(jQuery));