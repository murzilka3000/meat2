

let lastScrollTop = 0; // Хранит последнее положение прокрутки

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Скроллим вниз
        document.getElementById('sli1').style.transform = 'translateX(-120px)'; // Для sli1
        document.getElementById('sli2').style.transform = 'translateX(-100px)'; // Для sli2
        document.getElementById('sli3').style.transform = 'translateX(-50px)'; // Для sli3
    } else {
        // Скроллим вверх
        document.getElementById('sli1').style.transform = 'translateX(20px)'; // Для sli1
        document.getElementById('sli2').style.transform = 'translateX(0px)'; // Для sli2
        document.getElementById('sli3').style.transform = 'translateX(0px)'; // Для sli3

    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Для мобильных устройств
});



let previousScrollTop = 0; // Хранит предыдущее положение прокрутки
let sli5Offset = 0, sli6Offset = 0, sli7Offset = 0; // Смещения для карточек

const maxOffset = 390; // Максимальное смещение для всех карточек
const speedMultiplier = 2.5; // Коэффициент ускорения

const sli5 = document.getElementById('sli5');
const sli6 = document.getElementById('sli6');
const sli7 = document.getElementById('sli7');

// Обработчик события прокрутки
window.addEventListener('scroll', function () {
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop; 
    const scrollDiff = (currentScrollTop - previousScrollTop) * speedMultiplier; // Ускоряем разницу прокрутки
    const scrollDown = scrollDiff > 0;

    if (scrollDown) {
        if (sli5Offset < maxOffset) {
            sli5Offset = Math.min(sli5Offset + scrollDiff, maxOffset);
            sli5.style.transform = `translateX(${-sli5Offset}px)`;
        } else if (sli6Offset < maxOffset) {
            sli6Offset = Math.min(sli6Offset + scrollDiff, maxOffset);
            sli6.style.transform = `translateX(${-sli6Offset}px)`;
        } else if (sli7Offset < maxOffset) {
            sli7Offset = Math.min(sli7Offset + scrollDiff, maxOffset);
            sli7.style.transform = `translateX(${-sli7Offset}px)`;
        }
    } else {
        if (sli7Offset > 0) {
            sli7Offset = Math.max(sli7Offset + scrollDiff, 0);
            sli7.style.transform = `translateX(${-sli7Offset}px)`;
        } else if (sli6Offset > 0) {
            sli6Offset = Math.max(sli6Offset + scrollDiff, 0);
            sli6.style.transform = `translateX(${-sli6Offset}px)`;
        } else if (sli5Offset > 0) {
            sli5Offset = Math.max(sli5Offset + scrollDiff, 0);
            sli5.style.transform = `translateX(${-sli5Offset}px)`;
        }
    }

    previousScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
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

// табы начало

const tabs = document.querySelectorAll('[id^="tab"]');
const tabContainer = document.querySelector('.tab'); // Находим элемент с классом .tab

const images = {
    tab1: { top1: '/images/home-tabs/top1/1.svg', top2: '', bottom: '/images/home-tabs/bottom/6.svg' },
    tab2: { top1: '/images/home-tabs/top1/2.svg', top2: '', bottom: '/images/home-tabs/bottom/5.svg' },
    tab3: { top1: '/images/home-tabs/top1/3.svg', top2: '', bottom: '/images/home-tabs/bottom/4.svg' },
    tab4: { top1: '/images/home-tabs/top1/4.svg', top2: '', bottom: '/images/home-tabs/bottom/3.svg' },
    tab5: { top1: '/images/home-tabs/top1/5.svg', top2: '', bottom: '/images/home-tabs/bottom/2.svg' },
    tab6: { top1: '/images/home-tabs/top1/6.svg', top2: '', bottom: '/images/home-tabs/bottom/1.svg' }
};

const links = {
    tab1: '/category-item.html',
    tab2: '/category-item.html',
    tab3: '/category-item.html',
    tab4: '/category-item.html',
    tab5: '/category-item.html',
    tab6: '/category-item.html'
};

const titles = {
    tab1: 'Гриль',
    tab2: 'Фарш',
    tab3: 'Крупнокусковые',
    tab4: 'Мелкокусковые',
    tab5: 'Для запекания',
    tab6: 'Кулинария'
};

// Добавляем объект с фонами для каждого таба
const backgrounds = {
    tab1: 'url("../images/bgtab3.jpg")',
    tab2: 'url("../images/bgtab2.jpg")',
    tab3: 'url("../images/bgtab2.jpg")',
    tab4: 'url("../images/bgtab2.jpg")',
    tab5: 'url("../images/bgtab2.jpg")',
    tab6: 'url("../images/bgtab2.jpg")'
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

    // Удаляем предыдущие анимации
    topImg1.classList.remove('fade-left2');
    topImg2.classList.remove('fade-left2');
    bottomImg.classList.remove('fade-left2');
    sectionLink.classList.remove('fade-left2');
    tabTitle.classList.remove('fade-left2');

    // Принудительно перерисовываем для анимации
    void topImg1.offsetWidth;
    void topImg2.offsetWidth;
    void bottomImg.offsetWidth;
    void sectionLink.offsetWidth;
    void tabTitle.offsetWidth;

    // Обновляем содержимое
    topImg1.src = images[activeTabId].top1;
    topImg2.src = images[activeTabId].top2;
    bottomImg.src = images[activeTabId].bottom;
    sectionLink.href = links[activeTabId];
    tabTitle.innerText = titles[activeTabId];

    // Меняем фон в элементе .tab
    tabContainer.style.backgroundImage = backgrounds[activeTabId];

    // Добавляем анимации
    topImg1.classList.add('fade-left2');
    topImg2.classList.add('fade-left2');
    bottomImg.classList.add('fade-left2');
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