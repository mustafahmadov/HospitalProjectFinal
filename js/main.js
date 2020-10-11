$(document).ready(function () {
    //===PRELOADER===//
    $(window).on('load', function () {
        $(".pre-icon").fadeOut("slow");
        // $('.nav-link').unbind();
    });
    /////

    //===HAMBURGER ICON ONCLICK===//
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
    })
    /////

    //===SERVICES CAROUSEL===//
    $(".services-carousel").owlCarousel({
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
    /////


    //===TESTIMONIAL CAROUSEL===//
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
    /////
    

    // === MAKE STICKY HEADER ===//
    let stickyHeader = document.querySelector("header");
    let sticky = header.offsetTop;
    function makeStickyNav() {
        if (window.pageYOffset > sticky) {
            stickyHeader.classList.add("sticky-top");
        } else {
            stickyHeader.classList.remove("sticky-top");
        }
    }
    $(window).scroll(function () {
        makeStickyNav();
    });
    /////////


    //=== NICE SELECT PLUGIN CALL FOR FORM ===///
    $("select").niceSelect();
    /////


    ////===DOCTORS FILTER CODE === ////
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

        $(".doctor-area").not("." + attribute).hide();
        $(".doctor-area").filter("." + attribute).show();
        if ($(".doctor-area").hasClass("d-none")) {
            $(".doctor-area").removeClass("d-none");
        }
    });
    /////
    


    //===COUNTER===//
    $(window).scroll(function () {
        let isCounted = false;
        if($('.count-item').hasClass('counted')){
            isCounted = true;
        }
        if(isCounted){
            if ($(this).scrollTop() > 450) {
                let countNumber = $(".count-item").countTo();
                $(".count-item").html(countNumber);
                $('.count-item').removeClass('counted');
            }
        }
    })
    /////

    
    //===MODAL VIDEO PLUGIN CALL===// 
        $(".js-modal-btn").modalVideo();
    /////


    ///===HELP FORM AREA INPUT VALIDATION===///
    const styles = {
        "position" : "relative",
        "padding" : ".75rem 1.25rem",
        "margin-top" : "1rem",
        "border" : "1px solid transparent",
        "border-radius" : ".25rem",
        "display" : "block"
    }
    let errorSpan = document.createElement('span');
    let stepNextInput = false;
    let validateInput = (inputId) => {
        let input = $(inputId);
        if(input.val().split(' ').join('') === ''){
            errorSpan.innerText = `You must enter your ${inputId.substring(1)}`;
            Object.assign(errorSpan.style,styles);
            let errorArea = $('.errorArea');
            errorArea.append(errorSpan);
            stepNextInput = false;
        }
        else{
            errorSpan.innerText = "";
            stepNextInput = true;
        }
        return stepNextInput;
    }
    $("form").submit(function(e){
        e.preventDefault();
        validateInput("#name");
        if(stepNextInput){
            validateInput("#email");
            if(stepNextInput){
                validateInput("#phone");
                if(stepNextInput){
                    validateInput("#comment");
                }
            }
        }
        
        
    })
    /////
    


    //===WOW PLUGIN CALL===/
    var wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
    /////
});