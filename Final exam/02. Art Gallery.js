class ArtGallery {
  constructor(creator) {
    (this.creator = creator),
      (this.possibleArticles = { picture: 200, photo: 50, item: 250 }),
      (this.listOfArticles = []),
      (this.guests = []);
  }
  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    let isInTheArr = false;

    if (!this.possibleArticles[articleModel]) {
      throw new Error("This article model is not included in this gallery!");
    }

    for (let el of this.listOfArticles) {
      if (el.articleName === articleName && el.articleModel === articleModel) {
        el.quantity += Number(quantity);
        isInTheArr = true;
      }
    }

    if (!isInTheArr) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    for (let guest of this.guests) {
      if (guest.guestName === guestName) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }

    let obj = { guestName, points: 0, purchaseArticle: 0 };

    switch (personality) {
      case "Vip":
        obj.points = 500;
        break;
      case "Middle":
        obj.points = 250;
        break;
      default:
        obj.points = 50;
        break;
    }
    this.guests.push(obj);

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let article;
    let gust;

    let isInArr = false;

    for (let el of this.listOfArticles) {
      if (el.articleName != articleName || el.articleModel != articleModel) {
        isInArr = false;
      } else {
        article = el;
        isInArr = true;
        break;
      }
    }

    if (!isInArr) {
      throw new Error("This article is not found.");
    }
    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    let isGuestInArr = false;
    for (let el of this.guests) {
      if (el.guestName != guestName) {
        isGuestInArr = false;
      } else {
        gust = el;
        isGuestInArr = true;
        break;
      }
    }

    if (!isGuestInArr) {
      return "This guest is not invited.";
    }

    if (gust.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    } else {
      article.quantity--;
      gust.points -= this.possibleArticles[articleModel];
      gust.purchaseArticle++;
    }
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }

  showGalleryInfo(criteria) {
    let stringArr = [];
    if (criteria == "article") {
      stringArr.push("Articles information:");
      for (let article of this.listOfArticles) {
        let articleInfo = "";
        articleInfo += `${article.articleModel} - ${article.articleName} - ${article.quantity}`;
        stringArr.push(articleInfo);
      }
    } else {
      stringArr.push("Guests information:");
      for (let guest of this.guests) {
        let guestInfo = "";
        guestInfo += `${guest.guestName} - ${guest.purchaseArticle}`;
        stringArr.push(guestInfo);
      }
    }

    return stringArr.join("\n");
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));

// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1
