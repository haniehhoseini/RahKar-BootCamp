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

