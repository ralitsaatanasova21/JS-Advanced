function solve(data, criteria) {
  let inputData = JSON.parse(data);
  criteria = criteria.split("-");

  inputData
    .filter((x) => x[command[0]] === command[1])
    .forEach((item, index) =>
      console.log(
        `${index}. ${item.first_name} ${item.last_name} - ${item.email}`
      )
    );
}
solve(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);