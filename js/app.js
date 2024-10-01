
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

function adjustMargin() {
    const header = document.querySelector('.header');
    const absoluteBlock = document.querySelector('.hero-about');
    const nextBlock = document.querySelector('.about-content');
    
    // Проверяем наличие элементов
    if (header && absoluteBlock && nextBlock) {
      // Получаем высоту header и hero-about
      const headerHeight = header.getBoundingClientRect().height;
      const absoluteHeight = absoluteBlock.getBoundingClientRect().height;
      
      // Рассчитываем отступ с учётом высоты header
      nextBlock.style.marginTop = (absoluteHeight - headerHeight) + 'px';
    }
  }
  
  // Вызываем функцию при загрузке страницы
  window.addEventListener('load', function() {
    adjustMargin();
    
    // Пересчитываем отступ при изменении размера окна
    window.addEventListener('resize', adjustMargin);
  });

  



  AOS.init();


  function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

updateYear();