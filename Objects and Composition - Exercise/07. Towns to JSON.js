function solve(arr) {
  arr.shift();

  let res = [];
  for (let row of arr) {
    row = row.split("|");
    row.shift();
    row.pop();
    let a = Number(row[1]).toFixed(2);
    let b = Number(row[2]).toFixed(2);
    let obj = {
      Town: row[0].trimStart().trimEnd(),
      Latitude: +a,
      Longitude: +b,
    };
    res.push(obj);
  }
  console.log(JSON.stringify(res));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
