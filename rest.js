(async function run() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const resp = await fetch(url, { method: "GET" });
    const table = document.getElementById("table");
    const characters = await resp.json();
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (const character of characters.results) {
      const td = document.createElement("td");
      const cellText = document.createTextNode(character.name);
      td.appendChild(cellText);
      tr.appendChild(td);
    }
  } catch (ex) {
    if (ex instanceof Error) {
      console.log("Generic error", ex.message);
      console.log("Stack trace: ", ex.stack);
    }
  }
})();
