function solve(a, b) {
  let bigger;
  if (a > b) {
    bigger = a;
  } else {
    bigger = b;
  }

  let res;
  for (let i = 1; i <= bigger; i++) {
    if (a % i === 0 && b % i === 0) {
      res = i;
    }
  }
  console.log(res);
}
solve(2154, 458);
