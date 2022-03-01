function solve(arr) {
  let res = [];
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      res.push(arr[i]);
    }
  }

  return res;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([20, 3, 2, 15, 6, 1]);
