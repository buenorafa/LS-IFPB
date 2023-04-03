import flags from "./model/flags.js";

function flagCard(flags) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="${flags.image}" alt="${flags.name}" />
    <p>${flags.name}</p>
  </div>`;
}

const grid = document.querySelector(".row");

const content = flags.map((flag) => flagCard(flag)).join("");

grid.innerHTML = content;
