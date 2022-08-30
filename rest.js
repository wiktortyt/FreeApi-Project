import { setCellsEvents } from "./func.js";

let nextPage;
const url = "https://rickandmortyapi.com/api/character";

(async function run() {
  try {
    const resp = await fetch(url, { method: "GET" });
    const table = document.getElementById("mainTable");
    const characters = await resp.json();
    nextPage = characters.info.next;
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (const character of characters.results) {
      const td = document.createElement("td");

      const cellText = document.createTextNode(character.name);
      td.appendChild(cellText);
      tr.appendChild(td);
    }

    setCellsEvents();
  } catch (ex) {
    if (ex instanceof Error) {
      console.log("Generic error", ex.message);
      console.log("Stack trace: ", ex.stack);
    }
  }
})();
