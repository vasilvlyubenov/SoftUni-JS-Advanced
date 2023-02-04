function create(words) {
   const mainDiv = document.getElementById('content');

   words.forEach(word => {
      const childDiv = document.createElement('div');
      mainDiv.appendChild(childDiv);
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      childDiv.appendChild(p);
   });

   mainDiv.addEventListener('click', onClick);

   function onClick(event) {
      const paragraph = event.target.getElementsByTagName('p')[0];
      paragraph.style.display = 'inline';
   }
}