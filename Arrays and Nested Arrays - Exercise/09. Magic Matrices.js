function solve(arr) {
  let sum = arr[0].reduce((a, b) => a + b);

  for (let i = 0; i < arr[0].length; i++) {
    let currColSum = 0;
    for (let j = 0; j < arr.length; j++) {
      currColSum += arr[j][i];
    }
    if (currColSum !== sum) {
      return false;
    }
  }
  return true;
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
