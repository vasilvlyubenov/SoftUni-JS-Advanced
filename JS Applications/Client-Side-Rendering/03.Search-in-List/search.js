import {
   html,
   render
} from './node_modules/lit-html/lit-html.js';

import { towns } from './towns.js';


const template = (towns) => html `
            <ul>
                ${towns.map(town => html `<li>${town}</li>`)}
            </ul>`;

render(template(towns), document.getElementById('towns'));
            
document.querySelector('button').addEventListener('click', search);

function search() {
   const searchList = Array.from(document.querySelectorAll('li'));
   searchList.map(s => s.classList.remove('active'));
   const str = document.getElementById('searchText').value;
   let res = 0;

   if (str.length > 0) {
      const filtered = searchList.filter(l => l.textContent.includes(str));

      filtered.map(f => f.classList.add('active'));
      res = filtered.length;
   }


   document.getElementById('result').textContent = `${res} matches found`;
}