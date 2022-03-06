function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let exta = document.getElementById("extra");

  if (button.textContent === "More") {
    button.textContent = "Less";
    exta.style.display = "block";
  } else if (button.textContent === "Less") {
    button.textContent = "More";
    exta.style.display = "none";
  }
}

//Second solution
function toggle() {
  let button = document.querySelector(".button");
  let exta = document.querySelector("#extra");

  if (button.textContent === "More") {
    button.textContent = "Less";
    exta.style.display = "block";
  } else {
    button.textContent = "More";
    exta.style.display = "none";
  }
}
