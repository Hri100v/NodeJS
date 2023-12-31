const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
express.urlencoded({ extended: false });

app.use(cors());
app.use(bodyParser.json());

// Dummy data: Initial collection of books
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Под игото / Under the Yoke", author: "Иван Вазов / Ivan Vazov" }
];

app.get("/", (req, res) => {
    res.send("Hello World.");
});

app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find(b => b.id === bookID);
    if (!book) {
        return res.status(404).json({ error: `Book not found; ID: ${bookID}` });
    }
    
    res.json(book);
});

app.post("/addingbook", (req, res) => {
    const newBook = req.body;
    newBook.id = books.length;
    const hasBook = books.find(b => b.title === newBook.title && b.author === newBook.author);
    if (!hasBook) {
        books.push(newBook);
        res.status(201).json(newBook);
    }
});

const PORT = 3003;

console.log("Server start on server PORT: " + PORT);
app.listen(PORT);