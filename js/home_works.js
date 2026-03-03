// DZ-1 @GMAIL.COM 💖

const gmailInput = document.getElementById("gmail_input");
const gmailBtn = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailBtn.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerText = "GOOD!";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "ERROR!";
    gmailResult.style.color = "red";
  }
};

// DZ-2 RED BLOCK 💖

const block = document.querySelector(".child_block");
const boxBlock = document.querySelector(".parent_block");

let positionX = 0;
let positionY = 0;
const speed = 10;

const maxX = boxBlock.clientWidth - block.clientWidth;
const maxY = boxBlock.clientHeight - block.clientHeight;

let direction = "right";

function animate() {
  if (direction === "right") {
    positionX += speed;
    if (positionX >= maxX) {
      positionX = maxX;
      direction = "down";
    }
  } else if (direction === "down") {
    positionY += speed;
    if (positionY >= maxY) {
      positionY = maxY;
      direction = "left";
    }
  } else if (direction === "left") {
    positionX -= speed;
    if (positionX <= 0) {
      positionX = 0;
      direction = "up";
    }
  } else if (direction === "up") {
    positionY -= speed;
    if (positionY <= 0) {
      positionY = 0;
      direction = "right";
    }
  }
  block.style.left = `${positionX}px`;
  block.style.top = `${positionY}px`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// СПАСИБО ЗА УРОК! ПОДНЯЛИ НАСТРОЕНИЕ! ❤️
// DZ-2 ТАЙМЕР                   /// И КСТАТИ ЗАДАНИЕ С КУБОМ ПОЛНОСТЬЮ ГОТОВОЕ СВЕРХУ ^

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const secondsBlock = document.getElementById("seconds");

let time = 0;
let intervalId = null;

startBtn.onclick = () => {
  if (intervalId != null) return;
  intervalId = setInterval(() => {
    time++;
    secondsBlock.innerText = time;
  }, 1000);
};
stopBtn.onclick = () => {
  clearInterval(intervalId);
  intervalId = null;
};
resetBtn.onclick = () => {
  clearInterval(intervalId);
  intervalId = null;
  time = 0;
  secondsBlock.innerText = time;
};
