function createComputerHierarchy() {
    class Components {
        constructor(manufacturer) {
            if (new.target === Components) {
                throw new Error;
            }

            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Components {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Components {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Components {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Components {
        constructor(manufacturer, processorSpeed, ram, harddisk) {
            if (new.target === Computer) {
                throw new Error;
            }

            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.harddisk = harddisk;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, harddisk, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, harddisk);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError;
            }

            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, harddisk, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, harddisk);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError;
            }

            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError;
            }

            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
