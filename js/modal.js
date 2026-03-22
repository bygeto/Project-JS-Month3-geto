const modal = document.querySelector(".modal");
const openBtn = document.querySelector("#btn-get");
const closeBtn = document.querySelector(".modal_close");
const form = document.querySelector(".modal_content form");
const phoneInput = document.querySelector('input[name="phone"]');

let modalOpened = false;

const openModal = () => {
  if (modalOpened) return;
  modalOpened = true;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
};

if (openBtn) {
  openBtn.addEventListener("click", openModal);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    openModal();
    window.removeEventListener("scroll", handleScroll);
  }
};

window.addEventListener("scroll", handleScroll);

setTimeout(() => {
  openModal();
}, 10000);

if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });
}

if (form && phoneInput) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = phoneInput.value.trim();

    if (!/^\d+$/.test(value)) {
      showMessage("Только цифры!", "red");
      return;
    }
    if (value.length < 9 || value.length > 12) {
      showMessage("Введите 9-12 цифр!", "red");
      return;
    }
    showMessage("Отправлено ✔", "lime");
    form.reset();
  });
}

const showMessage = (text, color) => {
  let msg = document.querySelector(".form_error");
  if (!msg) {
    msg = document.createElement("div");
    msg.className = "form_error";
    form.append(msg);
  }
  msg.textContent = text;
  msg.style.color = color;
};
