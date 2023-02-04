function search() {
   const list = Array.from(document.getElementById('towns').children);
   const searchItem = document.getElementById('searchText').value;
   const resultText = document.getElementById('result');
   let counter = 0;

   for (const el of list) {
      if (el.textContent.includes(searchItem)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         counter++;
      } else {
         el.style.textDecoration = 'none';
         el.style.fontWeight = 'normal';
      }
   };

   resultText.textContent = `${counter} matches found`;
}
