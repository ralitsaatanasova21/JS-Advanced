function solve(arr) {
  let sum = arr.reduce((sum, el) => {
    return sum + el;
  }, 0);

  let sumInv = arr.reduce((sumInv, el) => {
    return sumInv + 1 / el;
  }, 0);

  console.log(sum);
  console.log(sumInv);
  console.log(arr.join(""));
}
solve([1, 2, 3]);
