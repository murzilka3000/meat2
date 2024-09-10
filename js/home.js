
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

    const mainTitle = document.getElementById('mainTitle');
    const subTitle = document.getElementById('subTitle');
    const mainTitle2 = document.getElementById('mainTitle2');
    const subTitle2 = document.getElementById('subTitle2');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton2 = document.getElementById('prevButton2');
    const nextButton2 = document.getElementById('nextButton2');
    const dotsContainer = document.getElementById('dotsContainer');
    const dotsContainer2 = document.getElementById('dotsContainer2');
    const gestureContainer = document.querySelector('.hero_left-block');
    const hero1 = document.querySelector('.hero1');
    const heroContainer = document.querySelector('.hero_container');

    function updateContent() {
        mainTitle.textContent = titles[currentIndex];
        subTitle.textContent = subtitles[currentIndex];
        if (mainTitle2) {
            mainTitle2.textContent = titles[currentIndex];
        }
        if (subTitle2) {
            subTitle2.textContent = subtitles[currentIndex];
        }
        updateDots();
    }

    function animateElements() {
        mainTitle.classList.add('fade-out');
        subTitle.classList.add('fade-out');
        hero1.classList.add('fade-out');
        heroContainer.classList.add('fade-out');
        if (mainTitle2) {
            mainTitle2.classList.add('fade-out');
        }
        if (subTitle2) {
            subTitle2.classList.add('fade-out');
        }

        setTimeout(() => {
            updateContent();
            mainTitle.classList.remove('fade-out');
            subTitle.classList.remove('fade-out');
            hero1.classList.remove('fade-out');
            heroContainer.classList.remove('fade-out');
            if (mainTitle2) {
                mainTitle2.classList.remove('fade-out');
            }
            if (subTitle2) {
                subTitle2.classList.remove('fade-out');
            }

            mainTitle.classList.add('fade-in');
            subTitle.classList.add('fade-in');
            if (mainTitle2) {
                mainTitle2.classList.add('fade-in');
            }
            if (subTitle2) {
                subTitle2.classList.add('fade-in');
            }
        }, 500); // Время должно совпадать с анимацией в CSS

        setTimeout(() => {
            mainTitle.classList.remove('fade-in');
            subTitle.classList.remove('fade-in');
            if (mainTitle2) {
                mainTitle2.classList.remove('fade-in');
            }
            if (subTitle2) {
                subTitle2.classList.remove('fade-in');
            }
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
            if (dotsContainer2) {
                const dot2 = dot.cloneNode(true);
                dot2.addEventListener('click', () => {
                    currentIndex = index;
                    animateElements();
                });
                dotsContainer2.appendChild(dot2);
            }
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('#dotsContainer .dot');
        const dots2 = document.querySelectorAll('#dotsContainer2 .dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        dots2.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            animateElements();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            animateElements();
        });
    }

    if (prevButton2) {
        prevButton2.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            animateElements();
        });
    }

    if (nextButton2) {
        nextButton2.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            animateElements();
        });
    }

    createDots();
    updateContent();

    // Добавление поддержки жестов
    if (typeof Hammer !== 'undefined') {
        const hammer = new Hammer(gestureContainer);
        hammer.on('swipeleft', () => {
            console.log('Swipe left detected');
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            animateElements();
        });

        hammer.on('swiperight', () => {
            console.log('Swipe right detected');
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            animateElements();
        });
    } else {
        console.error('Hammer.js is not loaded');
    }
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
        top1: '/images/tab1-1.svg',
        top2: '/images/tab-1-2.svg',
        bottom: '/images/tab-1-3.svg'
    },
    tab3: {
        top1: '/images/tab1-1.svg',
        top2: '/images/tab-1-2.svg',
        bottom: '/images/tab-1-3.svg'
    },
    tab4: {
        top1: '/images/tab1-1.svg',
        top2: '/images/tab-1-2.svg',
        bottom: '/images/tab-1-3.svg'
    },
    tab5: {
        top1: '/images/tab1-1.svg',
        top2: '/images/tab-1-2.svg',
        bottom: '/images/tab-1-3.svg'
    },
    tab6: {
        top1: '/images/tab1-1.svg',
        top2: '/images/tab-1-2.svg',
        bottom: '/images/tab-1-3.svg'
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

const titles = {
    tab1: 'Гриль',
    tab2: 'Фарш',
    tab3: 'Крупнокусковые',
    tab4: 'Мелкокусковые',
    tab5: 'Для запекания',
    tab6: 'Кулинария'
};

function switchTab(activeTabId) {
    tabs.forEach(tab => {
        tab.classList.remove('activeTab');
    });
    const activeTab = document.getElementById(activeTabId);
    activeTab.classList.add('activeTab');

    const topImg1 = document.getElementById('top-img-1');
    const topImg2 = document.getElementById('top-img-2');
    const bottomImg = document.getElementById('bottom-img');
    const sectionLink = document.getElementById('section-link');
    const tabTitle = document.getElementById('tab-title');

    // Удалить предыдущие анимации
    topImg1.classList.remove('fade-left2');
    topImg2.classList.remove('fade-left2');
    bottomImg.classList.remove('fade-left2');
    sectionLink.classList.remove('fade-left2');
    tabTitle.classList.remove('fade-left2');

    // Принудительно перерисовать элементы для повторной анимации
    void topImg1.offsetWidth;
    void topImg2.offsetWidth;
    void bottomImg.offsetWidth;
    void sectionLink.offsetWidth;
    void tabTitle.offsetWidth;

    // Обновить содержимое
    topImg1.src = images[activeTabId].top1;
    topImg2.src = images[activeTabId].top2;
    bottomImg.src = images[activeTabId].bottom;
    sectionLink.href = links[activeTabId];
    tabTitle.innerText = titles[activeTabId];

    // Добавить анимации
    topImg1.classList.add('fade-left2');
    topImg2.classList.add('fade-left2');
    bottomImg.classList.add('fade-left2');
    sectionLink.classList.add('fade-left2');
    tabTitle.classList.add('fade-left2');
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

// табы конец (нужно добавить анимацию при переключении fade-left)


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



function reorderImages() {
    const container = document.querySelector('.sli-cont');
    const images = Array.from(container.getElementsByTagName('img'));
    const sli2 = document.getElementById('sli2');
    
    // Добавляем класс fade-left для плавного исчезновения и сдвига влево
    sli2.classList.add('fade-left');

    // После завершения анимации изменяем порядок изображений
    sli2.addEventListener('transitionend', function() {
        container.innerHTML = '';
        const newOrder = images.slice(1).concat(images[0]);
        newOrder.forEach(img => {
            img.classList.remove('fade-left');
            container.appendChild(img);
        });
    }, { once: true });
}

document.getElementById('sli1').addEventListener('click', reorderImages);




function reorderImages(clickedImage) {
    const container = document.querySelector('.sli-cont');
    const images = Array.from(container.getElementsByTagName('img'));
    
    // Добавляем класс fade-left для плавного исчезновения и сдвига влево
    clickedImage.classList.add('fade-left');

    // После завершения анимации изменяем порядок изображений
    clickedImage.addEventListener('transitionend', function() {
        container.innerHTML = '';
        const clickedIndex = images.indexOf(clickedImage);
        const newOrder = images.slice(clickedIndex).concat(images.slice(1, clickedIndex));
        newOrder.forEach(img => {
            img.classList.remove('fade-left');
            container.appendChild(img);
        });
    }, { once: true });
}

document.querySelectorAll('.sli-cont img').forEach(img => {
    img.addEventListener('click', function() {
        reorderImages(this);
    });
});





