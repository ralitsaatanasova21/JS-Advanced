function solve() {
  let name = document.querySelector("#container").children[0];
  let hall = document.querySelector("#container").children[1];
  let ticketPrice = document.querySelector("#container").children[2];
  let onScreenBtn = document.querySelector("#container").children[3];
  let sectionMovies = document.querySelector("#movies");
  let sectionArchive = document.querySelector("#archive");

  onScreenBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let isTrue = true;
    if (!Number(ticketPrice.value)) {
      isTrue = false;
    }

    if (name.value === "" || hall.value === "" || !isTrue) {
      return;
    }

    let moviesUl = sectionMovies.children[1];
    let moviesLi = document.createElement("li");
    let spanName = document.createElement("span");
    let strongHall = document.createElement("strong");
    let div = document.createElement("div");
    let strongPrice = document.createElement("strong");
    let input = document.createElement("input");
    let archiveBtn = document.createElement("button");

    spanName.textContent = name.value;
    strongHall.textContent = `Hall: ${hall.value}`;
    strongPrice.textContent = Number(ticketPrice.value).toFixed(2);
    input.placeholder = "Tickets Sold";
    archiveBtn.textContent = "Archive";

    archiveBtn.addEventListener("click", () => {
      let isTrue = true;
      if (!Number(input.value)) {
        isTrue = false;
      }
      if (!isTrue) {
        return;
      }

      let totalSum = input.value * strongPrice.textContent;

      let li = document.createElement("li");
      let s = document.createElement("span");
      s.textContent = spanName.textContent;
      li.appendChild(s);

      let strng = document.createElement("strong");
      strng.textContent = `Total amount: ${totalSum.toFixed(2)}`;
      li.appendChild(strng);

      let buttonDelete = document.createElement("button");
      buttonDelete.textContent = "Delete";
      buttonDelete.addEventListener("click", () => {
        sectionArchive.children[1].removeChild(li);
      });

      li.appendChild(buttonDelete);
      sectionMovies.children[1].removeChild(moviesLi);
      sectionArchive.children[1].appendChild(li);
    });

    let clearBtn = sectionArchive.children[2];
    clearBtn.addEventListener("click", () => {
      sectionArchive.children[1].innerHTML = "";
    });

    div.appendChild(strongPrice);
    div.appendChild(input);
    div.appendChild(archiveBtn);
    moviesLi.appendChild(spanName);
    moviesLi.appendChild(strongHall);
    moviesLi.appendChild(div);
    moviesUl.appendChild(moviesLi);

    name.value = "";
    hall.value = "";
    ticketPrice.value = "";
  });
}
