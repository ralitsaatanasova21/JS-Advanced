function solve(arr) {
  let result = [];

  const obj = {
    add,
    remove,
    print,
  };

  function add(el) {
    result.push(el);
  }
  function remove(el) {
    result = result.filter((e) => e !== el);
  }
  function print() {
    console.log(result.join(","));
  }

  arr.forEach((com) => {
    let row = com.split(" ");
    let command = row[0];
    let text = row[1];

    switch (command) {
      case "add":
        obj.add(text);
        break;
      case "remove":
        obj.remove(text);
        break;
      case "print":
        obj.print();
    }
  });
}

solve(["add pesho", "add george", "add peter", "remove peter", "print"]);
