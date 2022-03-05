function colorize() {
  let rowsElements = document.getElementsByTagName("tr");
  let arr = Array.from(rowsElements);

  arr.forEach((x, i) => {
    if (i % 2 != 0) {
      x.style.backgroundColor = "teal";
    }
  });
}
