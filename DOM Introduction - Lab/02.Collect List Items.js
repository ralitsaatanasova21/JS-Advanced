function extractText() {
  let listElements = document.getElementById("items");
  let textarea = document.getElementById("result");

  textarea.textContent = listElements.textContent;
}
