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
