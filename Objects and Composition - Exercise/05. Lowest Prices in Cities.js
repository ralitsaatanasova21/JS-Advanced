function solve(arr) {
  let obj = {};
  for (let row of arr) {
    let [town, product, price] = row.split(" | ");

    if (!obj[product]) {
      obj[product] = {
        town: town,
        price: +price,
      };
    } else {
      if (obj[product].price > +price) {
        obj[product].town = town;
        obj[product].price = +price;
      }
    }
  }
  for (let kvp in obj) {
    console.log(`${kvp} -> ${obj[kvp].price} (${obj[kvp].town})`);
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
