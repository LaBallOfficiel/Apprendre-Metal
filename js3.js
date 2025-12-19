const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", function () {
    document.body.classList.toggle("invert");

    if (document.body.classList.contains("invert")) {
        switchBtn.src = "img/dark.png";
    } else {
        switchBtn.src = "img/light.png";
    }
});

const translations = {
    fr: {
        titre1: "Bravo vous avez terminer tous les Quiz !",
        para1: "Vous êtes désormer un as du Metal",
    },

    en: {
        titre1: "Well done, you have completed all the quizzes!",
        para1: "You are now a Metal ace",
    },
};

function setLang(lang) {
    document.getElementById("titre1").textContent = translations[lang].titre1;
    document.getElementById("para1").textContent = translations[lang].para1;
}

document.getElementById("flagFR").addEventListener("click", () => setLang("fr"));
document.getElementById("flagEN").addEventListener("click", () => setLang("en"));