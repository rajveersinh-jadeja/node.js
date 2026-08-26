import express from "express";

const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

//Serve static files from public folder
app.use(express.static("public"));

// Set EJS as the template engine
app.set("view engine", "ejs");
let todo = [];

// Home route
app.get("/", (req, res) => {
    res.render("index", { todos : todo });
});

// Add new todo task
app.post("/add",(req,res) => {
    const task = req.body.task;
     todo.push(task);
      res.redirect("/");
});

// Delete todo task using id
app.post("/delete/:id", (req,res)  => {
    const id = req.params.id;
     const temp = todo.filter((todo, index) => {return index != id});
     todo = temp;
     res.redirect("/");
})

//START SERVER
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});