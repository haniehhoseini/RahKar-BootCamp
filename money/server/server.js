const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/auth.routes");
const payRoutes = require("./Routes/pay.routes");
const historyRoutes = require("./Routes/history.routes");

const app = express();
const port = 5555;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", payRoutes);
app.use("/api", historyRoutes);


app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})