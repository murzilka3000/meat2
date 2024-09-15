const cardsData = [
    {
        category: 'Слово экспертам',
        date: '30 сентября',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Польза свинины: экспертное мнение су-шефа «Слово мясника»'
    },
    {
        category: 'Слово экспертам',
        date: '15 октября',
        imgSrc: '/images/blog/cards/2.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Слово экспертам',
        date: '15 октября',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Больше удовольствия',
        date: '15 октября',
        imgSrc: '/images/blog/cards/2.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Больше удовольствия',
        date: '15 октября',
        imgSrc: '/images/blog/cards/3.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Что нового',
        date: '15 октября',
        imgSrc: '/images/blog/cards/2.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Что нового',
        date: '15 октября',
        imgSrc: '/images/blog/cards/3.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Лайфхаки',
        date: '15 октября',
        imgSrc: '/images/blog/cards/6.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Лайфхаки',
        date: '15 октября',
        imgSrc: '/images/blog/cards/2.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Говорим открыто',
        date: '15 октября',
        imgSrc: '/images/blog/cards/5.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Говорим открыто',
        date: '15 октября',
        imgSrc: '/images/blog/cards/5.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Говорим открыто',
        date: '15 октября',
        imgSrc: '/images/blog/cards/5.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    {
        category: 'Говорим открыто',
        date: '15 октября',
        imgSrc: '/images/blog/cards/5.jpg',
        text: 'Новые тенденции в гастрономии'
    },
    // Добавьте другие карточки по аналогии
];



const cardsContainer = document.getElementById('cards-container');
const loadMoreButton = document.getElementById('load-more');
const filterButtons = document.querySelectorAll('.blog-filters button');
let cardsPerPage = 6; // Количество карточек на страницу
let currentPage = 1; // Текущая страница (количество нажатий на кнопку)
let currentFilter = 'all'; // Текущий фильтр

// Функция для рендеринга карточек
function renderCards(cards) {
    cards.forEach(card => {
        const cardElement = `
            <div class="hero_blog-card">
                <div class="hero_blog-card-img">
                    <img src="${card.imgSrc}" alt="">
                </div>
                <div>
                    <div class="hero_blog-card-meta">
                        <span>${card.category}</span>
                        <span>${card.date}</span>
                    </div>
                    <div class="hero_blog-card-text">
                        <p>${card.text}</p>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.insertAdjacentHTML('beforeend', cardElement);
    });
}

// Функция для загрузки карточек с учетом фильтрации
function loadCards(filter) {
    const filteredCards = filter === 'all' ? cardsData : cardsData.filter(card => card.category === filter);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = currentPage * cardsPerPage;
    const cardsToRender = filteredCards.slice(startIndex, endIndex);
    
    renderCards(cardsToRender);

    // Если больше карточек нет, скрываем кнопку
    if (endIndex >= filteredCards.length) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block'; // Показываем кнопку, если есть еще карточки
    }

    currentPage++; // Увеличиваем страницу на 1
}

// Функция для фильтрации карточек
function filterCards(filter) {
    currentFilter = filter; // Обновляем текущий фильтр
    currentPage = 1; // Сбрасываем текущую страницу
    cardsContainer.innerHTML = ''; // Очищаем контейнер перед рендером
    loadCards(filter); // Загружаем карточки по фильтру
}

// Начальный рендер первых 6 карточек без фильтрации
loadCards(currentFilter);

// Обработчик клика по кнопке "Загрузить еще"
loadMoreButton.addEventListener('click', () => {
    loadCards(currentFilter); // Подгружаем карточки с учетом текущего фильтра
});

// Обработчики клика по кнопкам фильтров
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        filterCards(filter); // Фильтруем карточки
        toggleActiveClass(e.target); // Обновляем активный класс для кнопок
    });
});

// Функция для переключения активного класса на кнопках фильтров
function toggleActiveClass(targetButton) {
    filterButtons.forEach(button => {
        button.classList.remove('active'); // Убираем класс активной у всех кнопок
    });
    targetButton.classList.add('active'); // Добавляем класс активной к текущей кнопке
}


const swiper = new Swiper('.hero_blog-swiper', {
    loop: true, // Enables looping of slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1.4, // Show one slide at a time
    spaceBetween: 20, // Space between slides
  });