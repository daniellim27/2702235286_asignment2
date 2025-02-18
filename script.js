document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle for Mobile
    const menu = document.getElementById("menu");
    const toggle = document.getElementById("menu-toggle");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    // Dynamic Rating System
    const stars = document.querySelectorAll(".star");
    const message = document.getElementById("rating-message");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            stars.forEach(s => s.classList.remove("selected"));
            this.classList.add("selected");
            message.textContent = `You rated ${this.dataset.value} stars!`;
        });
    });
});
