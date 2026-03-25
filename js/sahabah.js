const container = document.getElementById("cards");

fetch("../data/sahabah.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name}</span>
      `;

      container.appendChild(card);
    });
  });
