function solve(arr, start, end) {
  if (!Array.isArray(arr)) {
    return NaN;
  }
  if (start < 0) {
    start = 0;
  }
  if (end > arr.length - 1) {
    end = arr.length;
  }

  let input = arr.slice(start, end+1);
  let sum = input.reduce((a, b) => a + Number(b), 0);
  console.log(input);
  console.log(sum);
  return sum;
}
solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
solve([10, "twenty", 30, 40], 0, 2);
solve([], 1, 2);
