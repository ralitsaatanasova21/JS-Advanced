function solve(fruit, b, c) {
  let grams = b / 1000;
  let money = grams * c;

  console.log(
    `I need $${money.toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${fruit}.`
  );
}
solve("orange", 2500, 1.8);
