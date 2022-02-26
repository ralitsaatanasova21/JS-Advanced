function solve(arr) {
  let cars = {};

  let commands = {
    create: (name, inherit, info) => {
      if (inherit != undefined) {
        cars[name] = Object.create(cars[info]);
      } else {
        cars[name] = {};
      }
    },

    set: (name, key, value) => {
      cars[name][key] = value;
    },

    print: (name) => {
      let result = [];
      for (let key in cars[name]) {
        result.push(`${key}:${cars[name][key]}`);
      }
      console.log(result.join(","));
    },
  };
  arr
    .map((x) => x.split(" "))
    .forEach(([cmd, ...others]) => {
      commands[cmd](...others);
    });
}
solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
