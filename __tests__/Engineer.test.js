const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it("should create an object with a name, id, email, and github properties", () => {
      const engineer = new Engineer("John Doe", 1, "john.doe@gmail.com", "johndoe")
      expect(engineer.github).toBe("johndoe");
    });

    it("should return the github username of the engineer", () => {
      const engineer = new Engineer("John Doe", 1, "john.doe@gmail.com", "johndoe")
      expect(engineer.getGithub()).toBe("johndoe");
    });

    it("should return 'Engineer'", () => {
      const engineer = new Engineer("John Doe", 1, "john.doe@gmail.com", "johndoe")
      expect(engineer.getRole()).toBe("Engineer");
    });
  })
})