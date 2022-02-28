function solve(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  arr = arr.slice(arr.length / 2);
  return arr;
}
solve([3, 19, 14, 7, 2, 19, 6]);
