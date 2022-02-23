function solve(num) {
  num = num.toString().split("");
  let n = Number(num.shift());
  let sum = n;
  let isTure = true;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
    if (n === Number(num[i])) {
      isTure;
    } else {
      isTure = false;
    }
  }
  if (isTure) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(sum);
}
solve(2222222);
