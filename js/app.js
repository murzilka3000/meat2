function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

updateYear();

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


// document.addEventListener('DOMContentLoaded', function() {
//     const nav = document.querySelector('.header_nav');

//     nav.addEventListener('click', function(event) {
//         if (event.target.tagName === 'A') {
//             // Проверяем, что ссылка не якорная (например, '#')
//             if (!event.target.getAttribute('href').startsWith('#')) {
//                 event.preventDefault(); // Предотвратить стандартное поведение только для внешних ссылок
//             }
            
//             console.log('Клик по элементу:', event.target.id); // Отладочный вывод

//             // Удалить класс 'active-nav' у всех элементов
//             document.querySelectorAll('.header_nav a').forEach(navItem => {
//                 navItem.classList.remove('active-nav');
//             });

//             // Добавить класс 'active-nav' к текущему элементу
//             event.target.classList.add('active-nav');
//         }
//     });
// });

AOS.init();