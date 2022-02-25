function solve(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      obj[arr[i - 1]] = +arr[i];
    } else {
      obj[arr[i]] = 0;
    }
  }
  console.log(obj);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
