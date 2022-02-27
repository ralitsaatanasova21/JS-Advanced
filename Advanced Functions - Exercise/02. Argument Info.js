function solve() {
  let obj = {};

  Array.from(arguments).forEach((row) => {
    let type = typeof row;
    console.log(`${type}: ${row}`);

    if (!obj[type]) {
      obj[type] = 0;
    }
    obj[type]++;
  });

  Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .forEach((key) => {
      console.log(`${key} = ${obj[key]}`);
    });
}
solve("cat", 42, function () {
  console.log("Hello world!");
});
