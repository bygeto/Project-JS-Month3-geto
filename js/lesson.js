const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [25796]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerText = "GOOD";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerText = "try again";
    phoneResult.style.color = "red";
  }
};

// ===== TAB =====
const tabs = document.querySelectorAll(".tab_content_block");
const items = document.querySelectorAll(".tab_content_item");

let index = 0;

function hideTabs() {
  tabs.forEach((t) => (t.style.display = "none"));
  items.forEach((i) => i.classList.remove("tab_content_item_active"));
}

function showTab(i) {
  tabs[i].style.display = "block";
  items[i].classList.add("tab_content_item_active");
}

hideTabs();
showTab(index);

setInterval(() => {
  index++;
  if (index >= tabs.length) index = 0;
  hideTabs();
  showTab(index);
}, 3000);

// ===== CONVERTER =====
const som = document.querySelector("#som");
const usd = document.querySelector("#usd");

const rate = 89;

som.oninput = () => {
  if (!som.value) return (usd.value = "");
  usd.value = (som.value / rate).toFixed(2);
};

usd.oninput = () => {
  if (!usd.value) return (som.value = "");
  som.value = (usd.value * rate).toFixed(2);
};

// ===== CARD SWITCHER =====
const card = document.querySelector(".card");
const prev = document.querySelector("#btn-prev");
const next = document.querySelector("#btn-next");

let id = 1;
const max = 200;

function getCard(id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((r) => r.json())
    .then((data) => {
      card.innerHTML = `
        <p>${data.id}</p>
        <h3>${data.title}</h3>
        <span>${data.completed}</span>
      `;
    });
}

getCard(id);

next.onclick = () => {
  id++;
  if (id > max) id = 1;
  getCard(id);
};

prev.onclick = () => {
  id--;
  if (id < 1) id = max;
  getCard(id);
};

// ===== WEATHER =====
const input = document.querySelector("#searchInput");
const btn = document.querySelector("#search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

const API = "291aa3950880603684e43c6cc36aed88";

btn.onclick = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API}&units=metric&lang=ru`,
  )
    .then((r) => r.json())
    .then((data) => {
      city.innerText = data.name;
      temp.innerText = Math.round(data.main.temp) + "°C";
    })
    .catch(() => {
      city.innerText = "Ошибка";
      temp.innerText = "";
    });
};
