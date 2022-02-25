function solve(arr) {
  let res = [];

  for (let row of arr) {
    let [name, level, items] = row.split(" / ");
    level = +level;
    items = items ? items.split(", ") : [];
    res.push({ name, level, items });
  }
  let str = JSON.stringify(res);
  console.log(str);
  return str;
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
