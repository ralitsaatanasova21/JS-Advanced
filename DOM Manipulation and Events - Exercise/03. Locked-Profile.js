function lockedProfile() {
  let profilElements = Array.from(document.querySelectorAll(".profile button"));

  profilElements.forEach((button) => button.addEventListener("click", onClick));

  function onClick(e) {
    let profile = e.target.parentElement;
    let isChecked = profile.querySelector('input[value="unlock"]').checked;

    if (isChecked) {
      let info = Array.from(profile.querySelectorAll("div")).find((p) =>
        p.id.includes("HiddenFields")
      );

      if (e.target.textContent === "Show more") {
        e.target.textContent = "Hide it";
        info.style.display = "block";
      } else {
        e.target.textContent = "Show more";
        info.style.display = "none";
      }
    }
  }
}
