function solve(str) {
  let res = ["<table>"];
  let arr = JSON.parse(str);

  let start = " <tr>";
  let end = "</tr>";
  for (let key in arr[0]) {
    start += "<th>" + key + "</th>";
  }
  res.push(start + end);
  
  for (let el of arr) {
    let word = " <tr>";
    for (let kvp in el) {
      word += "<td>" + el[kvp] + "</td>";
    }
    res.push(word + end);
  }

  res.push("</table>");

  console.log(res.join("\n"));
}
solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
// solve(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`
// )
