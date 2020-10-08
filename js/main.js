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
        let attribute = $(this).attr("data-target");
        $(".btn-filter").removeClass("active");
        $(".nav-link").removeClass("default");
        $(".nav-link").removeClass("default-white");
        $(this).addClass("active");
        $(this).children(".nav-link").addClass("default");
        if ($(this).hasClass("active")) {
            $(this).children().addClass("default");
            $(this).children().addClass("default-white");
        }

        $(".doctor-area")
            .not("." + attribute)
            .hide(1000);
        $(".doctor-area")
            .filter("." + attribute)
            .show(1000);
        if ($(".doctor-area").hasClass("d-none")) {
            $(".doctor-area").removeClass("d-none");
        }
    });
    // if ($('.navbar-toggler').css("display") === "none") {
    //     $(".nav-link").mouseover(
    //         function () {
    //             $(this).next().addClass('d-block');
    //             $(this).next().addClass('active');
    //         },
    //     )
    //     $('.nav-link').mouseleave(function () {
    //         $(this).next().removeClass('d-block');
    //         $(this).next().removeClass('active');
    //         if (!($(this).next().hasClass('active'))) {
    //             $(this).next().addClass('d-none');
    //         }
    //     })
    //     $('.nav-link').next().hover(
    //         function () {
    //             $(this).toggleClass('d-block');
    //         }
    //     )
    // }
    // let counter = (element) => {
    //     let count = 0;
    //     let countTo = $(element).attr('data-to');
    //     let intervalSecond = Math.round((((50 / countTo) * 100)) * 100)
    //     console.log(Math.round(((50 / countTo) * 100)));
    //     let interval = setInterval(
    //         function counterUp() {
    //             count++;
    //             $(element).html(count);
    //             if (count == countTo) {
    //                 clearInterval(interval);
    //             }
    //         }, intervalSecond)

    // }
    // counter('.count-item1');
    // counter('.count-item2');
    // counter('.count-item3');
    // counter('.count-item4');
    // $(".count-item").countTo();

    $(window).on('load', function () {
        // Animate loader off screen
        $(".pre-icon").fadeOut("slow");
    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
});