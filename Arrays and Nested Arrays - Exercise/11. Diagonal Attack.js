function solve(arr) {
  let firstDiag = 0;
  let secDiag = 0;
  let matrix = [];

  while (arr.length > 0) {
    matrix.push(arr.shift().split(" ").map(Number));
  }

  for (let i = 0; i < matrix.length; i++) {
    firstDiag += matrix[i][i];
    secDiag += matrix[i][matrix.length - 1 - i];
  }

  if (firstDiag == secDiag) {

    for (let i = 0; i < matrix.length; i++) {

      for (let j = 0; j < matrix.length; j++) {
          
        if (j !== matrix.length - 1 - i && j!==i) {
          matrix[i][j] = firstDiag;
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}
solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
// solve(['1 1 1',
// '1 1 1',
// '1 1 0']
// )
