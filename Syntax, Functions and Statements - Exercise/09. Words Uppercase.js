function solve(str) {
  let res = str.toUpperCase().match(/\w+/g).join(", ");
  console.log(res);
}
solve("Hi, how are you?");
solve("hello");
