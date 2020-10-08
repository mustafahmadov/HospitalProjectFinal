$(document).ready(function () {
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() < 480) {
            let countNumber = $(".count-item").countTo();
            $(".count-item").html(countNumber);
        }
    })
});