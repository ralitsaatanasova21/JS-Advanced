function solve() {
  let buttonAdd = document.querySelector("#add");
  let openSection = document.querySelector(".orange");
  let inProgresSection = document.querySelector("#in-progress");
  let completeSection = document.querySelector(".green");

  buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();

    let task = document.querySelector("#task");
    let description = document.querySelector("#description");
    let date = document.querySelector("#date");

    if (
      task.value.length > 0 &&
      description.value.length > 0 &&
      date.value.length > 0
    ) {
      let mainDivOrange = openSection.parentElement.parentElement.children[1];
      let articleOrange = document.createElement("article");
      let h3Orange = document.createElement("h3");
      h3Orange.textContent = task.value;
      articleOrange.appendChild(h3Orange);

      let p1Orange = document.createElement("p");
      p1Orange.textContent = `Description: ${description.value}`;
      articleOrange.appendChild(p1Orange);

      let p2Orange = p1Orange.cloneNode(true);
      p2Orange.textContent = `Due Date: ${date.value}`;
      articleOrange.appendChild(p2Orange);

      let divOrange = document.createElement("div");
      divOrange.setAttribute("class", "flex");
      articleOrange.appendChild(divOrange);

      let buttonStart = document.createElement("button");
      buttonStart.setAttribute("class", "green");
      buttonStart.textContent = "Start";
      buttonStart.addEventListener("click", (e) => {
        let articleYellow = document.createElement("article");
        let h3Yellow = document.createElement("h3");
        h3Yellow.textContent = task.value;
        articleYellow.appendChild(h3Yellow);

        let p1Yellow = document.createElement("p");
        p1Yellow.textContent = `Description: ${description.value}`;
        articleYellow.appendChild(p1Yellow);

        let p2Yellow = p1Yellow.cloneNode(true);
        p2Yellow.textContent = `Due Date: ${date.value}`;
        articleYellow.appendChild(p2Yellow);

        let divYellow = document.createElement("div");
        divYellow.setAttribute("class", "flex");
        articleYellow.appendChild(divYellow);

        let deleteBYellow = document.createElement("button");
        deleteBYellow.setAttribute("class", "red");
        deleteBYellow.textContent = "Delete";
        deleteBYellow.addEventListener("click", (e) => {
          inProgresSection.removeChild(articleYellow);
        });
        divYellow.appendChild(deleteBYellow);

        let finishB = document.createElement("button");
        finishB.setAttribute("class", "orange");
        finishB.textContent = "Finish";

        finishB.addEventListener("click", (e) => {
          let divComplete =
            completeSection.parentElement.parentElement.children[1];
          let articleFinish = document.createElement("article");
          let h3 = document.createElement("h3");
          h3.textContent = task.value;
          articleFinish.appendChild(h3);

          let p1Finish = document.createElement("p");
          p1Finish.textContent = `Description: ${description.value}`;
          articleFinish.appendChild(p1Finish);

          let p2Finish = p1Finish.cloneNode(true);
          p2Finish.textContent = `Due Date: ${date.value}`;
          articleFinish.appendChild(p2Finish);
          divComplete.appendChild(articleFinish);

          inProgresSection.removeChild(articleYellow);
        });
        divYellow.appendChild(finishB);

        inProgresSection.appendChild(articleYellow);
        mainDivOrange.removeChild(articleOrange);
      });

      divOrange.appendChild(buttonStart);

      let buttonDelete = document.createElement("button");
      buttonDelete.setAttribute("class", "red");
      buttonDelete.textContent = "Delete";
      buttonDelete.addEventListener("click", (e) => {
        mainDivOrange.removeChild(articleOrange);
      });
      divOrange.appendChild(buttonDelete);

      mainDivOrange.appendChild(articleOrange);
    }
  });
}
