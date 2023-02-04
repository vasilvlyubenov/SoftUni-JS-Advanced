function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const list = Array.from(document.querySelector('tbody').children);
      const searchInput = document.getElementById('searchField').value;
      list.forEach(line => line.classList.remove('select'));
   
      list.forEach(el => {
         const content = Array.from((el).children);
         content.forEach(cell => {
            if(cell.textContent.includes(searchInput)) {
               el.classList.add('select');
            }
         })
      });
   }
}