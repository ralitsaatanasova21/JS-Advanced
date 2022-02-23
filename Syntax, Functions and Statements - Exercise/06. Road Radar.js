function solve(speed, town) {
  let status = "";

  if (town === "city") {
    let limit = 50;
    if (speed > limit) {
      let difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference > 20 && difference <= 40) {
        status = "excessive speeding";
      } else if (difference > 40) {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
  } else if (town === "motorway") {
    let limit = 130;
    if (speed > limit) {
      let difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference > 20 && difference <= 40) {
        status = "excessive speeding";
      } else if (difference > 40) {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
  } else if (town === "interstate") {
    let limit = 90;
    if (speed > limit) {
      let difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference > 20 && difference <= 40) {
        status = "excessive speeding";
      } else if (difference > 40) {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
  } else if (town === "residential") {
    let limit = 20;
    if (speed > limit) {
      let difference = speed - limit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference > 20 && difference <= 40) {
        status = "excessive speeding";
      } else if (difference > 40) {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
  }
}
solve(200, "motorway");
