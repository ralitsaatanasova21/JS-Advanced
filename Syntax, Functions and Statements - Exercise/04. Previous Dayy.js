function solve(year, month, day) {
  let format = `${year}-${month}-${day}`;
  let date = new Date(format);
  date.setDate(date.getDate()-1);

  console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
solve(2016, 10, 1);
