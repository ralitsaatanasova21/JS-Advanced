function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  let result = document.getElementById("result");

  gradient.addEventListener("mousemove", gradientMove);
  gradient.addEventListener("mouseout", gradientOut);

  function gradientMove(e) {
    let power = Math.floor((e.offsetX / (e.target.clientWidth - 1)) * 100);
    result.textContent = power + "%";
  }

  function gradientOut(e) {
    result.textContent = "";
  }
}
