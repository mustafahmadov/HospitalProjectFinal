$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
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
                loop: false
            }
        }
    })
    window.onscroll = function () {
        myFunction()
    };

    // Get the header
    var nav = document.querySelector("header");
    let div = document.querySelector(".top-page-area");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky-top");
        } else {
            nav.classList.remove("sticky-top");
        }
    };

    $('select').niceSelect();
});