 function splitText(query) {
  let result = [];
  let elems = document.querySelectorAll(query);
  elems.forEach((elem) => {
    let text = elem.innerText;
    elem.innerHTML = text
      .split('')
      .map((char) => `<span>${char}</span>`)
      .join('');
    result.push(elem.children);
  });
  resultr = result.length == 1 ? result[0] : result;
  return resultr;
}
