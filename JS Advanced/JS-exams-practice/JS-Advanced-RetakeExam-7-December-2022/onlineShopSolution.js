class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.warehouseSpace -= spaceRequired;
        this.products.push({
            product,
            quantity
        });
        
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        let filteredProduct = this.products.find(pr => pr.product === product);

        if (!filteredProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (filteredProduct.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
        }

        let diff = 0;

        this.products.map(pr => {
            if (pr.product === product) {
                diff = minimalQuantity - pr.quantity;
                pr.quantity = minimalQuantity;
            }
        });

        return `You added ${diff} more from the ${product} products.`
    }

    sellProduct(product) {
        const selled = this.products.find(el => el.product === product);
        if (!selled) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        this.products.map(pr => {
            if (pr.product === product) {
                pr.quantity--;
            }
        });
        let quantity = selled.quantity;
        this.sales.push({
            product,
            quantity
        });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        let result = [];
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        } else {
            result.push(`You sold ${this.sales.length} products today!`);
        }
        
        result.push('Products in warehouse:');
        this.products.forEach(el => {
            result.push(`${el.product}-${el.quantity} more left`);
        });

        return result.join('\n');
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 40, ));