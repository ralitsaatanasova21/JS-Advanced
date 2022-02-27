function solution() {
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const products = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let result = "";

  const commands = {
    restock: (microelement, quantity) => {
      products[microelement] += quantity;
      result = "Success";
    },

    prepare: (recipe, quantity) => {
      let isEnough = true;

      Object.entries(recipes[recipe]).forEach((entry) => {
        let [microelement, count] = entry;

        if (isEnough && products[microelement] < count * Number(quantity)) {
          isEnough = false;
          result = `Error: not enough ${microelement} in stock `;
        }
      });

      if (isEnough) {
        Object.entries(recipes[recipe]).forEach((entry) => {
          let [microelement, count] = entry;

          products[microelement] -= count * quantity;
        });
        result = "Success";
      }
    },

    report: () => {
      result = "";
      Object.entries(products).forEach((entry) => {
        let [microelement, quantity] = entry;

        result += `${microelement}=${quantity} `;
      });
      result = result.trimEnd();
    },
  };

  return function (input) {
    let [cmd, product, quantity] = input.split(" ");
    quantity = Number(quantity);

    commands[cmd](product, quantity);

    // console.log(result);
    return result;
  };
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

console.log(manager("restock flavour 50 "));
console.log(manager("prepare lemonade 4 "));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
