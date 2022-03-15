window.addEventListener("load", solve);

function solve() {
  let genre = document.getElementById("genre");
  let name = document.getElementById("name");
  let date = document.getElementById("date");
  let author = document.getElementById("author");
  let addBtn = document.getElementById("add-btn");
  let likes = 0;

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      genre.value === "" ||
      name.value === "" ||
      author.value === "" ||
      date.value === ""
    ) {
      return;
    }

    let allHits = document.querySelector(".all-hits-container");
    let hitsInfo = document.createElement("div");
    hitsInfo.classList.add("hits-info");

    let image = document.createElement("img");
    image.src = "./static/img/img.png";
    let h2Genre = document.createElement("h2");
    h2Genre.textContent = `Genre: ${genre.value}`;
    let h2Name = document.createElement("h2");
    h2Name.textContent = `Name: ${name.value}`;
    let h2Author = document.createElement("h2");
    h2Author.textContent = `Author: ${author.value}`;
    let h3Date = document.createElement("h3");
    h3Date.textContent = `Date: ${date.value}`;

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save song";
    saveBtn.addEventListener("click", onSave);

    let likeBtn = document.createElement("button");
    likeBtn.classList.add("like-btn");
    likeBtn.textContent = "Like song";
    likeBtn.addEventListener("click", onLike);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", onDelete);
    hitsInfo.appendChild(image);
    hitsInfo.appendChild(h2Genre);
    hitsInfo.appendChild(h2Name);
    hitsInfo.appendChild(h2Author);
    hitsInfo.appendChild(h3Date);
    hitsInfo.appendChild(saveBtn);
    hitsInfo.appendChild(likeBtn);
    hitsInfo.appendChild(deleteBtn);
    allHits.appendChild(hitsInfo);

    genre.value = "";
    name.value = "";
    author.value = "";
    date.value = "";

    function onSave() {
      document.querySelector(".saved-container").appendChild(hitsInfo);
      hitsInfo.removeChild(saveBtn);
      hitsInfo.removeChild(likeBtn);
    }
    function onLike(e) {
      likes++;
      document.querySelector(
        ".likes"
      ).children[0].textContent = `Total Likes: ${likes}`;
      e.target.disabled = true;
    }
    function onDelete() {
      hitsInfo.remove();
    }
  });
}
