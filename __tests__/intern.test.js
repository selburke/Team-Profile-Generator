const Intern = require('../lib/intern');

describe("Intern", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, and email address", () => {
            const intern = new Intern("John Smith", 1, "john@email.com", "university");

            expect(intern.name).toEqual("John Smith");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("john@email.com");
            expect(intern.school).toEqual("university");
        })
    });

    describe("Name", () => {
        it("Should set the Name", () => {
        const input = "John Smith";
        const expected = {"name": "John Smith", "id": 1, "email": "name@email.com", "school": "university name"};
        
        const result = new Intern(input, 1, "name@email.com", "university name");

        expect(result).toEqual(expected);
        });
    });

    describe("Intern ID", () => {
        it("Should set the Intern ID", () => {
        const input = 5;
        const expected = {"name": "First Last", "id": 5, "email": "name@email.com","school": "university name"};
        
        const result = new Intern("First Last", input, "name@email.com", "university name");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email", () => {
        const input = "john@email.com";
        const expected = {"name": "First Last", "id": 1, "email": "john@email.com", "school": "university name"};
        
        const result = new Intern("First Last", 1, input, "university name");

        expect(result).toEqual(expected);
        });
    });

    describe("School", () => {
        it("Should set the School", () => {
        const input = "university";
        const expected = {"name": "First Last", "id": 1, "email": "name@email.com", "school": "university"};
        
        const result = new Intern("First Last", 1, "name@email.com", input);

        expect(result).toEqual(expected);
        });
    });
});