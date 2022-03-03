function cars(arr) {
  let cars = {};
  for (let row of arr) {
    let [brand, model, quantity] = row.split(" | ");

    if (cars[brand]) {
      if (cars[brand][model]) {
        cars[brand][model] += Number(quantity);
      } else {
        cars[brand][model] = Number(quantity);
      }
    } else {
      cars[brand] = {};
      cars[brand][model] = Number(quantity);
    }
  }
  let entries = Object.entries(cars);
  for (let kvp of entries) {
    console.log(`${kvp[0]}`);
    for (let [model, quantity] of Object.entries(kvp[1])) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}
cars([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
