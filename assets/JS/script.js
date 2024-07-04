const headlineBtn = document.getElementById("headline-btn");
const headline = document.getElementById("headline");

headlineBtn.onclick = () => {
    headline.style.display = "none"; 
};

// Mobile NavBar
const mobileNavBtn = document.getElementById("mobile-nav-btn");
const menubar = document.getElementById("rectangle-2");

mobileNavBtn.onclick = () => {
    menubar.classList.toggle("active"); 
};

// Fancybox popup for hero section video
$(document).ready(function () {
    $('.play-icon').on('click', function () {
        $.fancybox.open({
            src: 'https://www.youtube.com/embed/MMFqJFqdSJg',
            type: 'iframe',
            iframe: {
                css: {
                    width: '80%',
                    height: '80%',
                    margin: 'auto'
                }
            }
        });
    });
});

// Enable Slick Slider functionality for main slider
$(document).ready(function () {
    $('#slider').slick({
        dots: true,
        arrows: false
    });

    $('.left-arrow').on('click', function () {
        $('#slider').slick('slickPrev');
    });

    $('.right-arrow').on('click', function () {
        $('#slider').slick('slickNext');
    });
});

// Enable Slick Slider functionality for post slider
$(document).ready(function () {
    $('.post-slide').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom arrows functionality for post slider
    $('.post-left-arrow').click(function () {
        $('.post-slide').slick('slickPrev');
    });

    $('.post-right-arrow').click(function () {
        $('.post-slide').slick('slickNext');
    });
});
