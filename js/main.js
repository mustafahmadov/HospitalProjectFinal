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
                dots: true,
            },
            800: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
                loop: false,
                dots: true,
            },
        },
    });
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
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
        $(".btn-filter").removeClass("active");
        $(".btn-filter").removeClass('default');
        $(".nav-link").removeClass('default-white');
        $(this).addClass("active");
        $(this).addClass('default');
        if ($(this).hasClass('active')) {
            $(this).addClass('default');
            $(this).children().addClass('default-white');
        }


        $('.doctor-area').not('.' + attribute).hide(1000);
        $('.doctor-area').filter('.' + attribute).show(1000);
        if ($('.doctor-area').hasClass('d-none')) {
            $('.doctor-area').removeClass('d-none');
        }

    });
    $(".nav-link").hover(
        function () {
            $(this).next().addClass('d-block');
            $(this).next().addClass('active');
        },

        function () {
            $(this).next().removeClass('d-block');
            $(this).next().removeClass('active');
            if (!($(this).next().hasClass('active'))) {
                $(this).next().addClass('d-none');
            }
        }
    )
    $('.nav-link').next().hover(
        function () {
            $(this).toggleClass('d-block');
        }
    )
});