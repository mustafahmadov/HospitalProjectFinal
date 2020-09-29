$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        stagePadding: 0,
        items: 1,
        loop: true,
        margin: 0,
        singleItem: true,
        nav: true,
        dots: true,
        autoplay: true
    });

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
    }
});