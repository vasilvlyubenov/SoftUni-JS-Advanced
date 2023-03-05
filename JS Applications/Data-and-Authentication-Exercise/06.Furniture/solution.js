function solve() {
  location = 'home.html';

  document.querySelector('tbody');


}

function populateProducts() {

}

getProducts();

async function getProducts() {
  const url = 'http://localhost:3030/data/furniture';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();

    return data;

  } catch (error) {
    alert(error.message);
  }
}