const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/book-manag")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const bookSchema = mongoose.Schema({
    book: String,
    author: String,
    price: Number
});

const Book = mongoose.model("Book", bookSchema);

app.get("/", (req, res) => {
    res.send("Home Route");
});

app.get("/create", async (req, res) => {

    const bookdata = new Book({
        book: req.query.book,
        author: req.query.author,
        price: req.query.price
    });

    await bookdata.save();


});





// this is comment


app.get("/read/:book", async (req, res) => {
    const bookdata = await Book.findOne({
        book: req.params.book
    });
    res.json({
        data: bookdata
    });

});

app.get("/update/:book", async (req, res) => {
    const bookdata = await Book.updateOne({
            book: req.params.book
        },
        {
            book: req.query.book,
            author: req.query.author,
            price: req.query.price
        }
    );
   
});
app.get("/delete/:book", async (req, res) => {
    const bookdata = await Book.deleteOne({
        book: req.params.book
    });
});





app.listen(3000, () => {
    console.log("Running");
});