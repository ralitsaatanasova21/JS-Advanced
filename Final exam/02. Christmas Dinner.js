class ChristmasDinner {
  constructor(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    (this.budget = budget),
      (this.dishes = []),
      (this.products = []),
      (this.guests = {});
  }

  shopping([product, price]) {
    if (this.budget >= price) {
      this.products.push(product);
      this.budget -= price;
      return `You have successfully bought ${product}!`;
    } else {
      throw new Error("Not enough money to buy this product");
    }
  }
  recipes(recipe) {
    recipe.productsList.forEach((product) => {
      let isPresent = this.products.some((x) => product === x);
      if (!isPresent) {
        throw new Error("We do not have this product");
      }
    });
    this.dishes.push(recipe);
    return `${recipe.recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    let isPresent = this.dishes.some((x) => x.recipeName === dish);
    if (!isPresent) {
      throw new Error("We do not have this product");
    }

    if (this.guests[name]) {
      throw new Error("This guest has already been invited");
    }

    this.guests[name] = dish;

    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let result = [];

    for (let guestsKey in this.guests) {
      let name = guestsKey;
      let dish = this.guests[guestsKey];
      let products = this.dishes.find(
        (x) => x.recipeName === dish
      ).productsList;

      result.push(
        `${name} will eat ${dish}, which consists of ${products.join(", ")}`
      );
    }

    return result.join("\n");
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});

dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});
dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");
console.log(dinner.showAttendance());

// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt
