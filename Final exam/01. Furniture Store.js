window.addEventListener("load", solve);

function solve() {
  const model = document.getElementById("model");
  const yearEl = document.getElementById("year");
  const description = document.getElementById("description");
  const priceEl = document.getElementById("price");
  const furnitureList = document.getElementById("furniture-list");
  const totalPrice = document.querySelector(".total-price");
  const addButton = document.getElementById("add");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    let year = Number(yearEl.value);
    let price = Number(priceEl.value);

    if (!model.value || !description.value) {
      return;
    }
    if (year <= 0 || price <= 0) {
      return;
    }

    let infoBody = document.createElement("tr");
    infoBody.classList.add("info");

    let modelBody = document.createElement("td");
    let PriceBody = document.createElement("td");
    modelBody.textContent = model.value;
    PriceBody.textContent = price.toFixed(2);

    let buttonsBody = document.createElement("td");
    let moreButton = document.createElement("button");
    moreButton.classList.add("moreBtn");
    moreButton.textContent = "More Info";
    moreButton.addEventListener("click", (e) => {
      if (e.currentTarget.textContent === "More Info") {
        e.currentTarget.textContent = "Less Info";
        hideBody.style.display = "contents";
      } else {
        e.currentTarget.textContent = "More Info";
        hideBody.style.display = "none";
      }
    });
    let buyButton = document.createElement("button");
    buyButton.classList.add("buyBtn");
    buyButton.textContent = "Buy it";
    buyButton.addEventListener("click", () => {
      let currentSum = Number(totalPrice.textContent);
      totalPrice.textContent = (currentSum + price).toFixed(2);
      infoBody.remove();
      hideBody.remove();
    });
    let hideBody = document.createElement("tr");
    hideBody.classList.add("hide");
    hideBody.style.display = "none";
    let yearBody = document.createElement("td");
    yearBody.textContent = `Year: ${year}`;
    let descriptionBody = document.createElement("td");
    descriptionBody.setAttribute("colspan", 3);
    descriptionBody.textContent = `Description: ${description.value}`;
    hideBody.appendChild(yearBody);
    hideBody.appendChild(descriptionBody);

    buttonsBody.appendChild(moreButton);
    buttonsBody.appendChild(buyButton);

    infoBody.appendChild(modelBody);
    infoBody.appendChild(PriceBody);
    infoBody.appendChild(buttonsBody);

    furnitureList.appendChild(infoBody);
    furnitureList.appendChild(hideBody);
    model.value = "";
    yearEl.value = "";
    description.value = "";
    priceEl.value = "";
  });
}

