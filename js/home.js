
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
        breakpoints: {
            1300: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 2,
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


$(document).ready(function() {
$('[data-fancybox="gallery"]').fancybox({
    loop: true,
    buttons: [
        "zoom",
        "close"
    ],
});
});


//слайдер с наложением


// let isScrollLocked = false;
// let lastScrollTop = 0; // Для хранения позиции скролла

// function lockScroll() {
//     lastScrollTop = window.scrollY; // Сохраняем текущую позицию

//     // Блокируем прокрутку
//     document.documentElement.style.overflow = 'hidden'; // Отключаем скролл на уровне html
//     document.body.style.overflow = 'hidden';            // Отключаем скролл на уровне body

//     isScrollLocked = true; // Устанавливаем флаг блокировки
// }

// function unlockScroll() {
//     // Снимаем блокировку прокрутки
//     document.documentElement.style.overflow = ''; // Восстанавливаем скролл на уровне html
//     document.body.style.overflow = '';            // Восстанавливаем скролл на уровне body

//     // Возвращаемся к сохраненной позиции скролла
//     window.scrollTo(0, lastScrollTop);

//     isScrollLocked = false; // Снимаем блокировку
// }

// window.addEventListener('scroll', function onScroll() {
//     if (!isScrollLocked && window.scrollY >= 500) {
//         lockScroll();

//         // Проигрываем анимацию для элемента #sli2
//         var image2 = document.getElementById('sli2');
//         image2.style.transform = 'translateX(-103%)';
//         image2.style.opacity = '1'; 
//         image2.style.height = '100%';

//         // Проигрываем вторую анимацию через 4 секунды
//         setTimeout(() => {
//             var image3 = document.getElementById('sli3');
//             image3.style.transform = 'translateX(-206%)';
//             image3.style.opacity = '1'; 
//             image3.style.height = '100%';

//             // Разблокируем скролл через 2 секунды после второй анимации
//             setTimeout(() => {
//                 unlockScroll(); // Разблокируем скролл

//                 // Убираем обработчик scroll, чтобы предотвратить повторное срабатывание
//                 window.removeEventListener('scroll', onScroll);
//             }, 0);
//         }, 2000); // Задержка 4 секунды для второй анимации
//     }
// });


let isScrollLocked = false;
let lastScrollTop = 0; // Для хранения позиции скролла
let virtualScroll = 0; // Виртуальная позиция скролла
const scrollStep = 10; // Шаг для виртуального скролла

function lockScroll() {
    lastScrollTop = window.scrollY; // Сохраняем текущую позицию

    // Блокируем реальную прокрутку
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    isScrollLocked = true; // Устанавливаем флаг блокировки
}

function unlockScroll() {
    // Снимаем блокировку прокрутки
    document.documentElement.style.overflow = ''; 
    document.body.style.overflow = '';            

    // Возвращаемся к сохраненной позиции скролла
    window.scrollTo(0, lastScrollTop);

    isScrollLocked = false; // Снимаем блокировку
}

function handleVirtualScroll(event) {
    if (isScrollLocked) {
        // Рассчитываем виртуальный скролл в зависимости от движения колесика мыши
        const delta = event.deltaY;
        virtualScroll += delta * 0.1; // Можете менять этот множитель для скорости анимации

        // Ограничиваем виртуальный скролл до значений, чтобы не уходить слишком далеко
        virtualScroll = Math.max(0, virtualScroll);
        
        // Привязываем виртуальный скролл к анимации
        const image2 = document.getElementById('sli2');
        const image3 = document.getElementById('sli3');
        
        if (virtualScroll >= 0 && virtualScroll < 100) {
            image2.style.transform = `translateX(${Math.max(-103 - virtualScroll, -103)}%)`;
            image2.style.opacity = (virtualScroll / 100).toString();
            image2.style.height = `${100 + virtualScroll}%`;
        }

        if (virtualScroll >= 100 && virtualScroll < 200) {
            const scrollFactor = virtualScroll - 100;
            image3.style.transform = `translateX(${Math.max(-206 - scrollFactor, -206)}%)`;
            image3.style.opacity = (scrollFactor / 100).toString();
            image3.style.height = `${100 + scrollFactor}%`;
        }

        // Останавливаем событие на реальном скролле
        event.preventDefault();
    }
}

window.addEventListener('scroll', function onScroll() {
    if (!isScrollLocked && window.scrollY >= 400) {
        lockScroll();

        // Проигрываем анимацию для элемента #sli2
        var image2 = document.getElementById('sli2');
        image2.style.transform = 'translateX(-103%)';
        image2.style.opacity = '1'; 
        image2.style.height = '100%';

        // Начинаем слушать виртуальный скролл через колесо мыши
        window.addEventListener('wheel', handleVirtualScroll);

        // Убираем обработчик скролла, чтобы предотвратить повторное срабатывание
        window.removeEventListener('scroll', onScroll);
    }
});

// Разблокируем скролл через таймер или при завершении анимации
setTimeout(() => {
    unlockScroll();
    window.removeEventListener('wheel', handleVirtualScroll);
}, 6000); // Примерный таймер для завершения анимаций