function subtract() {
  let a = document.getElementById("firstNumber");
  let b = document.getElementById("secondNumber");

  let firstNum = Number(a.value);
  let secondNum = Number(b.value);

  let res = document.getElementById("result");
  res.textContent = firstNum - secondNum;
}
