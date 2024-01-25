const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth.routes");
const payRoutes = require("./Routes/pay.routes");

const app = express();
const port = 5555;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api", payRoutes);

app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})