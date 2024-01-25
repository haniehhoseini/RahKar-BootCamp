const pay = require('../models/pay');


exports.pay = async (req , res ) =>{
   let items = await pay.paynew(req.body);
   console.log(items);
   res.json(items);
};