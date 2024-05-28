// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property

class Employee {
	constructor(empId, empName) {
		this.id = empId;
		this.name = empName;
	}
	salary(salary) {
		this.salary = salary;
	}
}
class Manager extends Employee {
	constructor(empId, empName, empDept) {
		super(empId, empName);
		this.dept = empDept;
	}
}

const emp1 = new Employee(3, "Johnny");
emp1.salary(5000);
console.log(emp1);

const mgr1 = new Manager(2, "Bob", "Engineering");
mgr1.salary(4000);
console.log(mgr1);
