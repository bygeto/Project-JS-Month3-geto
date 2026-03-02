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

let position = 0;
let speed = 3;

const maxPosition = boxBlock.clientWidth - block.clientWidth;

function animate() {
  position += speed;
  if (position >= maxPosition) {
    position = maxPosition;
    block.style.left = position + "px";
    return;
  }
  block.style.left = position + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// СПАСИБО ЗА УРОК! ПОДНЯЛИ НАСТРОЕНИЕ! ❤️
