function solve(arr) {
  let masiv = [];
  for (let row of arr) {
    let [product, price] = row.split(" : ");
    let obj = {
      name: product,
      price: +price,
    };
    masiv.push(obj);
  }

  let sorted = masiv.sort((a, b) => a.name.localeCompare(b.name));

  let curLetter = " ";
  for (let key of sorted) {
    if (key.name.charAt(0)!== curLetter) {
      curLetter = key.name.charAt(0);
      console.log(`${curLetter}`);
    }
    console.log(`  ${key.name}: ${key.price}`);
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
