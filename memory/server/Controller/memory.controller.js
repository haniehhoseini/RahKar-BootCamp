const MemoryModule = require('../models/memory');


exports.editMemory = async (req , res ) =>{
   let items = await MemoryModule.editMemory(req.body);
   res.json(items);
};

exports.newMemory = async (req , res)=>{
   console.log(req.body);
   let tasks = await MemoryModule.newMemory(req.body);
   res.json(tasks);
};

exports.readMemory = async (res , req)=>{
   let tasks = await MemoryModule.readMemoryForList(req.body);
   res.json(tasks);
}

exports.deleteMemory = async (res , req)=>{
   let tasks = await MemoryModule.deleteMemory(req.body);
   res.json(tasks);
}
