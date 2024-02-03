const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());

const SaveRouter = require("./router/saveDatabase.router");


app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'photo/')); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    }
});

const upload = multer({ storage: storage });


app.post('/api/send', upload.single('photo'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.use("/api", SaveRouter);

const port = 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
