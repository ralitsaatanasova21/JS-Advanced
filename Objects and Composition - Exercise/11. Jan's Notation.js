function demo(arr) {
  let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  let numbers = [];
  for (let row of arr) {
    if (Number.isFinite(row)) {
      numbers.push(row);
    } else {
      if (numbers.length < 2) {
        console.log("Error: not enough operands!");
      } else {
        let b = numbers.pop();
        let a = numbers.pop();
        numbers.push(operations[row](a, b));
      }
    }
  }
  if (numbers.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log(numbers[0]);
  }
}
demo([5, 3, 4, "*", "-"]);
