function solve(num, a, b, c, d, e) {
  let arr = [a, b, c, d, e];
  let n = Number(num);
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (command === "chop") {
      n /= 2;
      console.log(n);
    } else if (command === "dice") {
      n = Math.sqrt(n);
      console.log(n);
    } else if (command === "spice") {
      n += 1;
      console.log(n);
    } else if (command === "bake") {
      n *= 3;
      console.log(n);
    } else if (command === "fillet") {
      n *= 0.8;
      console.log(n);
    }
  }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
