function solve(arr) {
  let obj = {};
  for (let row of arr) {
    row = row.split(" <-> ");
    let name = row[0];
    let population = +row[1];

    if (!obj[name]) {
      obj[name] = 0;
    }
    obj[name] += population;
  }

  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
