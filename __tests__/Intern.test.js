const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it("should create an object with a name, id, email, and school properties", () => {
      const intern = new Intern("John Doe", 1, "john.doe@gmail.com", "UGA")
      expect(intern.school).toBe("UGA");
    });

    it("should return the school of the intern", () => {
      const intern = new Intern("John Doe", 1, "john.doe@gmail.com", "UGA")
      expect(intern.getSchool()).toBe("UGA");
    });

    it("should return 'Intern'", () => {
      const intern = new Intern("John Doe", 1, "john.doe@gmail.com", "UGA")
      expect(intern.getRole()).toBe("Intern");
    });
  })
})