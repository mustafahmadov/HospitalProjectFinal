$(document).ready(function () {
    if ($(window).scrollTop() > 300) {
        let countNumber = $('.count-item').countTo()
        $('.count-item').html(countNumber);
    }
    console.log()
})