const subtitle = document.querySelector("header p");
if (subtitle) {
    subtitle.textContent = "This webpage was built using HTML, CSS, and JavaScript";
}

const footerText = document.querySelector("footer p");
if (footerText) {
    const year = new Date().getFullYear();
    footerText.textContent = `© ${year} Daniel Bilewu`;
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active-card");
    });
});