$(document).ready(function () {
    $('.nav__burger').click(function () {
        /*var dropdownMenu = $('.nav__dropdown-menu');
        if(dropdownMenu.css('display') === 'block') dropdownMenu.css('display', 'none');
        else dropdownMenu.css("display", 'block');*/

        $('.nav__dropdown-menu').toggle();
    });
});