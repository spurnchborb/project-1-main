const cardsList = document.querySelector(".cards");

const cards = [
  {
    title: "Interactive HTML & CSS Project",
    url: "musicnook/index.html"
  },
  {
    title: "Memory Game",
    url: "memory-game/index.html"
  },
  {
    title: "Business Directory",
    url: "restauraunts/index.html"
  }
];

cards.forEach(card => {
  cardsList.innerHTML += `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <h2>${card.title}</h2>
        </div>
        <div class="card-back">
          <a href="${card.url}">${card.title}</a>
        </div>
      </div>
    </div>
  `;
});
