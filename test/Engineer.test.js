const Engineer = require("../Library/Engineer")

test("Engineer test", () =>{
    const engineer = new Engineer("Zack", "3", "hustonzack5@yahoo.com", "zackhuston")
    expect(engineer.GitHub).toBe("zackhuston")
    expect(engineer.getGitHub()).toBe("zackhuston")
})
