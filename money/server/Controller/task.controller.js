const ItemsModule = require('../models/items');


exports.editMemory = async (req , res ) =>{
   let items = await ItemsModule.edit(req.body);
   res.json(items);
};

exports.newMemory = async (req , res)=>{
   console.log(req.body);
   let tasks = await ItemsModule.new(req.body);
   res.json(tasks);
};

exports.readMemory = async (res , req)=>{
   let tasks = await ItemsModule.read(req.body);
   res.json(tasks);
}

exports.deleteMemory = async (res , req)=>{
   let tasks = await ItemsModule.delete(req.body);
   res.json(tasks);
}
