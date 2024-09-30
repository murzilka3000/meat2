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

AOS.init();