const Employee = require('../lib/employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, and email address", () => {
            const employee = new Employee("John Smith", 1, "john@email.com");

            expect(employee.name).toEqual("John Smith");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("john@email.com");
        })
    });

    describe("Name", () => {
        it("Should set the Name", () => {
        const input = "John Smith";
        const expected = {"name": "John Smith", "id": 1, "email": "name@email.com"};
        
        const result = new Employee(input, 1, "name@email.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID", () => {
        const input = 5;
        const expected = {"name": "First Last", "id": 5, "email": "name@email.com"};
        
        const result = new Employee("First Last", input, "name@email.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email", () => {
        const input = "john@email.com";
        const expected = {"name": "First Last", "id": 1, "email": "john@email.com"};
        
        const result = new Employee("First Last", 1, input);

        expect(result).toEqual(expected);
        });
    });
});