document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '/images/Шеф 1.svg',
        '/images/Шеф 1.svg',
        '/images/Шеф 1.svg',
        '/images/Шеф 1.svg'
    ];

    const titles = [
        'Слово мясника',
        'Лучший выбор',
        'Лучший выбор',
        'Качество еды'
    ];

    const subtitles = [
        'Сочная, натуральная, аппетитная свинина — даём слово!',
        'Только свежие продукты каждый день!',
        'Только свежие продукты каждый день!',
        'Мы заботимся о вашем здоровье!'
    ];

    let currentIndex = 0;

    const sliderImage = document.getElementById('sliderImage');
    const mainTitle = document.getElementById('mainTitle');
    const subTitle = document.getElementById('subTitle');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const dotsContainer = document.getElementById('dotsContainer');

    function updateContent() {
        sliderImage.src = images[currentIndex];
        mainTitle.textContent = titles[currentIndex];
        subTitle.textContent = subtitles[currentIndex];
        updateDots();
    }

    function animateElements() {
        sliderImage.classList.add('fade-out');
        mainTitle.classList.add('fade-out');
        subTitle.classList.add('fade-out');

        setTimeout(() => {
            updateContent();
            sliderImage.classList.remove('fade-out');
            mainTitle.classList.remove('fade-out');
            subTitle.classList.remove('fade-out');

            sliderImage.classList.add('fade-in');
            mainTitle.classList.add('fade-in');
            subTitle.classList.add('fade-in');
        }, 500); // Время должно совпадать с анимацией в CSS

        setTimeout(() => {
            sliderImage.classList.remove('fade-in');
            mainTitle.classList.remove('fade-in');
            subTitle.classList.remove('fade-in');
        }, 1000); // Время должно совпадать с анимацией в CSS
    }

    function createDots() {
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = index;
                animateElements();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        animateElements();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        animateElements();
    });

    createDots();
    updateContent();

    // Добавление поддержки жестов
    const hammer = new Hammer(sliderImage);
    hammer.on('swipeleft', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        animateElements();
    });

    hammer.on('swiperight', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        animateElements();
    });
});

// табы начало

const tabs = document.querySelectorAll('[id^="tab"]');

const images = {
    tab1: {
        top1: '/images/tab1-1.svg',
        top2: '/images/tab-1-2.svg',
        bottom: '/images/tab-1-3.svg'
    },
    tab2: {
        top1: '/images/tab2-1.svg',
        top2: '/images/tab-2-2.svg',
        bottom: '/images/tab-2-3.svg'
    },
    tab3: {
        top1: '/images/tab3-1.svg',
        top2: '/images/tab-3-2.svg',
        bottom: '/images/tab-3-3.svg'
    },
    tab4: {
        top1: '/images/tab4-1.svg',
        top2: '/images/tab-4-2.svg',
        bottom: '/images/tab-4-3.svg'
    },
    tab5: {
        top1: '/images/tab5-1.svg',
        top2: '/images/tab-5-2.svg',
        bottom: '/images/tab-5-3.svg'
    },
    tab6: {
        top1: '/images/tab6-1.svg',
        top2: '/images/tab-6-2.svg',
        bottom: '/images/tab-6-3.svg'
    }
};

const links = {
    tab1: '/section1',
    tab2: '/section2',
    tab3: '/section3',
    tab4: '/section4',
    tab5: '/section5',
    tab6: '/section6'
};

function switchTab(activeTabId) {
    tabs.forEach(tab => {
        tab.classList.remove('activeTab');
    });
    const activeTab = document.getElementById(activeTabId);
    activeTab.classList.add('activeTab');

    document.getElementById('top-img-1').src = images[activeTabId].top1;
    document.getElementById('top-img-2').src = images[activeTabId].top2;
    document.getElementById('bottom-img').src = images[activeTabId].bottom;
    document.getElementById('section-link').href = links[activeTabId];
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switchTab(tab.id);
    });
});

// Сделать первый таб активным по умолчанию
if (tabs.length > 0) {
    switchTab(tabs[0].id);
}


// табы конец



// для слайдера историй
document.getElementById('openPopup').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('popupOverlay');
    popup.classList.add('active');
    overlay.classList.add('active');

    // Инициализация Swiper после того, как всплывающее окно становится видимым
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4, // Отображение 4 слайдов одновременно
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });
});

document.getElementById('popupOverlay').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('popupOverlay');
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

document.getElementById('closeAll').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('popupOverlay');
    popup.classList.remove('active');
    overlay.classList.remove('active');
});


// для слайдера под херо

// Инициализация Swiper с эффектом coverflow


// Инициализация Swiper с эффектом coverflow


document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = document.querySelector('.my-swiper-container-1');
    let mySwiper;

    const initializeSwiper = () => {
        if (window.innerWidth > 1042) {
            if (!mySwiper) {
                mySwiper = new Swiper(swiperContainer, {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    centeredSlides: true,
                    loop: true,
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    },
                    slideActiveClass: 'my-swiper-slide-active',
                    slideNextClass: 'my-swiper-slide-next',
                    slidePrevClass: 'my-swiper-slide-prev',
                });

                // Прокрутить слайдер на 1 слайд назад сразу после инициализации
                mySwiper.slidePrev();

                // Добавление обработчика событий для перехода на слайд при клике
                document.querySelectorAll('.my-swiper-slide').forEach((slide, index) => {
                    if (slide instanceof Element) {
                        slide.addEventListener('click', () => {
                            mySwiper.slideToLoop(index);
                        });
                    } else {
                        console.error('Element not found or not an instance of Element:', slide);
                    }
                });
            }
        } else {
            if (mySwiper) {
                mySwiper.destroy(true, true);
                mySwiper = null;
            }
        }
    };

    // Инициализация слайдера при загрузке страницы
    initializeSwiper();

    // Перепроверка при изменении размера окна
    window.addEventListener('resize', initializeSwiper);
});



//окно истории
document.querySelectorAll('.popup_item').forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        const videoElement = document.getElementById('story-video');
        videoElement.querySelector('source').setAttribute('src', videoSrc);
        videoElement.load();
        document.getElementById('custom-popup').style.display = 'flex';
        videoElement.play();
    });
});

document.getElementById('custom-close-btn').addEventListener('click', function() {
    document.getElementById('custom-popup').style.display = 'none';
    document.getElementById('story-video').pause();
});
