function solution() {
  let sections = document.querySelector(".container");
  let input = sections.querySelector("input");
  let addBtn = sections.querySelector("button");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "") {
      return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;
    li.classList = "gift";
    let ulListGifts = sections.children[1].children[1];
    let sendBtn = document.createElement("button");
    sendBtn.addEventListener("click", onSend);
    let discardBtn = document.createElement("button");
    discardBtn.addEventListener("click", onDiscard);
    sendBtn.id = "sendButton";
    discardBtn.id = "discardButton";
    sendBtn.textContent = "Send";
    discardBtn.textContent = "Discard";
    li.appendChild(sendBtn);
    li.appendChild(discardBtn);
    ulListGifts.appendChild(li);

    Array.from(ulListGifts.querySelectorAll("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((x) => ulListGifts.appendChild(x));

    function onSend() {
      let ulSendGifts = sections.children[2].children[1];
      ulSendGifts.appendChild(li);
      li.removeChild(sendBtn);
      li.removeChild(discardBtn);
    }
    function onDiscard() {
      let ulDiscardGifts = sections.children[3].children[1];
      ulDiscardGifts.appendChild(li);
      li.removeChild(sendBtn);
      li.removeChild(discardBtn);
    }
    input.value = "";
  });
}

