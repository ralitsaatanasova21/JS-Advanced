function solve() {
  let task = document.getElementById("task");
  let description = document.getElementById("description");
  let date = document.getElementById("date");
  let add = document.getElementById("add");

  let sections = document.querySelector(".wrapper");
  let openDiv = sections.children[1].children[1];
  let inProgressDiv = sections.children[2].children[1];
  let completeDiv = sections.children[3].children[1];

  add.addEventListener("click", (e) => {
    e.preventDefault();

    if (task.value == "" || description.value === "" || date.value === "") {
      return;
    }

    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let pDesc = document.createElement("p");
    let pDate = document.createElement("p");
    let divFlex = document.createElement("div");
    let startBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    startBtn.addEventListener("click", onStart);
    deleteBtn.addEventListener("click", onDelete);
    divFlex.classList = "flex";
    startBtn.classList = "green";
    deleteBtn.classList = "red";

    h3.textContent = task.value;
    pDesc.textContent = `Description: ${description.value}`;
    pDate.textContent = `Due Date: ${date.value}`;
    startBtn.textContent = "Start";
    deleteBtn.textContent = "Delete";

    article.appendChild(h3);
    article.appendChild(pDesc);
    article.appendChild(pDate);
    divFlex.appendChild(startBtn);
    divFlex.appendChild(deleteBtn);
    article.appendChild(divFlex);

    openDiv.appendChild(article);

    task.value = "";
    description.value = "";
    date.value = "";

    function onDelete() {
      article.parentNode.removeChild(article);
    }
    function onStart() {
      article.children[3].removeChild(startBtn);
      let finish = document.createElement("button");
      finish.textContent = "Finish";
      finish.classList = "orange";
      finish.addEventListener("click", () => {
        article.removeChild(divFlex);
        completeDiv.appendChild(article);
      });
      article.children[3].appendChild(finish);
      inProgressDiv.appendChild(article);
    }
  });
}
