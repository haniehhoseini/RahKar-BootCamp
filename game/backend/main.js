const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


app.post('/', (req, res) => {
    const receivedData = req.body;
    
    res.json({ message: 'Data received successfully!' });
    console.log(receivedData);
});

app.get('/' , (req , res)=>{
    res.json();
}) 

app.listen(3000 , ()=>{
    console.log('is oke');
})