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

document.getElementById('filterButton').addEventListener('click', function() {
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

document.getElementById('resetButton').addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content input:checked').forEach(checkbox => checkbox.checked = false);
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.display = 'block';
    });
});


const cards = [
    {
      collection: "collection1",
      category: "category1",
      time: "short",
      imgSrc: "/images/recepes/0_1 1.jpg",
      title: "Колбаски с овощами в духовке",
      timeText: "50 минут"
    },
    {
      collection: "collection2",
      category: "category2",
      time: "medium",
      imgSrc: "/images/recepes/0_3 1.jpg",
      title: "Курица с рисом",
      timeText: "30 минут"
    },
    {
      collection: "collection3",
      category: "category3",
      time: "long",
      imgSrc: "/images/recepes/card3.jpg",
      title: "Стейк с картофелем",
      timeText: "70 минут"
    },
    {
    collection: "collection3",
    category: "category3",
    time: "long",
    imgSrc: "/images/recepes/card4.jpg",
    title: "Стейк с картофелем",
    timeText: "70 минут"
    },
    {
    collection: "collection3",
    category: "category3",
    time: "long",
    imgSrc: "/images/recepes/card5.jpg",
    title: "Стейк с картофелем",
    timeText: "70 минут"
    },
    {
    collection: "collection3",
    category: "category3",
    time: "long",
    imgSrc: "/images/recepes/card6.jpg",
    title: "Стейк с картофелем",
    timeText: "70 минут"
    },
  ];
  
  const container = document.querySelector('.cards-container');
  
  cards.forEach(card => {
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