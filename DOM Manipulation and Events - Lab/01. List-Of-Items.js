function addItem() {
  let inputElement = document.getElementById("newItemText");
  let listItems = document.getElementById("items");

  let newElement = document.createElement("li");
  newElement.textContent = inputElement.value;
  listItems.appendChild(newElement);
}
