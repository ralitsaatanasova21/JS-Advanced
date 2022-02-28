function solve(arr) {
  let res = [];
  arr.sort((a, b) => {
    return a - b;
  });
  res.push(arr[0], arr[1]);
  console.log(res.join(" "));
}
solve([30, 15, 50, 5]);
