function solve() {
  let divExs = document.querySelector("#exercise");
  let generateButton = divExs.children[2];

  generateButton.addEventListener("click", () => {
    function createTd() {
      let arrTd = [];
      for (let i = 0; i <= 5; i++) {
        arrTd.push(document.createElement("td"));
      }
      return arrTd;
    }

    let inputText = JSON.parse(divExs.children[1].value);

    let table = document.querySelector(".table");

    for (let obj of inputText) {
      let trElement = document.createElement("tr");
      let td = createTd();
      let createImg = document.createElement("img");
      createImg.src = obj.img;
      td[0].appendChild(createImg);
      trElement.appendChild(td[0]);

      let name = document.createElement("p");
      name.textContent = obj.name;
      td[1].appendChild(name);
      trElement.appendChild(td[1]);

      let price = document.createElement("p");
      price.textContent = obj.price;
      td[2].appendChild(price);
      trElement.appendChild(td[2]);

      let defrac = document.createElement("p");
      defrac.textContent = obj.decFactor;
      td[3].appendChild(defrac);
      trElement.appendChild(td[3]);

      let check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      td[4].appendChild(check);
      trElement.appendChild(td[4]);

      table.children[1].appendChild(trElement);
    }
  });

  let buyButton = divExs.lastElementChild;
  buyButton.addEventListener("click", () => {
    let names = [];
    let totalPrice = 0;
    let defFac = 0;

    let checks = Array.from(document.querySelectorAll('input[type="checkbox"]'))
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.parentElement.parentElement);

    for (let element of checks) {
      names.push(element.children[1].textContent);
      totalPrice += Number(element.children[2].textContent);
      defFac += Number(element.children[3].textContent);
    }

    let output = divExs.children[divExs.children.length - 2];
    output.value += `Bought furniture: ${names.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
      defFac / names.length
    }`;
  });
}
