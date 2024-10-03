document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container2', {
        slidesPerView: 2.2, // Number of slides per view
        spaceBetween: 10, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next2',
        },
        loop: true,
        breakpoints: {
            732: {
                slidesPerView: 3,
            },
            732: {
                slidesPerView: 3,
            },
            634: {
                slidesPerView: 2.2,
            },
            502: {
                slidesPerView: 2,
            },
            1: {
                slidesPerView: 1.3,
            },
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container21', {
        slidesPerView: 4, // Number of slides per view
        spaceBetween: 10, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next21',
        },
        loop: true,
        breakpoints: {
            1170: {
                slidesPerView: 4,
            },
            0: {
                slidesPerView: 3,
            },
        }
    });
});
