/* ===== МОДАЛ - ДОБАВЛЕНИЕ ТОВАРА ===== */
const buyButtons = document.querySelectorAll(".button-buy");
const cart = document.querySelector(".cart-popup-container");
const cartCloseButton = cart.querySelector(".cart-close-button");

for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        cart.classList.add("popup-show");
    });
}

cartCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.remove("popup-show");
});

/* ===== МОДАЛ - О НАС ===== */
const writeusButton = document.querySelector(".about-contacts-writeus");
const writeusPopup = document.querySelector(".popup-writeus-container");
const formName = writeusPopup.querySelector(".name-input");
const writeusCloseButton = writeusPopup.querySelector(".cart-close-button");
const writeusForm = document.querySelector(".writeus-form");
const email = writeusPopup.querySelector(".email-input");
const nameStorage = localStorage.getItem("name");

writeusButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusPopup.classList.add("popup-show");
    email.focus();
    if (nameStorage) {
        formName.value = nameStorage;
    }
});

writeusCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
        writeusPopup.classList.remove("popup-show");
        writeusPopup.classList.remove("email-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        if (writeusPopup.classList.contains("popup-show")) {
            evt.preventDefault();
            writeusPopup.classList.remove("popup-show");
            writeusPopup.classList.remove("email-error");
        }
    }
})

writeusForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (writeusPopup.classList.contains("email-error")) {
        writeusPopup.classList.remove("email-error");
    }
      else if (!email.value) {
        writeusPopup.classList.add("email-error");
    }
      else {localStorage.setItem("name", formName.value);}
});

/* ===== МОДАЛ - ИНТЕРАКТИВНАЯ КАРТА ===== */
const mapLink = document.querySelector(".map-link");
const map = document.querySelector(".map-popup-container");
const mapCloseButton = map.querySelector(".map-close-button");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("popup-show");
});

mapCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("popup-show");
});