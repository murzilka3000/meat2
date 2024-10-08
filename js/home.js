//слайдер с наложением

window.addEventListener('scroll', function onScroll() {
    const scrollY = window.scrollY;  // Текущая позиция скролла
    const triggerPoint = 300;        // Точка начала анимации первой карточки
    
    // Обрабатываем первую карточку (id 'sli2')
    if (scrollY >= triggerPoint) {
        var image2 = document.getElementById('sli2');
        var offset2 = Math.min(scrollY - triggerPoint, 93);  // Сдвигаем напрямую
        var scale2 = Math.min(1 + (scrollY - triggerPoint) / 500, 1); // Увеличение до 100%
        var opacity2 = Math.min((scrollY - triggerPoint) / 100, 1);   // Прозрачность до 1
        
        image2.style.transform = `translateX(-${offset2}%) scale(${scale2})`;
        image2.style.opacity = `${opacity2}`;
        image2.style.zIndex = '1';  // Задний план для второй карточки
    }

    // Обрабатываем вторую карточку (id 'sli3')
    if (scrollY >= triggerPoint + 50) {  // Начинаем через 50px скролла для третьей карточки
        var image3 = document.getElementById('sli3');
        var offset3 = Math.min(scrollY - (triggerPoint + 50), 190);  // Сдвиг третьей карточки
        var scale3 = Math.min(1 + (scrollY - (triggerPoint + 50)) / 500, 1); // Увеличение до 100% для третьей карточки
        var opacity3 = Math.min((scrollY - (triggerPoint + 50)) / 100, 1);   // Прозрачность до 1 для третьей карточки
        
        image3.style.transform = `translateX(-${offset3}%) scale(${scale3})`;
        image3.style.opacity = `${opacity3}`; 
        image3.style.zIndex = '2';  // Поднимаем выше второй карточки
    }
});



// для слайдера историй
document.getElementById('openPopup').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('popupOverlay');
    popup.classList.add('active');
    overlay.classList.add('active');

    // Инициализация Swiper после того, как всплывающее окно становится видимым
    var swiper = new Swiper('.swiper-container', {// Отображение 4 слайдов одновременно
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
        loop: true,              
        autoplay: {
            delay: 10000,            // Задержка между переключениями (в миллисекундах)
            disableOnInteraction: false,  // Не отключать автоплей при взаимодействии с пользователем
        },
        breakpoints: {
            1300: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 1,
                spaceBetween: 40,
                
            },
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
        'Тут будет размещен ваш текст',
        'Тут будет размещен ваш текст',
        'Тут будет размещен ваш текст',
        'Тут будет размещен ваш текст'
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
        hero1.classList.add('fade-out');
        heroContainer.classList.add('fade-out');
        if (mainTitle2) {
            heroContainer.classList.add('fade-out');
            hero1.classList.add('fade-out');
        }
        if (subTitle2) {
            heroContainer.classList.add('fade-out');
            hero1.classList.add('fade-out');
        }

        setTimeout(() => {
            updateContent();
            hero1.classList.remove('fade-out');
            heroContainer.classList.remove('fade-out');
            if (mainTitle2) {
              //  mainTitle2.classList.remove('fade-out');
                heroContainer.classList.remove('fade-out');
                hero1.classList.remove('fade-out');
            }
            if (subTitle2) {
               // subTitle2.classList.remove('fade-out');
                heroContainer.classList.remove('fade-out');
                hero1.classList.remove('fade-out');
            }

            heroContainer.classList.add('fade-in');
            hero1.classList.add('fade-in');
            if (mainTitle2) {
               // mainTitle2.classList.add('fade-in');
                heroContainer.classList.add('fade-in');
                hero1.classList.add('fade-in');
            }
            if (subTitle2) {
              //  subTitle2.classList.add('fade-in');
                heroContainer.classList.add('fade-in');
                hero1.classList.add('fade-in');
            }
        }, 500); // Время должно совпадать с анимацией в CSS

        setTimeout(() => {
            heroContainer.classList.remove('fade-in');
            hero1.classList.remove('fade-in');
            if (mainTitle2) {
              //  mainTitle2.classList.remove('fade-in');
                heroContainer.classList.remove('fade-in');
                hero1.classList.remove('fade-in');
            }
            if (subTitle2) {
                heroContainer.classList.remove('fade-in');
                hero1.classList.remove('fade-in');
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
        top1: '/images/home-tabs/top1/1.svg',
        top2: '',
        bottom: '/images/home-tabs/bottom/6.svg'
    },
    tab2: {
        top1: '/images/home-tabs/top1/2.svg',
        top2: '',
        bottom: '/images/home-tabs/bottom/5.svg',
    },
    tab3: {
        top1: '/images/home-tabs/top1/3.svg',
        top2: '',
        bottom: '/images/home-tabs/bottom/4.svg'
    },
    tab4: {
        top1: '/images/home-tabs/top1/4.svg',
        top2: '',
        bottom: '/images/home-tabs/bottom/3.svg'
    },
    tab5: {
        top1: '/images/home-tabs/top1/5.svg',
        top2: '',
        bottom: '/images/home-tabs/bottom/2.svg'
    },
    tab6: {
        top1: '/images/home-tabs/top1/6.svg',
        top2: '',
        bottom: '/images/home-tabs/bottom/1.svg'
    }
};

const links = {
    tab1: '/category-item.html',
    tab2: 'category-item.html',
    tab3: 'category-item.html',
    tab4: 'category-item.html',
    tab5: 'category-item.html',
    tab6: 'category-item.html'
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
    //sectionLink.classList.add('fade-left2');
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






document.getElementById("stoty-1").addEventListener("click", function() {
    changeImagePath('s1');
  });
  
  document.getElementById("stoty-2").addEventListener("click", function() {
    changeImagePath('s2');
  });
  
  document.getElementById("stoty-3").addEventListener("click", function() {
    changeImagePath('s3');
  });
  
  function changeImagePath(newPathSegment) {
    const slides = document.querySelectorAll('.swiper-slide img');
    
    slides.forEach(function(img) {
      // Определяем текущий сегмент пути
      const currentPathSegment = img.src.match(/\/s[0-9]+\//);
      
      if (currentPathSegment) {
        // Заменяем текущий сегмент пути на новый
        img.src = img.src.replace(currentPathSegment[0], `/${newPathSegment}/`);
      }
    });
}