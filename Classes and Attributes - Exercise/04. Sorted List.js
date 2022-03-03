class List {
  constructor() {
    this.colection = []
    this.size = this.colection.length;
  }
  add(el) {
    this.colection.push(el);
    this.colection.sort((a, b) => a - b);
    this.size++;
    return;
  }
  remove(index) {
    if (index >= 0 && index < this.colection.length) {
      this.colection.splice(index, 1);
      this.size--;
    }
    return;
  }
  get(index) {
    return this.colection[index];
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
