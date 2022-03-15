window.addEventListener("load", solve);

function solve() {
  let productType = document.getElementById("type-product");
  let description = document.getElementById("description");
  let name = document.getElementById("client-name");
  let phone = document.getElementById("client-phone");
  let repairForm = document.getElementById("right");
  let receiveOrders = document.getElementById("received-orders");
  let completeOrders = document.getElementById("completed-orders");
  let clearBtn = document.querySelector(".clear-btn");

  let submitBtn = repairForm.querySelector("button");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let isNumber = true;
    if (isNaN(phone.value)) {
      isNumber = false;
    }
    let isType = true;
    if (productType.value != "Computer" && productType.value != "Phone") {
      isType = false;
    }
    if (description.value === "" || name.value === "" || !isNumber || !isType) {
      return;
    }

    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let startBtn = document.createElement("button");
    let finishBtn = document.createElement("button");

    div.classList = "container";
    startBtn.classList = "start-btn";
    finishBtn.classList = "finish-btn";

    h2.textContent = `Product type for repair: ${productType.value}`;
    h3.textContent = `Client information: ${name.value}, ${phone.value}`;
    h4.textContent = `Description of the problem: ${description.value}`;
    startBtn.textContent = "Start repair";
    finishBtn.textContent = "Finish repair";
    finishBtn.disabled = true;

    startBtn.addEventListener("click", () => {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    });
    finishBtn.addEventListener("click", () => {
      div.children[3].remove();
      div.children[3].remove();
      completeOrders.appendChild(div);
    });

    clearBtn.addEventListener("click", () => {
      Array.from(completeOrders.querySelectorAll(".container")).map((e) =>
        e.remove()
      );
    });

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(startBtn);
    div.appendChild(finishBtn);
    receiveOrders.appendChild(div);

    description.value = "";
    name.value = "";
    phone.value = "";
  });
}
