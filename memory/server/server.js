const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const memoryRoutes = require("./Routes/memory.routes");

const app = express();
const port = 5555;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api", memoryRoutes);

app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})