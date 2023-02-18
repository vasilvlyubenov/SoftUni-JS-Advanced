window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const originCost = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');
  const publishBtn = document.getElementById('publish');
  const profit = document.getElementById('profit');
  let totalProfit = 0;

  publishBtn.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    if ((!make.value || !model.value || !year.value || !fuel.value || !originCost.value || !sellingPrice.value) 
    || (originCost.value > sellingPrice.value)) {
      return;
    }

    const tbody = document.getElementById('table-body');
    const tr = createElement('tr', null, 'row');
    const makeTd = createElement('td', `${make.value}`);
    const modelTd = createElement('td', `${model.value}`);
    const yearTd = createElement('td', `${year.value}`);
    const fuellTd = createElement('td', `${fuel.value}`);
    const costlTd = createElement('td', `${originCost.value}`);
    const pricelTd = createElement('td', `${sellingPrice.value}`);
    const btnContainer = createElement('td');
    const editBtn = createElement('button', 'Edit', 'action-btn edit');
    const sellBtn = createElement('button', 'Sell', 'action-btn sell');
    editBtn.addEventListener('click', editInfo);
    sellBtn.addEventListener('click', sellCar);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(sellBtn);
    tr.appendChild(makeTd);
    tr.appendChild(modelTd);
    tr.appendChild(yearTd);
    tr.appendChild(fuellTd);
    tr.appendChild(costlTd);
    tr.appendChild(pricelTd);
    tr.appendChild(btnContainer);
    tbody.appendChild(tr);
    clearForm();
    debugger;
    function editInfo() {
      make.value = makeTd.textContent; 
      model.value = modelTd.textContent;
      year.value = yearTd.textContent;
      fuel.value = fuellTd.textContent;
      originCost.value = costlTd.textContent;
      sellingPrice.value = pricelTd.textContent;
      tr.remove();
    }

    function sellCar() {
      const li = createElement('li', null, 'each-list');
      const car = createElement('span', `${makeTd.textContent} ${modelTd.textContent}`);
      const year = createElement('span', `${yearTd.textContent}`);
      const profitResult = pricelTd.textContent - costlTd.textContent;
      const diffSpan = createElement('span', `${profitResult}`);
      totalProfit += profitResult;
      li.appendChild(car);
      li.appendChild(year);
      li.appendChild(diffSpan);
      document.getElementById('cars-list').appendChild(li);
      profit.textContent = totalProfit.toFixed(2);
      tr.remove();
    }
  }

  function createElement(tag, content, className) {
    const element = document.createElement(tag);

    if(content) {
      element.textContent = content;
    }

    if (className) {
      element.className = className;
    }

    return element;
  }

  function clearForm() {
    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originCost.value = '';
    sellingPrice.value = '';
  }
}
