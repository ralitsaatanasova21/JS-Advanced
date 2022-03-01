function solve(arr) {
  let res = [];
  let sorted = arr.sort((a, b) => a - b);

  while (sorted.length > 0) {
    let front = sorted.shift();
    let back = sorted.pop();
    res.push(front, back);
  }
  return res;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
