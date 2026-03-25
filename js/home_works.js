// // DZ-1 @GMAIL.COM 💖

// const gmailInput = document.getElementById("gmail_input");
// const gmailBtn = document.getElementById("gmail_button");
// const gmailResult = document.getElementById("gmail_result");

// const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

// gmailBtn.onclick = () => {
//   if (regExp.test(gmailInput.value)) {
//     gmailResult.innerText = "GOOD!";
//     gmailResult.style.color = "green";
//   } else {
//     gmailResult.innerText = "ERROR!";
//     gmailResult.style.color = "red";
//   }
// };

// // DZ-2 RED BLOCK 💖

// const block = document.querySelector(".child_block");
// const boxBlock = document.querySelector(".parent_block");

// let positionX = 0;
// let positionY = 0;
// const speed = 10;

// const maxX = boxBlock.clientWidth - block.clientWidth;
// const maxY = boxBlock.clientHeight - block.clientHeight;

// let direction = "right";

// function animate() {
//   if (direction === "right") {
//     positionX += speed;
//     if (positionX >= maxX) {
//       positionX = maxX;
//       direction = "down";
//     }
//   } else if (direction === "down") {
//     positionY += speed;
//     if (positionY >= maxY) {
//       positionY = maxY;
//       direction = "left";
//     }
//   } else if (direction === "left") {
//     positionX -= speed;
//     if (positionX <= 0) {
//       positionX = 0;
//       direction = "up";
//     }
//   } else if (direction === "up") {
//     positionY -= speed;
//     if (positionY <= 0) {
//       positionY = 0;
//       direction = "right";
//     }
//   }
//   block.style.left = `${positionX}px`;
//   block.style.top = `${positionY}px`;

//   requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);

// // СПАСИБО ЗА УРОК! ПОДНЯЛИ НАСТРОЕНИЕ! ❤️
// // DZ-2 ТАЙМЕР                   /// И КСТАТИ ЗАДАНИЕ С КУБОМ ПОЛНОСТЬЮ ГОТОВОЕ СВЕРХУ ^

// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const resetBtn = document.getElementById("reset");

// const secondsBlock = document.getElementById("seconds");

// let time = 0;
// let intervalId = null;

// startBtn.onclick = () => {
//   if (intervalId != null) return;
//   intervalId = setInterval(() => {
//     time++;
//     secondsBlock.innerText = time;
//   }, 1000);
// };
// stopBtn.onclick = () => {
//   clearInterval(intervalId);
//   intervalId = null;
// };
// resetBtn.onclick = () => {
//   clearInterval(intervalId);
//   intervalId = null;
//   time = 0;
//   secondsBlock.innerText = time;
// };

// // DZ-4

// const request = new XMLHttpRequest();

// request.open("GET", "../data/characters.json");

// request.send();

// request.onload = () => {
//   if (request.status === 200) {
//     const data = JSON.parse(request.response);

//     const container = document.querySelector(".characters-list");

//     data.forEach((character) => {
//       const card = document.createElement("div");
//       card.className = "character-card";

//       card.innerHTML = `
//         <img src="${character.photo}" alt="${character.name}">
//         <h3>${character.name}</h3>
//         <p>Age: ${character.age}</p>
//       `;

//       container.append(card);
//     });
//   }
// };

// const requestAny = new XMLHttpRequest();

// requestAny.open("GET", "../data/info.json");

// requestAny.send();

// requestAny.onload = () => {
//   const data = JSON.parse(requestAny.response);
//   console.log(data);
// };

// ===== GMAIL =====
const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegExp = /^[a-z0-9._%+-]+@gmail\.com$/i;

gmailBtn.onclick = () => {
  if (gmailRegExp.test(gmailInput.value)) {
    gmailResult.innerText = "VALID";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "INVALID";
    gmailResult.style.color = "red";
  }
};

// ===== RED BLOCK =====
const block = document.querySelector(".child_block");
const parent = document.querySelector(".parent_block");

let x = 0;
let y = 0;
let direction = "right";

const maxX = parent.clientWidth - block.clientWidth;
const maxY = parent.clientHeight - block.clientHeight;

function move() {
  if (direction === "right") {
    x += 5;
    if (x >= maxX) direction = "down";
  } else if (direction === "down") {
    y += 5;
    if (y >= maxY) direction = "left";
  } else if (direction === "left") {
    x -= 5;
    if (x <= 0) direction = "up";
  } else if (direction === "up") {
    y -= 5;
    if (y <= 0) direction = "right";
  }

  block.style.left = x + "px";
  block.style.top = y + "px";

  requestAnimationFrame(move);
}

move();

// ===== STOPWATCH =====
const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let time = 0;
let interval = null;

start.onclick = () => {
  if (interval) return;

  interval = setInterval(() => {
    time++;
    seconds.innerText = time;
  }, 1000);
};

stop.onclick = () => {
  clearInterval(interval);
  interval = null;
};

reset.onclick = () => {
  clearInterval(interval);
  interval = null;
  time = 0;
  seconds.innerText = 0;
};

// ===== XHR CHARACTERS =====
const request = new XMLHttpRequest();
request.open("GET", "../data/characters.json");
request.send();

request.onload = () => {
  const data = JSON.parse(request.response);
  const container = document.querySelector(".characters-list");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "character-card";

    card.innerHTML = `
      <img src="${item.photo}">
      <h3>${item.name}</h3>
      <p>${item.age}</p>
    `;

    container.append(card);
  });
};
