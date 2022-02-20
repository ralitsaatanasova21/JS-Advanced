function solve(a, b) {
  let res = 0;
  for (let i = Number(a); i <= Number(b); i++) {
    res += i;
  }
  console.log(res);
}
solve("1", "5");
