function solve() {
  const answers = Array.from(document.querySelectorAll('.answer-text'));
  const section = Array.from(document.querySelectorAll('section'));
  const resultShow = document.getElementById('results');
  const resultHeader = document.querySelector('#results h1');
  const correct = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const result = [];
  let rightAnswers = 0;
  let position = 0;

  answers.forEach(answer => {
    answer.addEventListener('click', () => {

      if (correct.includes(answer.textContent)) {
        result.push(true);
        rightAnswers++
      } else {
        result.push(false);
      }

      section[position].style.display = 'none';
      if (section[position+1] !== undefined) {
        section[++position].style.display = 'block';
      } else {
        if (result.every(el => el === true)) {
          resultHeader.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          resultHeader.textContent = `You have ${rightAnswers} right answers`;
        }
        resultShow.style.display = 'block'
      }
      
    });
  })
}