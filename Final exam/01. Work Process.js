function solve() {
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let dateOfBith = document.getElementById("birth");
  let position = document.getElementById("position");
  let salary = document.getElementById("salary");

  let hireWorkerBtn = document.getElementById("add-worker");
  let tdBody = document.getElementById("tbody");
  let message = document.getElementById("message");
  let totalSum = message.querySelector("span");
  let sum = 0;

  hireWorkerBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      firstName.value == "" ||
      lastName.value == "" ||
      email.value == "" ||
      dateOfBith.value == "" ||
      position.value == "" ||
      salary.value == ""
    ) {
      return;
    }

    let trBody = document.createElement("tr");
    let tdFist = document.createElement("td");
    let tdLast = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdDate = document.createElement("td");
    let tdPosition = document.createElement("td");
    let tdSalary = document.createElement("td");
    let tdButtons = document.createElement("td");
    let firedBtn = document.createElement("button");
    firedBtn.addEventListener("click", () => {
      trBody.remove();
      sum -= Number(tdSalary.textContent);
      totalSum.textContent = Number(sum).toFixed(2);
    });

    let editBtn = document.createElement("button");
    editBtn.addEventListener("click", () => {
      firstName.value = tdFist.textContent;
      lastName.value = tdLast.textContent;
      email.value = tdEmail.textContent;
      dateOfBith.value = tdDate.textContent;
      position.value = tdPosition.textContent;
      salary.value = tdSalary.textContent;

      sum -= Number(tdSalary.textContent);
      totalSum.textContent = Number(sum).toFixed(2);

      trBody.remove();
    });

    sum += Number(salary.value);
    totalSum.textContent = Number(sum).toFixed(2);

    firedBtn.classList = "fired";
    editBtn.classList = "edit";
    editBtn.textContent = "Edit";
    firedBtn.textContent = "Fired";

    tdFist.textContent = firstName.value;
    tdLast.textContent = lastName.value;
    tdEmail.textContent = email.value;
    tdDate.textContent = dateOfBith.value;
    tdPosition.textContent = position.value;
    tdSalary.textContent = salary.value;

    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(firedBtn);

    trBody.appendChild(tdFist);
    trBody.appendChild(tdLast);
    trBody.appendChild(tdEmail);
    trBody.appendChild(tdDate);
    trBody.appendChild(tdPosition);
    trBody.appendChild(tdSalary);
    trBody.appendChild(tdButtons);

    tdBody.appendChild(trBody);

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    dateOfBith.value = "";
    position.value = "";
    salary.value = "";
  });
}
solve();
