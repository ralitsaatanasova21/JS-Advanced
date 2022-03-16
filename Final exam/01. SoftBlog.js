function solve() {
  let author = document.getElementById("creator");
  let title = document.getElementById("title");
  let category = document.getElementById("category");
  let content = document.getElementById("content");
  let createBtn = document.getElementsByTagName("button")[0];

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let posts = document.querySelector(".site-content").children[0].children[0];
    let article = document.createElement("article");
    let h1Title = document.createElement("h1");
    let pCategory = document.createElement("p");
    let strCategory = document.createElement("strong");
    let pAuthor = document.createElement("p");
    let strAuthor = document.createElement("strong");
    let pContent = document.createElement("p");
    let divBtn = document.createElement("div");
    divBtn.classList = "buttons";
    let delBtn = document.createElement("button");
    delBtn.classList = "btn delete";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", onDelete);
    let archBtn = document.createElement("button");
    archBtn.classList = "btn archive";
    archBtn.textContent = "Archive";
    archBtn.addEventListener("click", onArchive);

    h1Title.textContent = title.value;
    pAuthor.textContent = "Creator: ";
    strAuthor.textContent = author.value;
    strCategory.textContent = category.value;
    pCategory.textContent = "Category: ";
    pContent.textContent = content.value;

    divBtn.appendChild(delBtn);
    divBtn.appendChild(archBtn);
    pCategory.appendChild(strCategory);
    pAuthor.appendChild(strAuthor);
    article.appendChild(h1Title);
    article.appendChild(pCategory);
    article.appendChild(pAuthor);
    article.appendChild(pContent);
    article.appendChild(divBtn);
    posts.appendChild(article);

    author.value = "";
    title.value = "";
    category.value = "";
    content.value = "";

    function onDelete() {
      article.remove();
    }
    function onArchive() {
      let olSection = document.querySelector("ol");
      let newLi = document.createElement("li");
      newLi.textContent = h1Title.textContent;
      olSection.appendChild(newLi);

      Array.from(document.querySelectorAll("li"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach((newLi) => {
          olSection.appendChild(newLi);
        });

      article.remove();
    }
  });
}
