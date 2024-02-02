const express = require("express");
const cors = require("cors");

const userRoutes = require("./router/user.router");
const bookRoutes = require("./router/book.router");

const app = express();
const port = 4444;

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", bookRoutes);

app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})