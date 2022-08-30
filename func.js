export { setCellsEvents };

async function nextBtnClick() {
  // try{
  //   const resp = await fetch(nextPage);
  //   const characters=await resp.json();
  // }
}

function setCellsEvents() {
  const tds = document.querySelectorAll("#mainTable td");
  console.log(tds);
  const thumbnail = document.createElement("div");
  thumbnail.className = "upperThumbnail";

  for (const td of tds) {
    td.addEventListener("mouseover", function () {
      td.style.width = "7%";
      td.className = "upperThumbnailShow";
    });
    td.addEventListener("mouseout", () => {
      td.style.width = "5%";
      td.className = "upperThumbnailHide";
    });
  }
}
