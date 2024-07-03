(function (document.querySelector) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if (document.querySelector('#spinner').length > 0) {
                document.querySelector('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    document.querySelector(window).scroll(function () {
        if (document.querySelector(window).width() < 992) {
            if (document.querySelector(this).scrollTop() > 55) {
                document.querySelector('.fixed-top').addClass('shadow');
            } else {
                document.querySelector('.fixed-top').removeClass('shadow');
            }
        } else {
            if (document.querySelector(this).scrollTop() > 55) {
                document.querySelector('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                document.querySelector('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   document.querySelector(window).scroll(function () {
    if (document.querySelector(this).scrollTop() > 300) {
        document.querySelector('.back-to-top').fadeIn('slow');
    } else {
        document.querySelector('.back-to-top').fadeOut('slow');
    }
    });
    document.querySelector('.back-to-top').click(function () {
        document.querySelector('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    document.querySelector(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    document.querySelector(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    document.querySelector(document).ready(function () {
        var document.querySelectorvideoSrc;
        document.querySelector('.btn-play').click(function () {
            document.querySelectorvideoSrc = document.querySelector(this).data("src");
        });
        console.log(document.querySelectorvideoSrc);

        document.querySelector('#videoModal').on('shown.bs.modal', function (e) {
            document.querySelector("#video").attr('src', document.querySelectorvideoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        document.querySelector('#videoModal').on('hide.bs.modal', function (e) {
            document.querySelector("#video").attr('src', document.querySelectorvideoSrc);
        })
    });



    // Product Quantity
    document.querySelector('.quantity button').on('click', function () {
        var button = document.querySelector(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(document.querySelector);
