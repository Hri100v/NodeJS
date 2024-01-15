const express = require("express");
const router = express.Router();

// Dummy data: Initial collection of books
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Под игото / Under the Yoke", author: "Иван Вазов / Ivan Vazov" }
];

router.get("/", (req, res) => {
    res.send("Hello World.");
});

router.post("/register", (req, res, next) => {
    if (!req.body.firstName) {
        res.status(400).json("you need to add a firstName");
        return;
    }

    res.sendStatus(201);
});

router.get("/books", (req, res) => {
    res.json(books);
});

router.get("/books/:id", (req, res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find(b => b.id === bookID);
    if (!book) {
        return res.status(404).json({ error: `Book not found; ID: ${bookID}` });
    }
    
    res.json(book);
});

router.post("/addingbook", (req, res) => {
    const newBook = req.body;
    newBook.id = books.length;
    const hasBook = books.find(b => b.title === newBook.title && b.author === newBook.author);
    if (!hasBook) {
        books.push(newBook);
        res.status(201).json(newBook);
    }
});

module.exports = router;
