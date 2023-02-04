function solve() {
  const textarea = document.getElementById('input').value;
  const textareaArr = textarea.split('.').filter(a => a.length > 0);
  const output = document.getElementById('output');
  const resultArr = [];

  for (let k = 0; k < textareaArr.length; k += 3) {
    const tempArr = [];
    for (let i = 0; i < 3; i++) {
      const token = textareaArr[i + k];
      if (token !== undefined) {
        tempArr.push(token);
      }
    }
    resultArr.push(tempArr);
  }

  output.innerHTML = resultArr.map(el => `<p>${el.join('. ')}.</p>`);
}