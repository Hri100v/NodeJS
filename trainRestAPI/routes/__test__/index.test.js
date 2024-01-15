const app = require("../../app");
const request = require("supertest");

describe("register", () => {
    it("returns status code 201 if firstName is added", async () => {
        const res = await request(app)
            .post("/register")
            .send({ firstName: "Hristo" });

        expect(res.statusCode).toEqual(201);
    });

    it("returns bad request if firstName is skipped", async () => {
        const res = await request(app)
            .post("/register")
            .send({});

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual("you need to add a firstName");
    });
});

describe("books", () => {
    it("get all (base) books", async () => {
        const res = await request(app).get("/books");
        // console.log(res, 1001);
        expect(res.statusCode).toEqual(200);
        // expect(res.body.length).toEqual(4);
        expect(res.body.length >= 4).toBeTruthy();
    });

    it("get a book with a concrete \'id\'", async () => {
        const res = await request(app).get("/books/4");

        expect(res.body.title).toBe("Под игото / Under the Yoke");
    });
});
