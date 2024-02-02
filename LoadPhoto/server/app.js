const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./router/upload.router");

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.use('/api', uploadRoutes);


app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})