const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it("should create an object with a name, id, email, and office number properties", () => {
      const manager = new Manager("John Doe", 1, "john.doe@gmail.com", 1)
      expect(manager.officeNumber).toBe(1);
    });

    it("should return the manager office number", () => {
      const manager = new Manager("John Doe", 1, "john.doe@gmail.com", 1)
      expect(manager.getOfficeNumber()).toBe(1);
    });

    it("should return 'Manager'", () => {
      const manager = new Manager("John Doe", 1, "john.doe@gmail.com", 1)
      expect(manager.getRole()).toBe("Manager");
    });
  })
})