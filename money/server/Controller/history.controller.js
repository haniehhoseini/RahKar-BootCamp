const history = require('../models/history');


exports.history = async (req , res ) =>{
   let items = await history.buy(req.body);
   res.json(items);
};