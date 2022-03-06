function search() {
  let searchText = document.querySelector("#searchText").value;
  let currTowns = document.querySelectorAll("#towns li");
  let result = document.querySelector("div#result");
  let matches = 0;
  let newAr = Array.from(currTowns);

  newAr.forEach((townLiElement) => {
    let townName = townLiElement.textContent;
    if (searchText && townName.indexOf(searchText) >= 0) {
      townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
      matches++;
    }
  });

  result.textContent = `${matches} matches found`;
}

//Second solution
function search() {
  let searchText = document.getElementById("searchText").value;
  let currTowns = Array.from(document.querySelectorAll("#towns li"));
  let result = document.getElementById("result");
  let matches = 0;

  for (let town of currTowns) {
    if (town.textContent.includes(searchText)) {
      matches++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  }

  result.textContent = `${matches} matches found`;
}
