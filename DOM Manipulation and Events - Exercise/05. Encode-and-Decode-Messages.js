function encodeAndDecodeMessages() {
  let main = document.querySelector("#main");

  let sendButton = main.children[0].children[2];
  let sendText = main.children[0].children[1];

  let receiveText = main.children[1].children[1];
  let receiveButton = main.children[1].children[2];

  sendButton.addEventListener("click", () => {
    let currentText = sendText.value;
    let encodeText = [];
    for (let index = 0; index < currentText.length; index++) {
      let assciCode = currentText.charCodeAt(index);
      encodeText.push(String.fromCharCode(assciCode + 1));
    }
    sendText.value = "";
    receiveText.value = encodeText.join("");
  });

  receiveButton.addEventListener("click", () => {
    let text = receiveText.value;
    let fixed = [];
    for (let index = 0; index < text.length; index++) {
      let assciCode = text.charCodeAt(index);
      fixed.push(String.fromCharCode(assciCode - 1));
    }
    receiveText.value = fixed.join("");
  });
}
