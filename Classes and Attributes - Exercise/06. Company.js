class Company {
  constructor() {
    this.departments = new Map();
  }
  addEmployee(name, salary, position, department) {
    if (
      name === "" ||
      salary === "" ||
      position === "" ||
      department === "" ||
      +salary <= 0
    ) {
      throw new Error("Invalid input!");
    }

    if (this.departments[department]) {
      this.departments[department].push({ name, salary, position });
    } else {
      this.departments[department] = [];
      this.departments[department].push({ name, salary, position });
    }

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDepartment;
    let bestEmployee;
    let entries = Object.entries(this.departments);
    for (let [department, employees] of entries) {
      for (let employee of employees) {
        if (
          bestEmployee == undefined ||
          bestEmployee.salary < employee.salary
        ) {
          bestEmployee = employee;
          if (bestDepartment !== department) {
            bestDepartment = department;
          }
        }
      }
    }
    function allEmployes(department) {
      let result = [];
      for (let emp of department) {
        result.push(`${emp.name} ${emp.salary} ${emp.position}`);
      }
      return result;
    }

    this.departments[bestDepartment] = this.departments[bestDepartment].sort(
      (a, b) => {
        if (a.salary > b.salary) {
          return 1;
        } else if (a.salary < b.salary) {
          return -1;
        }
        if (a.username > b.username) {
          return -1;
        } else if (a.username < b.username) {
          return 1;
        }
      }
    );
    let ar = this.departments[bestDepartment].reverse();
    let averageSalary = ar.reduce((a, b) => a + b.salary, 0);
    let total = averageSalary / ar.length;
    let emp = allEmployes(ar);
    return `Best Department is: ${bestDepartment}\nAverage salary: ${total.toFixed(
      2
    )}\n${emp.join("\n")}`;
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
