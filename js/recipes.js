const video = document.getElementById('background-video');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const videoPoster = document.getElementById('video-poster');

function showButton() {
    if (video.paused) {
        playIcon.style.display = 'block';
    } else {
        pauseIcon.style.display = 'block';
    }
}

function hideButton() {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'none';
}

video.addEventListener('mouseenter', showButton);
video.addEventListener('mouseleave', hideButton);
playPauseBtn.addEventListener('mouseenter', showButton);
playPauseBtn.addEventListener('mouseleave', hideButton);

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        videoPoster.style.display = 'none';
        video.style.display = 'block';
    } else {
        video.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        videoPoster.style.display = 'block';
        video.style.display = 'none';
    }
});


//filters

document.querySelectorAll('.filterButton').forEach(button => {
    button.addEventListener('click', function() {
        const selectedCollections = Array.from(document.querySelectorAll('.custom-dropdown:nth-child(1) .dropdown-content input:checked')).map(checkbox => checkbox.value);
        const selectedCategories = Array.from(document.querySelectorAll('.custom-dropdown:nth-child(2) .dropdown-content input:checked')).map(checkbox => checkbox.value);
        const selectedTimes = Array.from(document.querySelectorAll('.custom-dropdown:nth-child(3) .dropdown-content input:checked')).map(checkbox => checkbox.value);
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const cardCollection = card.getAttribute('data-collection');
            const cardCategory = card.getAttribute('data-category');
            const cardTime = card.getAttribute('data-time');
            let isVisible = true;

            if (selectedCollections.length > 0 && !selectedCollections.includes(cardCollection)) {
                isVisible = false;
            }

            if (selectedCategories.length > 0 && !selectedCategories.includes(cardCategory)) {
                isVisible = false;
            }

            if (selectedTimes.length > 0 && !selectedTimes.includes(cardTime)) {
                isVisible = false;
            }

            card.style.display = isVisible ? 'block' : 'none';
        });
    });
});

document.querySelectorAll('.resetButton').forEach(button => {
    button.addEventListener('click', function() {
        // Снимаем все чекбоксы
        document.querySelectorAll('.dropdown-content input:checked').forEach(checkbox => checkbox.checked = false);
        
        // Показываем все карточки
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = 'block';
        });
    });
});


//popup
const openPopup = document.querySelector('#openPopup');
const closePopup = document.querySelector('#closePopup');
const popup = document.querySelector('.popup');

// Открытие попапа
openPopup.addEventListener('click', function() {
    popup.classList.add('active');
});

// Закрытие попапа
closePopup.addEventListener('click', function() {
    popup.classList.remove('active');
});