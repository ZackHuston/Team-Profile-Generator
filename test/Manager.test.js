const Manager = require("../Library/Manager")

test("Manager test", () =>{
    const manager = new Manager("Jon", "3", "jonjones0@yahoo.com", "5")
    expect(manager.officeNum).toBe("5")
    expect(manager.getOfficeNum()).toBe("5")
})