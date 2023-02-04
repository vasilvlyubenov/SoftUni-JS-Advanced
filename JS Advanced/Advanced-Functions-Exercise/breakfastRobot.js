function solution() {
    const library = {
        protein: 0, 
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    return function manager(string) {
        let [command, action, quantity] = string.split(' ');
        quantity = Number(quantity);

        if (command === 'restock') {
            library[action] += quantity;
            return 'Success';
        } else if (command === 'prepare') {
            const object = recipes[action];
            for (const key in object) {
                if (object[key] * quantity > library[key]) {
                    return `Error: not enough ${key} in stock`;
                } else {
                    library[key] -= object[key] * quantity;
                }
            }
            return 'Success';
        } else if (command === 'report') {
            const result = [];

            for (const ing in library) {
                result.push(`${ing}=${library[ing]}`);
            }

            return result.join(' ');
        }
    }
}


let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
