function solve() {
   const textarea = document.querySelector('textarea');
   const shop = document.querySelector('.shopping-cart');
   const result = {};
   let totalPrice = 0;
   shop.addEventListener('click', onCLick);

   function onCLick(event) {

      if (event.target.className === 'add-product') {

         const product = event.target.parentElement.parentElement;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         if (!result.hasOwnProperty(name)) {
            result[name] = 0;
         }

         result[name] += price;
         totalPrice += price;
         console.log(totalPrice);

         textarea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      } else if (event.target.className === 'checkout') {
         let list = Object.keys(result).join(', ');
         textarea.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;

         Array.from(document.querySelectorAll('.add-product')).forEach(el => {
            el.setAttribute('disabled', '');
         });

         event.target.setAttribute('disabled', '');
      }
   }
}