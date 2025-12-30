const subtitle = document.querySelector("header p");
if (subtitle) {
    subtitle.textContent = "This webpage was built using HTML, CSS, and JavaScript";
}

const footerYear = document.querySelector("#year");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active-card");
    });
});