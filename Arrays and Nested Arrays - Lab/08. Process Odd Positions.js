function solve(arr) {
  let res = arr
    .filter((x, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
  return res;
}
solve([3, 0, 10, 4, 7, 3]);
