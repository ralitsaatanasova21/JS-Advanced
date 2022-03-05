function sumTable() {
  let prices = document.querySelectorAll("tr td:nth-of-type(2)");
  let result = document.getElementById("sum");
  let arr = Array.from(prices);

  let sum = arr.reduce((a, b) => {
    let currValue = Number(b.textContent) || 0;
    return a + currValue;
  }, 0);
  result.textContent = sum;
}
