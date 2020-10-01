$(document).ready(function () {
    $(".first").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        navs: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
                loop: false,
            },
        },
    });
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        dotsEach: 2,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 2.6,
            },
        },
    });
    window.onscroll = function () {
        myFunction();
    };

    // Get the header
    var nav = document.querySelector("header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky-top");
        } else {
            nav.classList.remove("sticky-top");
        }
    }

    $("select").niceSelect();

    let btns = $(".btn-filter");
    btns.click(function (e) {
        e.preventDefault();
        let attribute = $(this).attr('data-target');
        // if ($(this).data('target') === attribute) {
        //     $(this).addClass('active');
        // } else {
        //     $(this).removeClass('active');
        // }
        $(".btn-filter").removeClass("active");
        $(".btn-filter").removeClass('background-color');
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
        $(this).addClass('background-color');
        if ($(this).hasClass('active')) {
            $(this).addClass('background-color');
        }


        $('.doctor-area').not('.' + attribute).hide(1000);
        $('.doctor-area').filter('.' + attribute).show(1000);
        if ($('.doctor-area').hasClass('d-none')) {
            $('.doctor-area').removeClass('d-none');
        }

    });
});