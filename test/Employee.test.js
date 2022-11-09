const Employee = require("../Library/Employee")

test("Employee test",() =>{
    const employee = new Employee("Zack", "3", "hustonzack5@yahoo.com")
    expect(employee.name).toBe("Zack")
    expect(employee.getName()).toBe("Zack")
    
})