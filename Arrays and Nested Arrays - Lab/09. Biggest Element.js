function solve(arr) {
  let all = arr.reduce((a, b) => a.concat(b));
  console.log(Math.max(...all));
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
