function solve(n) {
  for (let i = 1; i <= n; i++) {
    let res = "*";
    for (let j = 1; j < n; j++) {
      res += ' ' + '*';
    }
    console.log(res);
  }
}
solve(5);
