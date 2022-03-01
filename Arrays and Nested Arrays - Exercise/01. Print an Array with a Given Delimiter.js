function solve(arr, op) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      res += arr[i];
    } else {
      res += arr[i] += op;
    }
  }
  console.log(res);
}
solve(["One", "Two", "Three", "Four", "Five"], "-");
