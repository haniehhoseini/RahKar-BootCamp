
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());




let First;
let Second;

app.post('/', (req, res) => {
    First = req.body.First;
    Second = req.body.Second;
    
    
});    
app.get('/', (req, res) => {
    res.json({ First, Second });
});

  
app.listen(3000 , ()=>{
    console.log('is oke');
})