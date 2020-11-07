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