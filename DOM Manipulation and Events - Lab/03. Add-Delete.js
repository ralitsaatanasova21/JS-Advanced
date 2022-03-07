function addItem() {
  let inputElement = document.getElementById("newItemText");
  let listItems = document.getElementById("items");

  let newElement = document.createElement("li");
  newElement.textContent = inputElement.value;
  inputElement.value = "";

  let deleteEl = document.createElement("a");
  deleteEl.href = "#";
  deleteEl.textContent = "[Delete]";
  deleteEl.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });

  newElement.appendChild(deleteEl);
  listItems.appendChild(newElement);
}
