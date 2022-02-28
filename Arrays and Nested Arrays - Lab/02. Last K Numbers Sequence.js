function solve(n, k) {
  let res = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      if (j < res.length) {
        sum += res[res.length - 1 - j];
      } else {
        break;
      }
    }
    res.push(sum);
  }
  return res;
}
solve(6, 3);
