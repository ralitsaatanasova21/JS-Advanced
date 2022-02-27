function getArticleGenerator(articles) {
  return () => {
    if (articles.length > 0) {
      let div = document.getElementById("content");
      let createArticle = document.createElement("article");
      let text = articles.shift();
      createArticle.textContent = text;
      div.appendChild(createArticle);
    }
  };
}
