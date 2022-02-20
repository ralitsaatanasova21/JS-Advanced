function solve(month, year) {
  let days = function (month, year) {
    return new Date(year, month, 0).getDate();
  };
  console.log(days(month, year));
}
solve(1, 2012);
