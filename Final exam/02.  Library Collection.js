class LibraryCollection {
  constructor(capacity) {
    (this.capacity = capacity), (this._books = []);
  }
  addBook(bookName, bookAuthor) {
    if (this._books.length < this.capacity) {
      this._books.push({ bookName, bookAuthor, payed: false });
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    } else {
      throw new Error("Not enough space in the collection.");
    }
  }

  payBook(bookName) {
    let currBook = this._books.find((x) => x.bookName === bookName);

    if (!currBook) {
      throw new Error(`${bookName} is not in the collection.`);
    } else {
      if (currBook.payed === true) {
        throw new Error(`${bookName} has already been paid.`);
      } else {
        currBook.payed = true;
        return `${bookName} has been successfully paid.`;
      }
    }
  }

  removeBook(bookName) {
    let currBook = this._books.find((x) => x.bookName === bookName);

    if (!currBook) {
      throw new Error("The book, you're looking for, is not found.");
    } else {
      if (currBook.payed === false) {
        throw new Error(
          `${bookName} need to be paid before removing from the collection.`
        );
      } else {
        let indexOfBook = this._books.indexOf(currBook);
        this._books = this._books.splice(indexOfBook - 1, 1);
        return `${bookName} remove from the collection.`;
      }
    }
  }

  getStatistics(bookAuthor) {
    let result = [];

    if (!bookAuthor) {
      let emptySpot = this.capacity - this._books.length;
      result.push(`The book collection has ${emptySpot} empty spots left.`);

      let sorted = this._books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      for (let el of sorted) {
        let paid = "";
        if (el.payed === true) {
          paid = "Has Paid";
        } else {
          paid = "Not Paid";
        }
        result.push(`${el.bookName} == ${el.bookAuthor} - ${paid}.`);
      }
    } else {
      let currAuthor = this._books.find((x) => x.bookAuthor === bookAuthor);

      if (!currAuthor) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      } else {
        let sorted = this._books.sort((a, b) =>
          a.currAuthor.localeCompare(b.currAuthor)
        );
        for (let el of sorted) {
          let paid = "";
          if (el.payed === true) {
            paid = "Has Paid";
          } else {
            paid = "Not Paid";
          }
          result.push(`${el.bookName} == ${el.bookAuthor} - ${paid}.`);
        }
      }
    }
    return result.join("\n");
  }
}
const library = new LibraryCollection(5);

console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
console.log(library.addBook("Ulysses", "James Joyce"));

// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

// library.addBook("In Search of Lost Time", "Marcel Proust");
// console.log(library.payBook("In Search of Lost Time"));
// console.log(library.payBook("Don Quixote"));

// // In Search of Lost Time has been successfully paid.
// // Don Quixote is not in the collection.

// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// console.log(library.removeBook("Don Quixote"));
// console.log(library.removeBook("In Search of Lost Time"));

// // Don Quixote remove from the collection.
// // In Search of Lost Time need to be paid before removing from the collection.

// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.getStatistics("Miguel de Cervantes"));

// // The Don Quixote, with an author Miguel de Cervantes, collect.
// // Don Quixote == Miguel de Cervantes - Not Paid.

// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Ulysses", "James Joyce");
// console.log(library.getStatistics());

// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
