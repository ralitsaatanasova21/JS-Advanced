function solve(arr, criteria) {
  let result = [];

  for (let row of arr) {
    row = row.split("|");
    let d = row[0];
    let p = row[1];
    let s = row[2];

    class Tickets {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = +price;
        this.status = status;
      }
    }
    let classes = new Tickets(d, p, s);
    result.push(classes);
  }
  switch (criteria) {
    case "destination":
      result.sort((a, b) => a.destination.localeCompare(b.destination));
      break;
    case "price":
      result.sort((a, b) => a.price - b.price);
      break;
    case "status":
      result.sort((a, b) => a.status.localeCompare(b.status));
      break;
    default:
      break;
  }
  return result;
}
solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
