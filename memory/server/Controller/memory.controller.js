const MemoryModule = require('../models/memory');


exports.editMemory = async (req , res ) =>{
   let items = await MemoryModule.editMemory(req.body);
   res.json(items);
};

exports.newMemory = async (req , res)=>{
   let tasks = await MemoryModule.newMemory(req.body);
   res.json(tasks);
};

exports.readMemory = async (req , res)=>{
   let tasks = await MemoryModule.readMemoryForList();
   res.json(tasks);
}

exports.deleteMemory = async (res , req)=>{
   let tasks = await MemoryModule.deleteMemory(req.body);
   res.json(tasks);
}

exports.readMemoryWithSpecificID = async (req, res)=>{
   let tasks = await MemoryModule.readMemoryWithSpecificID(req.body);
   res.json(tasks);
}
