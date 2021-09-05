const Manager = require('../lib/manager');

describe("Manager", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, and email address", () => {
            const manager = new Manager("John Smith", 1, "john@email.com", "111-222-3333");

            expect(manager.name).toEqual("John Smith");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("john@email.com");
            expect(manager.officeNumber).toEqual("111-222-3333");
        })
    });

    describe("Name", () => {
        it("Should set the Name", () => {
        const input = "John Smith";
        const expected = {"name": "John Smith", "id": 1, "email": "name@email.com", "officeNumber": "111-111-1111"};
        
        const result = new Manager(input, 1, "name@email.com", "111-111-1111");

        expect(result).toEqual(expected);
        });
    });

    describe("Manager ID", () => {
        it("Should set the Manager ID", () => {
        const input = 5;
        const expected = {"name": "First Last", "id": 5, "email": "name@email.com", "officeNumber": "111-111-1111"};
        
        const result = new Manager("First Last", input, "name@email.com", "111-111-1111");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email", () => {
        const input = "john@email.com";
        const expected = {"name": "First Last", "id": 1, "email": "john@email.com", "officeNumber": "111-111-1111"};
        
        const result = new Manager("First Last", 1, input, "111-111-1111");

        expect(result).toEqual(expected);
        });
    });
    describe("Office Number", () => {
        it("Should set the Office Number", () => {
        const input = "111-222-3333";
        const expected = {"name": "First Last", "id": 1, "email": "name@email.com", "officeNumber": "111-222-3333"};
        
        const result = new Manager("First Last", 1, "name@email.com", input);

        expect(result).toEqual(expected);
        });
    });
});