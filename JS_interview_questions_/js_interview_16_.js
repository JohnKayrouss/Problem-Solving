// Design the same classes by using only Javascript prototypes

/*
class Employee {
	constructor(empId, empName) {
		this.id = empId;
		this.name = empName;
	}
	salary(salary) {
		this.salary = salary;
	}
}

const emp1 = new Employee(3, "Johnny");
emp1.salary(5000);
console.log(emp1);
class Manager extends Employee {
	constructor(empId, empName, empDept) {
		super(empId, empName);
		this.dept = empDept;
	}
}
const mgr1 = new Manager(2, "Bob", "Engineering");
mgr1.salary(4000);
console.log(mgr1);

*/

function Employee(empId, empName) {
	this.id = empId;
	this.name = empName;
}

Employee.prototype.salary = function (empSalary) {
	this.salary = empSalary;
};
const emp1 = new Employee(10, "Johnny Joe");
emp1.salary(4000);
console.log(emp1);

function Manager(empId, empName, deptName) {
	Employee.call(this, empId, empName);
	this.dept = deptName;
}
Manager.prototype = Employee.prototype;

const mgr1 = new Manager(3, "Bob", "Sales");
mgr1.salary(9000);
console.log(mgr1);
