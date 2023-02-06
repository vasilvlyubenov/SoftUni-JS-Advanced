class Company {
    constructor() {
        departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name && salary && position && department) {
            if (salary < 0) {
                throw new Error('Invalid input');
            }

            this.departments[department] = {
                    name,
                    salary,
                    position,
            }

            return `New employee is hired. Name: ${name}. Position: ${position}`

        } else {
            throw new Error('Invalid input');
        }
    }

    bestDepartment() {
        
    }
}