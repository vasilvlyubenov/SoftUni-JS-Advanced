function solve() {
  const inputText = document.getElementById('text').value;
  const type = document.getElementById('naming-convention').value;
  const resultField = document.getElementById('result');
  const inputResult = inputText
    .split(' ')
    .map(el => el.toLowerCase());
    let resultString = '';

    if (type === 'Camel Case') {
      const camelArr = inputResult.map((el, index) => {
        console.log(index);
        if (index > 0) {
          return el = el.replace(el[0], el[0].toUpperCase());
        }
        return el;
      });
      console.log(camelArr);
      resultString = camelArr.join('');
    } else if (type === 'Pascal Case') {
      const pascalArr = inputResult.map(word => word.replace(word[0],word[0].toUpperCase()));
      resultString = pascalArr.join('');
    } else {
      resultString = 'Error!';
    }
  resultField.textContent = resultString;
}