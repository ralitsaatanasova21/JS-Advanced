function createSortedList() {
  let colection = [];

  let res = {
    add(el) {
      colection.push(el);
      colection.sort((a, b) => a - b);
      this.size++;
    },

    remove(index) {
      if (index >= 0 && index < colection.length) {
        colection.splice(index, 1);
        this.size--;
      }
    },

    get(num) {
      return colection[num];
    },
    size: 0,
  };
  return res;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
