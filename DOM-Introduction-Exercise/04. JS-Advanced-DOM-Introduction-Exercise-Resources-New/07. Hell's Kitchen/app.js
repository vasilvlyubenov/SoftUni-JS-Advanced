function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const restOutput = document.querySelector('#bestRestaurant>p');
   const workerOutput = document.querySelector('#workers>p');


   function onClick() {
      const inputPars = JSON.parse(input.value)
      const restaurants = {};

      inputPars.forEach(element => {
         const elArray = element.split(' - ');
         const restaurantName = elArray[0];
         const workersArr = elArray[1].split(', ');
         let workers = []

         for (const line of workersArr) {
            const [name, salary] = line.split(' ');
            workers.push({name, salary: Number(salary)});
         }

         if (restaurants.hasOwnProperty(restaurantName)) {
            workers = workers.concat(restaurants[restaurantName].workers);
            }
         
         workers.sort((a, b) => b.salary - a.salary)
         restaurants[restaurantName] = {
            workers,
            avg: workers.reduce((acc, curr) => acc + curr.salary,0) / workers.length,
            best: workers[0].salary,
         }
      });

      
      const sorted = Object.entries(restaurants).sort((a, b) => {
            return b[1].avg - a[1].avg;
      });
      console.log(sorted);
      const winnerRes = sorted[0][0];
      const winnerAvg = restaurants[winnerRes].avg.toFixed(2);
      const bestSalary = restaurants[winnerRes].best.toFixed(2);

      restOutput.textContent = `Name: ${winnerRes} Average Salary: ${winnerAvg} Best Salary: ${bestSalary}`;
      workerOutput.textContent = restaurants[winnerRes].workers
         .map(el => `Name: ${el.name} With Salary: ${el.salary}`)
         .join(' ');
   }
}

// ["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]