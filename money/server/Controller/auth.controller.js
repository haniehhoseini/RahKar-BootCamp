const auth = require('../models/auth');


exports.register = async (req , res ) =>{
   let items = await auth.register(req.body);
   res.json(items);
};

exports.login = async (req , res)=>{
   let tasks = await auth.login(req.body);
   res.json(tasks);
};

