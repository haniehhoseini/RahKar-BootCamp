const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const taskRoutes = require("./Routes/task.routes");

const app = express();
const port = 4444;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/form", taskRoutes);
app.use("/api/form/reg", taskRoutes);
app.use("/api/form/wallet", taskRoutes);

app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})