function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

// function solve(area, vol, input) {            //basic
//   let coordinates = JSON.parse(input);
//   let result = [];

//   for (let point of coordinates) {
//     result.push({
//       area: area.call(point),
//       volume: vol.call(point),
//     });
//   }
//   return JSON.stringify(result);
// }

function fancy(area, vol, input) {
  return JSON.parse(input).map((point) => ({
    area: area.call(point),
    volume: vol.call(point),
  }));
}

console.log(
  fancy(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
  )
);
