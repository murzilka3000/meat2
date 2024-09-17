const BtnTab1 = document.getElementById('stages-tab1-btn');
const BtnTab2 = document.getElementById('stages-tab2-btn');
const tab1 = document.getElementById('stages-tab1');
const tab2 = document.getElementById('stages-tab2');

const tabButton1 = document.querySelector('.stages-tabs-button1 button');
const tabButton2 = document.querySelector('.stages-tabs-button2 button');

BtnTab1.addEventListener('click', () => {
    tab1.style.display = 'block';
    tab2.style.display = 'none';

    // Активируем первую кнопку, деактивируем вторую
    tabButton1.classList.add('active');
    tabButton2.classList.remove('active');
});

BtnTab2.addEventListener('click', () => {
    tab1.style.display = 'none';
    tab2.style.display = 'block';

    // Активируем вторую кнопку, деактивируем первую
    tabButton2.classList.add('active');
    tabButton1.classList.remove('active');
});