/* ===== МОДАЛ - ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ ===== */
const buyButtons = document.querySelectorAll(".button-buy");
const cart = document.querySelector(".cart-popup-container");
const cartCloseButton = cart.querySelector(".cart-close-button");

for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        cart.classList.add("popup-show");
    });
}

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        if (cart.classList.contains("popup-show")) {
            evt.preventDefault();
            cart.classList.remove("popup-show");
        }
    }
});

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
    if (nameStorage) {
        formName.value = nameStorage;
        email.focus();
    } else {
        email.focus();
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
});

writeusForm.addEventListener("submit", function (evt) {
    if (!email.value || !formName.value) {
        evt.preventDefault();
        writeusPopup.classList.remove("email-error");
        writeusPopup.offsetWidth = writeusPopup.offsetWidth;
        writeusPopup.classList.add("email-error");
    } else {
        localStorage.setItem("name", formName.value);
    }
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

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        if (map.classList.contains("popup-show")) {
            evt.preventDefault();
            map.classList.remove("popup-show");
        }
    }
});

/* ===== ГЛАВНЫЙ СЛАЙДЕР ===== */

const leftArrow = document.querySelector(".previous-slide");
const rightArrow = document.querySelector(".next-slide");
const slide1 = document.querySelector(".main-slider-slide-1");
const slide2 = document.querySelector(".main-slider-slide-2");
const circle1 = document.querySelector(".slider-circle-1");
const circle2 = document.querySelector(".slider-circle-2");

if (leftArrow) {
    leftArrow.addEventListener("click", function () {
        slide1.classList.toggle("current-slide");
        slide2.classList.toggle("current-slide");
        circle1.classList.toggle("current");
        circle2.classList.toggle("current");
    });
}

if (rightArrow) {
    rightArrow.addEventListener("click", function () {
        slide1.classList.toggle("current-slide");
        slide2.classList.toggle("current-slide");
        circle1.classList.toggle("current");
        circle2.classList.toggle("current");
    });
}

if (circle1) {
    circle1.addEventListener("click", function () {
        circle1.classList.add("current");
        circle2.classList.remove("current");
        slide1.classList.add("current-slide");
        slide2.classList.remove("current-slide");
    });
}
if (circle2) {
    circle2.addEventListener("click", function () {
        circle2.classList.add("current");
        circle1.classList.remove("current");
        slide2.classList.add("current-slide");
        slide1.classList.remove("current-slide");
    });
}

/* ===== СЕРВИС СЛАЙДЕР =====*/

const servButton1 = document.querySelector(".services-slider-content-1");
const servButton2 = document.querySelector(".services-slider-content-2");
const servButton3 = document.querySelector(".services-slider-content-3");
const servDelivery = document.querySelector(".serv-delivery");
const servWarranty = document.querySelector(".serv-warranty");
const servCredit = document.querySelector(".serv-credit");

if (servButton2) {
    servButton2.addEventListener("click", function (evt) {
        evt.preventDefault();
        servButton2.classList.add("active");
        servWarranty.classList.add("services-slider-current");
        servButton1.classList.remove("active");
        servButton3.classList.remove("active");
        servDelivery.classList.remove("services-slider-current");
        servCredit.classList.remove("services-slider-current");
    });
}
if (servButton1) {
    servButton1.addEventListener("click", function (evt) {
        evt.preventDefault();
        servButton1.classList.add("active");
        servDelivery.classList.add("services-slider-current");
        servButton2.classList.remove("active");
        servButton3.classList.remove("active");
        servWarranty.classList.remove("services-slider-current");
        servCredit.classList.remove("services-slider-current");
    });
}
if (servButton3) {
    servButton3.addEventListener("click", function () {
        servButton3.classList.add("active");
        servCredit.classList.add("services-slider-current");
        servButton1.classList.remove("active");
        servButton2.classList.remove("active");
        servDelivery.classList.remove("services-slider-current");
        servWarranty.classList.remove("services-slider-current");
    });
}