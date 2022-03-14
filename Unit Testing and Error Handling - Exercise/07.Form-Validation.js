function validate() {
  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let passwordAgain = document.querySelector("#confirm-password");
  let isCompany = document.querySelector("#company");
  let companyNumber = document.querySelector("#companyNumber");
  let valid = document.querySelector("#valid");
  let button = document.querySelector("button");

  isCompany.addEventListener("change", (e) => {
    e.preventDefault();
    if (isCompany.checked) {
      document.querySelector("#companyInfo").style.display = "block";
    } else {
      document.querySelector("#companyInfo").style.display = "none";
    }
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let res = [];
    let userReg = /^[A-Za-z0-9]{3,20}$/;
    if (!userReg.test(username.value)) {
      username.style.borderColor = "red";
      res.push(false);
    } else {
      username.style.borderColor = "";
      res.push(true);
    }

    let emailReg = /^[^@.]+@[^@]*\.[^@]*$/;
    if (!emailReg.test(email.value)) {
      email.style.borderColor = "red";
      res.push(false);
    } else {
      email.style.borderColor = "";
      res.push(true);
    }

    let passReg = /^[\w]{5,15}$/;
    if (
      passReg.test(password.value) &&
      passReg.test(passwordAgain.value) &&
      password.value === passwordAgain.value
    ) {
      password.style.borderColor = "";
      passwordAgain.style.borderColor = "";
      res.push(true);
    } else {
      password.style.borderColor = "red";
      passwordAgain.style.borderColor = "red";
      res.push(false);
    }

    if (isCompany.checked) {
      if (companyNumber.value < 1000 || companyNumber > 9999) {
        companyNumber.style.borderColor = "red";
        res.push(false);
      } else {
        companyNumber.style.borderColor = "";
        res.push(true);
      }
    }

    if (!res.includes(false)) {
      valid.style.display = "block";
    } else {
      valid.style.display = "none";
    }
  });
}
