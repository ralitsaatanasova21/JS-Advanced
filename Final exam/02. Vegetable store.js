class VegetableStore {
  constructor(owner, location) {
    (this.owner = owner),
      (this.location = location),
      (this.availableProducts = []);
  }
  loadingVegetables(vegetables) {
    let objProducts = {};
    for (let row of vegetables) {
      row = row.split(" ");
      let type = row[0];
      let quantity = Number(row[1]);
      let price = Number(row[2]);

      let currProduct = this.availableProducts.find((x) => x.type === type);
      if (!currProduct) {
        this.availableProducts.push({ type, quantity, price });
        objProducts[type] = 0;
      } else {
        if (currProduct.price < price) {
          currProduct.price = price;
          currProduct.quantity += quantity;
        }
      }
    }
    let res = [];
    for (let kvp in objProducts) {
      res.push(kvp);
    }

    return `Successfully added ${res.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let currSum = 0;
    for (let row of selectedProducts) {
      row = row.split(" ");
      let type = row[0];
      let quantity = Number(row[1]);

      let currProduct = this.availableProducts.find((x) => x.type === type);
      if (!currProduct) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${currSum.toFixed(
            2
          )}.`
        );
      } else {
        if (currProduct.quantity < quantity) {
          throw new Error(
            `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${currSum.toFixed(
              2
            )}.`
          );
        } else {
          currSum += currProduct.price * quantity;
          currProduct.quantity -= quantity;
        }
      }
    }
    return `Great choice! You must pay the following amount $${Number(
      currSum
    ).toFixed(2)}.`;
  }

  rottingVegetable(type, quantity) {
    let currType = this.availableProducts.find((x) => x.type === type);
    if (!currType) {
      throw new Error(`${type} is not available in the store.`);
    } else {
      if (currType.quantity <= quantity) {
        currType.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      } else {
        currType.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
      }
    }
  }

  revision() {
    let result = [];
    result.push("Available vegetables:");
    let sorted = this.availableProducts.sort((a, b) => a.price - b.price);
    for (let el of sorted) {
      result.push(`${el.type}-${el.quantity}-$${el.price}`);
    }
    result.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return result.join("\n");
  }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
//Successfully added Okra, Beans, Celery

// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
// // Successfully added Okra, Beans, Celery
// // Great choice! You must pay the following amount $3.50.
// // Great choice! You must pay the following amount $27.65.
// // Uncaught Error: Banana is not available in the store, your current bill is $0.00.

// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// // Successfully added Okra, Beans, Celery
// // Some quantity of the Okra has been removed.
// // The entire quantity of the Okra has been removed.
// // Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.

console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
// Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Great choice! You must pay the following amount $26.15.
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.
