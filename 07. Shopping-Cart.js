function solve() {
  let allProducts = document.querySelectorAll(".product");
  let textarea = document.querySelector("textarea");
  let totalPrice = 0;
  let names = [];

  for (let product of allProducts) {
    let button = product.children[2];
    let name = product.children[1].children[0].textContent;
    let price = Number(product.children[3].textContent);

    button.addEventListener("click", clickFunc);

    function clickFunc() {
      if (!names.includes(name)) {
        names.push(name);
      }
      totalPrice += price;
      textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }
  }

  let buttonCheckout = document.querySelector(".checkout");

  buttonCheckout.addEventListener("click", lastClick);

  function lastClick() {
    textarea.value += `You bought ${names.join(", ")} for ${totalPrice.toFixed(
      2
    )}.`;

    for (let parent of allProducts) {
      parent.children[2].children[0].disabled = true;
    }
    buttonCheckout.disabled = true;
  }
}
