$(document).ready(function () {
    $('ul#navigation li').click(function() {
        $('.dropdown-menu').slideUp();

        if (!$(this).children('.dropdown-menu').is(':visible')) {
            $(this).children('.dropdown-menu').slideDown(1000);
        }
    })
})
