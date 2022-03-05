function editElement(sentence, oldWords, newWords) {
  while (sentence.textContent.includes(oldWords)) {
    sentence.textContent = sentence.textContent.replace(oldWords, newWords);
  }
}
