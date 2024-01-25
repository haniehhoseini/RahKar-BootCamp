const history = require('../models/history');


exports.buy = async (req , res ) =>{
   let items = await history.buy(req.body);
   res.json(items);
};

exports.allPaymentBuy = async (req , res ) =>{
    let items = await history.allPaymentBuy(req.body);
    res.json(items);
};

exports.allPaymentPay = async (req , res ) =>{
    let items = await history.allPaymentPay(req.body);
    res.json(items);
};