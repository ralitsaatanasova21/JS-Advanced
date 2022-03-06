function solve() {
    let inputNumber = document.querySelector("input");
    let divElement = document.getElementById("container");
    let button = document.getElementsByTagName("button")[0];
    let result = document.querySelector("#result");
  
    let selectElement = divElement.children[6];
  
    let binOp = document.createElement("option");
    binOp.textContent = "Binary";
    binOp.value = "binary";
    selectElement.appendChild(binOp);
  
    let hexOp = document.createElement("option");
    hexOp.textContent = "Hexadecimal";
    hexOp.value = "hexadecimal";
    selectElement.appendChild(hexOp);
  
    button.addEventListener("click", onclick);
  
    function onclick(e) {
      let value = selectElement.options[selectElement.selectedIndex].value;
      let num = Number(inputNumber.value);
  
      if (value === "binary") {
        let number = parseInt(num);
        let res = number.toString(2);
        result.value = res;
      } else if (value === "hexadecimal") {
        let hexStr = num.toString(16);
        result.value = hexStr.toUpperCase();
      }
    }
  }