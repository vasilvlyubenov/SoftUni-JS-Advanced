function solve() {

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateButton, buyButton] = document.querySelectorAll('button');



  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
    const items = JSON.parse(input.value);
    const tableBody = document.querySelector('tbody');

    items.forEach(item => {
      const tr = document.createElement('tr');
      const imgTD = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.img;
      imgTD.appendChild(img);
      tr.appendChild(imgTD);
      const name = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = item.name
      name.appendChild(pName)
      tr.appendChild(name);
      const price = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = item.price;
      price.appendChild(pPrice)
      tr.appendChild(price);
      const decFactor = document.createElement('td');
      const pDef = document.createElement('p');
      pDef.textContent = item.decFactor;
      decFactor.appendChild(pDef)
      tr.appendChild(decFactor);
      const inputTD = document.createElement('td');
      const inputCheck = document.createElement('input');
      inputCheck.type = 'checkbox';
      inputTD.appendChild(inputCheck);
      tr.appendChild(inputTD);
      tableBody.appendChild(tr);
    });

  }

  function buy() {
    const checkedBoxes = Array.from(document.querySelectorAll('tbody input')).filter((x) => x.checked);
    const result = [];
    let price = 0;
    let defactor = 0;

    checkedBoxes.forEach(box => {
      const parent = box.parentElement.parentElement;
      const data = parent.querySelectorAll('p');
      result.push(data[0].textContent);
      price += Number(data[1].textContent);
      defactor += Number(data[2].textContent);
    });

    output.textContent += `Bought furniture: ${result.join(', ')}\n`;
    output.textContent += `Total price: ${price.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${defactor / checkedBoxes.length}`
  }
}