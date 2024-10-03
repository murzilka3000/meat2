document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container2', {
        slidesPerView: 2.5, // Number of slides per view
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




const images = [
    '/images/useful_item-bg1.jpg',
    '/images/useful_item-bg2.jpg',
    '/images/useful_item-bg1.jpg',
    '/images/useful_item-bg2.jpg',
];

let currentIndex = 0;

const sliderContainer = document.querySelector('.articles-content-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

// Функция для изменения фона
function updateBackground() {
    sliderContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    sliderContainer.style.borderRadius = '16px';
    updateDots();
}

// Создаем точки навигации
function createDots() {
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateBackground();
        });
        dotsContainer.appendChild(dot);
    });
}

// Обновляем активную точку
function updateDots() {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Изначально установить первое изображение и создать точки
createDots();
updateBackground();

// Обработчики событий для кнопок
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
});









