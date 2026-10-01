const loadButton = document.querySelector(".btn");
const themeButton = document.querySelector(".btn_style");
const destinations = document.querySelector("#destinations");

function loadDestinations() {fetch("data.json")
        .then(res => res.json())
        .then(destinationsData => {
            let htmlAcumulado = "";
            destinationsData.forEach(destination => {
                htmlAcumulado += `<div class="card">`;
                htmlAcumulado += `<h2>${destination.name}</h2>`;
                htmlAcumulado += `<p>${destination.country}</p>`;
                htmlAcumulado += `<p>Best for: ${destination.bestFor}</p>`;
                htmlAcumulado += `<p>Tip: ${destination.tip}</p>`;
                htmlAcumulado += `</div>`;});
            destinations.innerHTML = htmlAcumulado;});}

function changeTheme() {document.body.classList.toggle("dark");}

loadButton.addEventListener("click", loadDestinations);

themeButton.addEventListener("click", changeTheme);