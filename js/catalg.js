document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container22', {
        slidesPerView: 4, // Number of slides per view
        spaceBetween: 10, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next22',
        },
        loop: true,
        breakpoints: {
            1170: {
                slidesPerView: 4,
            },
            879: {
                slidesPerView: 3,
            },
            676: {
                slidesPerView: 2.4,
            },
            506: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1.5,
            },
        }
    });
});


//табы каталога

const buttons = document.querySelectorAll('.filter-btn');
const contentItems = document.querySelectorAll('.content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Удаляем класс active у всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));

    // Добавляем класс active к нажатой кнопке
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    // Показываем только соответствующий контент
    contentItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-category') === filter) {
        item.classList.add('active');
      }
    });
  });
});

// Показываем первый таб при загрузке
buttons[0].click();