const Engineer = require('../lib/engineer');

describe("Engineer", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, and email address", () => {
            const engineer = new Engineer("John Smith", 1, "john@email.com", "johnsmith");

            expect(engineer.name).toEqual("John Smith");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("john@email.com");
            expect(engineer.github).toEqual("johnsmith");
        })
    });

    describe("Name", () => {
        it("Should set the Name", () => {
        const input = "John Smith";
        const expected = {"name": "John Smith", "id": 1, "email": "name@email.com", "github": "handlename"};
        
        const result = new Engineer(input, 1, "name@email.com", "handlename");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID", () => {
        const input = 5;
        const expected = {"name": "First Last", "id": 5, "email": "name@email.com", "github": "handlename"};
        
        const result = new Engineer("First Last", input, "name@email.com", "handlename");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email", () => {
        const input = "john@email.com";
        const expected = {"name": "First Last", "id": 1, "email": "john@email.com", "github": "handlename"};
        
        const result = new Engineer("First Last", 1, input, "handlename");

        expect(result).toEqual(expected);
        });
    });
    
    describe("GitHub", () => {
        it("Should set the GitHub handle", () => {
        const input = "johnsmith";
        const expected = {"name": "First Last", "id": 1, "email": "name@email.com", "github": "johnsmith"};
        
        const result = new Engineer("First Last", 1, "name@email.com", input);

        expect(result).toEqual(expected);
        });
    });
});