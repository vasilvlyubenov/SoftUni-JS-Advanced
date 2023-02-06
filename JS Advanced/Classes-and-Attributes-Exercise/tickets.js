function solve(arr, str) {
    const result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const line of arr) {
        const lineArr = line.split('|');
        result.push(new Ticket(lineArr[0], lineArr[1], lineArr[2]));
    }

    if (str === 'price') {
        return result.sort((a, b) => a.price - b.price);
    } else {
        return result.sort((a, b) => a[str].localeCompare(b[str]))
    }
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));