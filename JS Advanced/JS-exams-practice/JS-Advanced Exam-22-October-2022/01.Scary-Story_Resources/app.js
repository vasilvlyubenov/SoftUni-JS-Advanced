window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const genre = document.getElementById('genre');
  const storyTitle = document.getElementById('story-title');
  const storyText = document.getElementById('story');
  const publishButton = document.getElementById('form-btn');


  publishButton.addEventListener('click', (e) => publish(firstName.value, lastName.value, age.value, genre.value, storyTitle.value, storyText.value, e));

  function publish(first, last, years, gen, title, text, e) {
    e.preventDefault();

    if (!first || !last || !years || !gen || !title || !text) {
      return;
    }

    const preview = document.getElementById('preview-list');
    const li = createElement('li', null, 'story-info');
    const article = createElement('article', null, null);
    const h4 = createElement('h4', `Name: ${first} ${last}`, null);
    const pAge = createElement('p', `Age: ${years}`, null);
    const pTitle = createElement('p', `Title: ${title}`);
    const pGenre = createElement('p', `Genre: ${gen}`);
    const pText = createElement('p', `${text}`);
    append(article, h4);
    append(article, pAge);
    append(article, pTitle);
    append(article, pGenre);
    append(article, pText);

    const saveBtn = createButton('save-btn', 'Save Story');
    const editBtn = createButton('edit-btn', 'Edit Story');
    const dellBtn = createButton('delete-btn', 'Delete Story');

    saveBtn.addEventListener('click', save);
    editBtn.addEventListener('click', (e) => {edit(e, first, last, years, gen, title, text);});
    dellBtn.addEventListener('click', deleteStory);

    append(li, article);
    append(li, saveBtn);
    append(li, editBtn);
    append(li, dellBtn);
    append(preview, li);

    clearInputField();
    togglePublishButton();
  }


  function createElement(tag, text, prop) {
    const el = document.createElement(tag);

    if (text) {
      el.textContent = text;
    }

    if (prop) {
      el.className = prop;
    }

    return el;
  }

  function append(parent, child) {
    return parent.appendChild(child);
  }

  function createButton(prop, text) {
    const button = document.createElement('button');
    button.className = prop;
    button.textContent = text;

    return button;
  }

  function clearInputField() {
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    genre.value = '';
    storyTitle.value = '';
    storyText.value = '';
  }

  function togglePublishButton() {

    if (publishButton.disabled === true) {
      return publishButton.disabled = false;
    } else {
      return publishButton.disabled = true;
    };
  }

  function save(e) {
    const h1 = createElement('h1', 'Your scary story is saved!');
    document.getElementById('main').replaceChildren(h1);
  }

  function edit(e, first, last, years, gen, title, text) {
    firstName.value = first;
    lastName.value = last;
    age.value = years;
    genre.value = gen;
    storyTitle.value = title;
    storyText.value = text;
    e.target.parentElement.remove();
    togglePublishButton();
  }

  function deleteStory(e) {
    e.target.parentElement.remove();
    togglePublishButton();
  }
}