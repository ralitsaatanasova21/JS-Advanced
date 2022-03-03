function solve(arr) {
  let obj = {};
  let result = {};
  for (let row of arr) {
    row = row.split(" => ");
    let product = row[0];
    let quantity = Number(row[1]);
    let bottles = 0;

    if (!obj[product]) {
      obj[product] = quantity;
    } else {
      obj[product] += quantity;
    }

    while (obj[product] >= 1000) {
      obj[product] -= 1000;
      bottles++;
    }
    if (bottles > 0) {
      if (result[product]) {
        result[product] += bottles;
      } else {
        result[product] = bottles;
      }
    }
  }

  for (let key in result) {
    let bottles = Number(result[key]);
    if (bottles > 1) {
      console.log(`${key} => ${bottles}`);
    }
  }
}
// solve([
//   "Orange => 2000",
//   "Peach => 1432",
//   "Banana => 450",
//   "Peach => 600",
//   "Strawberry => 549",
// ]);
solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
