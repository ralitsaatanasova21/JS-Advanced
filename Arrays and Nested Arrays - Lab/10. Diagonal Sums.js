function solve(arr) {
  let firstDiag = 0;
  let secDiag = 0;
  let firstIndex = 0;
  let secIndex = arr[0].length - 1;

  arr.forEach((array) => {
    firstDiag += array[firstIndex++];
    secDiag += array[secIndex--];
  });
  console.log(firstDiag + " " + secDiag);
}
solve([
  [20, 40],
  [10, 60],
]);
