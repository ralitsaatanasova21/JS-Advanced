function solve(arr) {
  let sum = 0;

  for (let row = 0; row < arr.length - 1; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (row < arr.length) {
        if (arr[row][col] === arr[row + 1][col]) {
          sum++;
        }
      }

      if (col - 1 >= 0) {
        if (arr[row][col - 1] === arr[row][col]) {
          sum++;
        }
      }

      if (col + 1 < arr[row].length) {
        if (arr[row][col] === arr[row][col + 1]) {
          sum++;
        }
      }
    }
  }
  return sum;
}
solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
