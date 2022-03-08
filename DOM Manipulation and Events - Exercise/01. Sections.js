function create(words) {
  let parentElement = document.querySelector("#content");

  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = words[i];
    p.style.display = "none";
    div.appendChild(p);

    div.addEventListener("click", showP);

    parentElement.appendChild(div);
  }

  function showP(e) {
    e.target.children[0].style.display = "inline";
  }
}
