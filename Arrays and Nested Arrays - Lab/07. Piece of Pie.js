function solve(arr, start, end) {
  let firstInd = arr.indexOf(start);
  let lastInd = arr.indexOf(end) + 1;

  let res = arr.slice(firstInd, lastInd);
  return res;
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
