window.addEventListener("load", solution);

function solution() {
  let name = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let code = document.getElementById("code");
  let submitBtn = document.getElementById("submitBTN");
  let editBtn = document.getElementById("editBTN");
  let continueBtn = document.getElementById("continueBTN");
  let finallBlock = document.getElementById("block");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      name.value === "" ||
      email.value === "" ||
      phone.value === "" ||
      address.value === "" ||
      code.value === ""
    ) {
      return;
    }

    let infoPreview = document.getElementById("infoPreview");
    let nameLi = document.createElement("li");
    let emailLi = document.createElement("li");
    let phoneLi = document.createElement("li");
    let addressLi = document.createElement("li");
    let codeLi = document.createElement("li");
    nameLi.textContent = `Full Name: ${name.value}`;
    emailLi.textContent = `Email: ${email.value}`;
    phoneLi.textContent = `Phone Number: ${phone.value}`;
    addressLi.textContent = `Address: ${address.value}`;
    codeLi.textContent = `Postal Code: ${code.value}`;

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    infoPreview.appendChild(nameLi);
    infoPreview.appendChild(emailLi);
    infoPreview.appendChild(phoneLi);
    infoPreview.appendChild(addressLi);
    infoPreview.appendChild(codeLi);
    name.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    code.value = "";
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    function onEdit(e) {
      let infoArr = Array.from(document.getElementsByTagName("li"));
      let output = Array.from(document.getElementsByTagName("input"));
      for (let i = 0; i < infoArr.length; i++) {
        output[i].value = infoArr[i].textContent.split(": ")[1];
      }
      document.querySelector("ul").innerHTML = "";
      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;
    }
    function onContinue(e) {
      finallBlock.innerHTML = "";
      let last = document.createElement("h3");
      last.textContent = "Thank you for your reservation!";
      finallBlock.appendChild(last);
    }
  });
}
