const ItemsModule = require('../models/items');


exports.loginTask = async (req , res ) =>{
   let items = await ItemsModule.login(req.body);
   res.json(items);
};

exports.registerTask = async (req , res)=>{
   console.log(req.body);
   let tasks = await ItemsModule.register(req.body);
   res.json(tasks);
};

exports.wallet = async (req , res)=>{
   let tasks = await ItemsModule.wallet(req.body);
   res.json(tasks);
};

