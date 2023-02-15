window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const personAge = document.getElementById('age');
  const genderSelect = document.getElementById('genderSelect');
  const textarea = document.getElementById('task');
  const formBtn = document.getElementById('form-btn');
  const progressCount = document.getElementById('progress-count');
  const clearBtn = document.getElementById('clear-btn');
  let counter = 0;
  formBtn.addEventListener('click', (e) => {formSubmit(e, firstName.value, lastName.value, personAge.value, genderSelect.value, textarea.value);});
  clearBtn.addEventListener('click', clearField);

  function formSubmit(e, first, last, age, gender, text) {
    e.preventDefault();

    if (!first || !last || !age || !gender || !text) {
      return;
    }

    const progressUl = document.getElementById('in-progress');
    const li = createElement('li', null, 'each-line');
    const article = createElement('article');
    const h4 = createElement('h4', `${first} ${last}`);
    const pInfo = createElement('p', `${gender}, ${age}`);
    const pText = createElement('p', `Dish description: ${text}`);
    article.appendChild(h4);
    article.appendChild(pInfo);
    article.appendChild(pText);
    li.appendChild(article);
    const editBtn = createElement('buttom', 'Edit', 'edit-btn');
    const completeBtn = createElement('buttom', 'Mark as complete', 'complete-btn');
    editBtn.addEventListener('click', (e) =>{editInfo(e, first, last, age, gender, text);});
    completeBtn.addEventListener('click', (e) =>{completeInfo(li);});

    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    progressUl.appendChild(li);
    counter++;
    progressCount.textContent = counter;
    clearForm();
  }

  function editInfo(e, first, last, age, gender, text) {
    firstName.value = first;
    lastName.value = last;
    personAge.value = age;
    genderSelect.value = gender,
    textarea.value = text;
    counter--;
    progressCount.textContent = counter;
    e.target.parentElement.remove();
  }

  function completeInfo(li) {
    const finishedUl = document.getElementById('finished');
    li.querySelector('.edit-btn').remove();
    li.querySelector('.complete-btn').remove();
    finishedUl.appendChild(li);
    counter--;
    progressCount.textContent = counter;
  }

  function createElement(tag, content, tagClass) {
    const el = document.createElement(tag);

    if (content) {
      el.textContent = content;
    }

    if (tagClass) {
      el.className = tagClass;
    }

    return el;
  }

  function clearField(e) {
    Array.from(e.target.parentElement.querySelectorAll('.each-line')).map(el => el.remove());
  }

  function clearForm() {
    firstName.value = '';
    lastName.value = '';
    personAge.value = '';
    genderSelect.value = '';
    textarea.value = '';
  }
}
