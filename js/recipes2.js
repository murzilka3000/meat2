const cardsData = [
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На завтрак'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На обед'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На ужин'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Быстро и просто'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Быстро и просто'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Быстро и просто'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На ужин'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На ужин'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На ужин'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На ужин'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'На ужин'
    },
    {
        category: 'Крупнокусковые',
        imgSrc: '/images/blog/cards/3.jpg',
        text: 'Правильное питание'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/2.jpg',
        text: 'Правильное питание'    },
    {
        category: 'Крупнокусковые',
        imgSrc: '/images/blog/cards/4.jpg',
        text: 'Правильное питание'    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/5.jpg',
        text: 'Правильное питание'    },
    {
        category: 'Фарш',
        imgSrc: '/images/blog/cards/6.jpg',
        text: 'Подходит детям'
    },
    {
        category: 'Гриль',
        imgSrc: '/images/blog/cards/2.jpg',
        text: 'Подходит детям'    },
    {
        category: 'Фарш',
        imgSrc: '/images/blog/cards/3.jpg',
        text: 'Подходит детям'    },
    {
        category: 'Мелкокусковые',
        imgSrc: '/images/blog/cards/4.jpg',
        text: 'Подходит детям'    },
    {
        category: 'Мелкокусковые',
        imgSrc: '/images/blog/cards/5.jpg',
        text: 'От шефа'
    },
    {
        category: 'Мелкокусковые',
        imgSrc: '/images/blog/cards/6.jpg',
        text: 'От шефа'    },
    {
        category: 'Мелкокусковые',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'От шефа'    },
    {
        category: 'Для запекания',
        imgSrc: '/images/blog/cards/2.jpg',
        text: 'От шефа'    },
    {
        category: 'Кулинария',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'От шефа'    },
    {
        category: 'Для запекания',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Родная кухня'
    },
    {
        category: 'Кулинария',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Родная кухня'
    },
    {
        category: 'Кулинария',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Родная кухня'
    },
    {
        category: 'Кулинария',
        imgSrc: '/images/blog/cards/1.jpg',
        text: 'Родная кухня'
    },
];



const cardsContainer = document.getElementById('cards-container5');
const loadMoreButton = document.getElementById('load-more2');
const filterButtons = document.querySelectorAll('.blog-filters button');
let cardsPerPage = 8; // Количество карточек на страницу
let currentPage = 1; // Текущая страница (количество нажатий на кнопку)
let currentFilter = 'all'; // Текущий фильтр

// Функция для рендеринга карточек
function renderCards(cards) {
    cards.forEach(card => {
        const cardElement = `
            <div data-aos="zoom-in" class="hero_blog-card">
                <div class="hero_blog-card-img">
                    <img src="${card.imgSrc}" alt="">
                </div>
                <div>
                    <div class="hero_blog-card-text hero_blog-card-text2">
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