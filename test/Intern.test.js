const Intern = require("../Library/Intern")

test("Intern test", () =>{
    const intern = new Intern("Zack", "3", "hustonzack5@yahoo.com", "Butler")
    expect(intern.school).toBe("Butler")
    expect(intern.getSchool()).toBe("Butler")
})