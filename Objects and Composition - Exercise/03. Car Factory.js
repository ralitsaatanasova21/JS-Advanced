function solve(car) {
  let newCar = {};
  newCar.model = car.model;

  if (car.power > 0 && car.power <= 100) {
    newCar.engine = { power: 90, volume: 1800 };
  } else if (car.power > 100 && car.power <= 160) {
    newCar.engine = { power: 120, volume: 2400 };
  } else if (car.power > 160) {
    newCar.engine = { power: 200, volume: 3500 };
  }

  if (car.carriage === "hatchback") {
    newCar.carriage = { type: "hatchback", color: car.color };
  } else if (car.carriage === "coupe") {
    newCar.carriage = { type: "coupe", color: car.color };
  }

  newCar.wheels = [];
  let n = 4;
  while (n > 0) {
    if (car.wheelsize % 2 === 0) {
      newCar.wheels.push(Math.floor([car.wheelsize - 1]));
    } else {
      newCar.wheels.push(Math.floor([car.wheelsize]));
    }
    n--;
  }

  return newCar;
}
solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
