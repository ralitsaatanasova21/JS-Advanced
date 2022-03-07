function deleteByEmail() {
  let emailElement = document.querySelector("input[name='email']");
  let tableElements = document.querySelectorAll("tr td:nth-of-type(2)");

  let emailEls = Array.from(tableElements);
  let targetsEls = emailEls.find((x) => x.textContent === emailElement.value);
  //   tableElements.parentNode.removeChild(tableElements);

  let result = document.getElementById("result");
  if (targetsEls) {
    targetsEls.parentNode.remove();
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}
