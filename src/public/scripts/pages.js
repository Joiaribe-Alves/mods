const card = document.querySelectorAll(".card");
const cardActions = document.querySelectorAll(".card-actions");

for(let i = 0; i < card.length; i++) {
    card[i].addEventListener("mousemove", () => {
        cardActions[i].style.bottom = 0;
    })

    card[i].addEventListener("mouseleave", () => {
        cardActions[i].style.bottom = "-100px";
    })
}