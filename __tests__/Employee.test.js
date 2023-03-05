const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it("should create an object with a name, id, and email properties", () => {
      const employee = new Employee("John Doe", 1, "john.doe@gmail.com")
      expect(employee.name).toBe("John Doe");
      expect(employee.id).toBe(1);
      expect(employee.email).toBe("john.doe@gmail.com");
    });

    it("should return the employee name", () => {
      const employee = new Employee("John Doe", 1, "john.doe@gmail.com")
      expect(employee.getName()).toBe("John Doe");
    });

    it("should return the employee id", () => {
    const employee = new Employee("John Doe", 1, "john.doe@gmail.com")
    expect(employee.getID()).toBe(1);
    });

    it("should return the employee email", () => {
    const employee = new Employee("John Doe", 1, "john.doe@gmail.com")
    expect(employee.getEmail()).toBe("john.doe@gmail.com");
    });

    it("should return 'Employee'", () => {
      const employee = new Employee("John Doe", 1, "john.doe@gmail.com")
      expect(employee.getRole()).toBe("Employee");
    });
  })
})




//Line 6 = modularity concept is that we should be building our code independently w/o being worried about cross-interaction, when things are brough together, we know this piece doesnt have an impact on that