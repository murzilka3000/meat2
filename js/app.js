
document.querySelector('#hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

document.getElementById('close').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.style.display = 'none';
});


// отступы для абсолютной секции

function adjustMargin(absoluteBlockSelector, nextBlockSelector) {
  const header = document.querySelector('.header');
  const absoluteBlock = document.querySelector(absoluteBlockSelector);
  const nextBlock = document.querySelector(nextBlockSelector);
  
  // Проверяем наличие элементов
  if (header && absoluteBlock && nextBlock) {
      // Получаем высоту header и абсолютного блока
      const headerHeight = header.getBoundingClientRect().height;
      const absoluteHeight = absoluteBlock.getBoundingClientRect().height;
      
      // Рассчитываем отступ с учётом высоты header
      nextBlock.style.marginTop = (absoluteHeight - headerHeight) + 'px';
  }
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', function() {
  adjustMargin('.hero-about', '.about-content'); // Первая секция
  adjustMargin('.category-hero', '.category-recommendations'); // Вторая секция
  adjustMargin('.hero_blog', '.blog-stories'); // Вторая секция
  adjustMargin('.catalog-hero', '.cooking'); // Вторая секция
  adjustMargin('.product-hero', '.product-content'); // Вторая секция
  
  // Пересчитываем отступ при изменении размера окна
  window.addEventListener('resize', function() {
      adjustMargin('.hero-about', '.about-content', '.hero_blog');
      adjustMargin('.category-hero', '.category-recommendations', '.blog-stories');
      adjustMargin('.hero_blog', '.blog-stories'); // Вторая секция
      adjustMargin('.catalog-hero', '.cooking'); // Вторая секция
      adjustMargin('.product-hero', '.product-content'); // Вторая секция
  });
});


  // AOS.init();
  AOS.init();

  // динамический год в подвале
  function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

updateYear();