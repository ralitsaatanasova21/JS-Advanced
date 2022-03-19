class Restaurant {
  constructor(budgetMoney) {
    (this.budgetMoney = budgetMoney),
      (this.menu = {}),
      (this.stockProducts = {}),
      (this.history = []);
  }
  loadProducts(arr) {
    for (let product of arr) {
      product = product.split(" ");
      let productName = product[0];
      let productQuantity = Number(product[1]);
      let productTotalPrice = Number(product[2]);

      if (productTotalPrice <= this.budgetMoney) {
        this.budgetMoney -= productTotalPrice;
        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );

        if (!this.stockProducts[productName]) {
          this.stockProducts[productName] = 0;
        }
        this.stockProducts[productName] += productQuantity;
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    }
    return this.history.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    for (let el of neededProducts) {
      el = el.split(" ");
      let prodName = el[0];
      let prodQuantity = Number(el[1]);

      if (!this.menu[meal]) {
        this.menu[meal] = {
          products: prodName,
          price: price,
          quantity: prodQuantity,
        };
      } else {
        return `The ${meal} is already in the our menu, try something different.`;
      }
      let size = Object.keys(this.menu).length;
      if (size == 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else if (!size || size >= 2) {
        return `Great idea! Now with the ${meal} we have ${size} meals in the menu, other ideas?`;
      }
    }
  }

  showTheMenu() {
    let meals = [];
    if (Object.keys(this.menu).length === 0) {
      return "Our menu is not ready yet, please come later...";
    } else {
      for (let kvp in this.menu) {
        meals.push(`${kvp} - $ ${this.menu[kvp].price}`);
      }
    }

    return meals.join("\n");
  }

  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    } else {

        for (let kvp in this.menu) {
        let neededProduct = this.menu[kvp].products;
        let neededQuantity = Number(this.menu[kvp].quantity);

        if (
          !this.stockProducts[neededProduct] ||
          this.stockProducts[neededProduct].quantity < neededQuantity
        ) {
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
          
        } else {
          this.stockProducts[neededProduct] -= neededQuantity;
          this.budgetMoney += this.menu[meal].price;
          return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
      }

    }
  }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);

console.log(kitchen.makeTheOrder("frozenYogurt"));

// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?
