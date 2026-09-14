const menuButton = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", function () {

    menuLinks.classList.toggle("menu-open");

    if (menuLinks.classList.contains("menu-open")) {
        menuButton.textContent = "×";
        menuButton.setAttribute("aria-label", "Cerrar menú");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menú");
        menuButton.setAttribute("aria-expanded", "false");
    }

});

for (const link of navLinks) {

    link.addEventListener("click", function () {

        menuLinks.classList.remove("menu-open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menú");
        menuButton.setAttribute("aria-expanded", "false");

    });

}