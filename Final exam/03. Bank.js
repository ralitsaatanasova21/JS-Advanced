class Bank {
  #bankName;
  constructor(bankName) {
    (this.#bankName = bankName), (this.allCustomers = []);
  }
  newCustomer(customer) {
    let firstName = customer.firstName;
    let lastName = customer.lastName;
    let personalId = customer.personalId;

    if (this.allCustomers.some((x) => x.personalId === personalId)) {
      throw new Error(`${firstName} ${lastName} is already our customer!`);
    }

    let newCustomer = {
      firstName,
      lastName,
      personalId,
      totalMoney: 0,
      transactions: [],
    };
    this.allCustomers.push(newCustomer);
    return customer;
  }
  depositMoney(personalId, amount) {
    let currCustomer = this.allCustomers.find(
      (x) => x.personalId === personalId
    );
    if (!currCustomer) {
      throw new Error("We have no customer with this ID!");
    }

    currCustomer.totalMoney += amount;
    currCustomer.transactions.push(
      `${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${amount}$!`
    );
    return `${currCustomer.totalMoney}$`;
  }
  withdrawMoney(personalId, amount) {
    let currCustomer = this.allCustomers.find(
      (x) => x.personalId === personalId
    );
    if (!currCustomer) {
      throw new Error("We have no customer with this ID!");
    }

    if (currCustomer.totalMoney < amount) {
      throw new Error(
        `${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`
      );
    }

    currCustomer.totalMoney -= amount;
    currCustomer.transactions.push(
      `${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`
    );
    return `${currCustomer.totalMoney}$`;
  }
  customerInfo(personalId) {
    let currCustomer = this.allCustomers.find(
      (x) => x.personalId === personalId
    );
    if (!currCustomer) {
      throw new Error("We have no customer with this ID!");
    }

    let result = [];
    result.push(`Bank name: ${this.#bankName}`);
    result.push(
      `Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`
    );
    result.push(`Customer ID: ${currCustomer.personalId}`);
    result.push(`Total Money: ${currCustomer.totalMoney}$`);
    result.push(`Transactions:`);

    for (let i = currCustomer.transactions.length - 1; i >= 0; i--) {
      result.push(`${i + 1}. ${currCustomer.transactions[i]}`);
    }

    return result.join("\n");
  }
}
let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

// { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 }
// { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!
