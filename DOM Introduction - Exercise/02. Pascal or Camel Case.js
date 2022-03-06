function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  text = text.split(" ");
  let result = "";

  if (convention === "Camel Case") {
    let startWith = text.shift().toLowerCase();
    result += startWith;

    for (let i = 0; i < text.length; i++) {
      let word = text[i].toLowerCase();
      let currLetter = word.charAt(0).toUpperCase() + word.slice(1);
      result += currLetter;
    }
  } else if (convention === "Pascal Case") {
    for (let i = 0; i < text.length; i++) {
      let word = text[i].toLowerCase();
      let currLetter = word.charAt(0).toUpperCase() + word.slice(1);
      result += currLetter;
    }
  } else {
    result = "Error!";
  }

  let resultElement = document.getElementById("result");
  resultElement.textContent = result;
}
solve("this is an example", "Camel Case");
solve("secOND eXamPLE", "Pascal Case");

//Second solution
function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";

  if (convention === "Camel Case") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else if (convention === "Pascal Case") {
    result += text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] === " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result = "Error!";
  }

  let resultElement = document.getElementById("result");
  resultElement.textContent = result;
}
