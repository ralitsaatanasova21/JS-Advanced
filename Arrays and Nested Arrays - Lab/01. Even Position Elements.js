function solve(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      res += arr[i] += " ";
    }
  }
  console.log(res);
}
solve(["20", "30", "40", "50", "60"]);
