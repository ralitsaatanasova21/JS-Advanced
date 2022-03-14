function notify(message) {
  let result = document.getElementById("notification");
  result.innerText = message;
  result.style.display = "block";

  result.addEventListener("click", (e) => {
    e.target.style.display = "none";
  });

}
