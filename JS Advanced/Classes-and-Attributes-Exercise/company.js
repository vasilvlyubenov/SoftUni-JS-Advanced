class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name && salary && position && department && salary >= 0) {

            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = [];
            }

            this.departments[department].push({
                name,
                salary,
                position
            });

            return `New employee is hired. Name: ${name}. Position: ${position}`;

        } else {
            throw new Error('Invalid input!');
        }
    }

    bestDepartment() {
        const avgSalary = [];
        const result = [];

        Object.keys(this.departments).forEach(dep => {
            const sal = this.departments[dep].reduce((acc, el) => acc + el.salary, 0);
            const avg = sal / this.departments[dep].length;

            avgSalary.push({
                dep,
                avg
            });
        });

        const sortedAvg = avgSalary.sort((a, b) => b.avg - a.avg);
        const sortedEmployees = this.departments[sortedAvg[0].dep].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        result.push(`Best Department is: ${sortedAvg[0].dep}`);
        result.push(`Average salary: ${sortedAvg[0].avg.toFixed(2)}`);
        sortedEmployees.forEach(el => {
            result.push(`${el.name} ${el.salary} ${el.position}`);
        });
        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());