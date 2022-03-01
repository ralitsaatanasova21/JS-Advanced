function solve(arr) {
  let res = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(res.join("\n"));
}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
