function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        getSalary() {
            return this.salary;
        }

        work() {
            const curr = this.tasks.shift();
            console.log(this.name + curr);
            this.tasks.push(curr);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [` is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age, dividend) {
            super(name, age);
            this.tasks = [` is working on a complicated task.`,
                ` is taking time off work.`,
                ` is supervising junior workers.`
            ];
        }

    }

    class Manager extends Employee {
        constructor(name, age, dividend) {
            super(name, age);
            this.tasks = [` scheduled a meeting.`,
                ` is preparing a quarterly report.`
            ];
            this.dividend = 0;
        }


        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}


const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();