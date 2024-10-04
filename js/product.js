const sliderWrapper = document.querySelector('.custom-slider-wrapper');
const slides = document.querySelectorAll('.custom-slide');
const prevButton = document.querySelector('.custom-prev');
const nextButton = document.querySelector('.custom-next');
const pagination = document.querySelector('.custom-pagination');

let currentIndex = 0;
const totalSlides = slides.length;

// Динамическое создание пагинации
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('custom-dot');
    dot.setAttribute('data-index', index);
    if (index === 0) dot.classList.add('active');
    pagination.appendChild(dot);
});

// Обработчик кликов по пагинации
const dots = document.querySelectorAll('.custom-dot');
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        goToSlide(index);
    });
});

// Функция для переключения слайдов
function goToSlide(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
}