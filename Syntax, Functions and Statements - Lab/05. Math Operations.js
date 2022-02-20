function solve(a, b, oper) {
  let res;
  switch (oper) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "/":
      res = a / b;
      break;
    case "*":
      res = a * b;
      break;
    case "**":
      res = a ** b;
      break;
    case "%":
      res = a % b;
      break;
  }
  console.log(res);
}
solve(5, 6, "+");
