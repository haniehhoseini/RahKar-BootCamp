const history = require('../models/history');


exports.buy = async (req , res ) =>{
   let items = await history.buy(req.body);
   res.json(items);
};

exports.allPayment = async (req , res ) =>{
    let items = await history.allPayment(req.body);
    console.log(items);
    res.json(items);
 };