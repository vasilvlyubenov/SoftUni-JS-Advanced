import {
   getData
} from "./src/data.js";
import {
   html,
   render
} from './node_modules/lit-html/lit-html.js'

const template = (data) => html `
   <tr>
      <td>${data.firstName} ${data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.course}</td>
   </tr>`;

document.getElementById('searchBtn').addEventListener('click', search);

populate()

async function populate() {
   const data = Object.values(await getData());

   render(data.map(template),document.querySelector('tbody'));
}

async function search() {
   const value = document.getElementById('searchField').value.trim();
   const rows = Array.from(document.querySelectorAll('tr'));

   rows.map(r => r.classList.remove('select'))
   clearFIeld();
  
   if (value.length > 0) {
      rows.forEach(row => {
         const content = Array.from(row.children);
         content.forEach(r => {
            if (r.textContent.toLowerCase().includes(value.toLowerCase())) {
               row.classList.add('select');
            }
         });
      });
   }
}

function clearFIeld() {
   document.getElementById('searchField').value = '';
}