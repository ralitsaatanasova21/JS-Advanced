function addItem() {
  let menuElement = document.querySelector("#menu");
  let inputText = document.querySelector("#newItemText").value;
  let inputValue = document.querySelector("#newItemValue").value;

  let newOption = document.createElement("option");
  newOption.text = inputText;
  newOption.value = inputValue;

  if (inputText != "" && inputValue != "") {
    menuElement.appendChild(newOption);
  }
  document.querySelector("#newItemText").value = "";
  document.querySelector("#newItemValue").value = "";
}
