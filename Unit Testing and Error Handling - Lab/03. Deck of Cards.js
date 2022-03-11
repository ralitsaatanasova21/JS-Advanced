function printDeckOfCards(cards) {
  let masiv = [];
  function createCard(face, suit) {
    let faces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A",];
    let suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (!faces.includes(face) || !suits[suit]) {
      throw new Error("Error");
    }

    if (face !== face.toUpperCase() || suit !== suit.toUpperCase()) {
      throw new Error("Error");
    }

    let card = {
      face,
      suit,
      toString() {
        return this.face + suits[this.suit];
      },
    };
    return card;
  }
  let isTrue = true;
  for (let row of cards) {
    let s = row.substring(row.length - 1);
    let f = row.substring(0, row.length - 1);

    try {
      let card = createCard(f, s);
      masiv.push(card);
    } catch (ex) {
      isTrue = false;
      console.log(`Invalid card: ${f + s}`);
    }
  }
  if (isTrue) {
    console.log(masiv.join(", "));
  }
}
printDeckOfCards(["AS", "10D", "KH", "2C"]);
printDeckOfCards(["5S", "3D", "QD", "1C"]);
