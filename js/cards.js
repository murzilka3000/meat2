import { cards } from './data-cards.js';

var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  slidesPerView: 1.4, // Количество видимых слайдов
  spaceBetween: 10, // Отступ между слайдами
});



// //обработчики  загрузки карточек


const ITEMS_PER_PAGE = 6;
let currentPage = 0;
let filteredCards = [];
let totalPages = 0;

// Функция фильтрации карточек
function filterCards() {
  const selectedCollections = Array.from(document.querySelectorAll('.custom-dropdown:nth-child(1) .dropdown-content input:checked')).map(checkbox => checkbox.value);
  const selectedCategories = Array.from(document.querySelectorAll('.custom-dropdown:nth-child(2) .dropdown-content input:checked')).map(checkbox => checkbox.value);
  const selectedTimes = Array.from(document.querySelectorAll('.custom-dropdown:nth-child(3) .dropdown-content input:checked')).map(checkbox => checkbox.value);

  filteredCards = cards.filter(card => {
    const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(card.collection);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(card.category);
    const matchesTime = selectedTimes.length === 0 || selectedTimes.includes(card.time);

    return matchesCollection && matchesCategory && matchesTime;
  });

  totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  currentPage = 0; // Сбрасываем текущую страницу для новой фильтрации
}

// Функция пагинации отфильтрованных карточек
function getPaginatedCards(page) {
  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return filteredCards.slice(start, end);
}

// Функция рендеринга карточек
function renderCards(container, cardsArray) {
  cardsArray.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('card', 'cards-time');
    div.setAttribute('data-collection', card.collection);
    div.setAttribute('data-category', card.category);
    div.setAttribute('data-time', card.time);
    
    div.innerHTML = `
      <div class="card-img">
        <img src="${card.imgSrc}" alt="">
      </div>
      <div>
        <p class="useful_item-text">${card.title}</p>
        <div class="useful_item-time_container">
          <img src="/images/time.svg" alt="">
          <p class="useful_item-text">${card.timeText}</p>
        </div>
      </div>
    `;
    
    container.appendChild(div);
  });
}

// Функция загрузки дополнительных карточек
function loadMoreCards() {
  if (currentPage >= totalPages) return; // Все карточки уже загружены

  const container = document.querySelector('.cards-container');
  const cardsToRender = getPaginatedCards(currentPage);
  
  renderCards(container, cardsToRender);
  currentPage += 1;
}

// Обработчик для фильтрации
document.querySelector('.filterButton').addEventListener('click', () => {
  filterCards();
  currentPage = 0; // Сбрасываем текущую страницу после фильтрации
  const container = document.querySelector('.cards-container');
  container.innerHTML = ''; // Очищаем контейнер перед рендерингом
  loadMoreCards(); // Загружаем первую порцию карточек после фильтрации
});

// Обработчик для кнопки загрузки
document.getElementById('load-more').addEventListener('click', loadMoreCards);

// Изначально загрузить первую порцию карточек
document.addEventListener('DOMContentLoaded', () => {
  filterCards(); // Инициализируем фильтрацию
  loadMoreCards(); // Загружаем первую порцию карточек
});
