const ItemsModule = require('../models/items');


exports.createTask = async (req , res ) =>{
   let items = await ItemsModule.addItem(req.body);
   res.json(items);
};

exports.readTask = async (req , res)=>{
   let tasks = await ItemsModule.readItem();
   res.json(tasks);
};

exports.updateTask = async (req , res ) =>{
   let items = await ItemsModule.updateItem(req.body);
   res.json(items);
};

exports.deleteTask = async (req , res ) =>{
   const id = req.params.id;
   if (id === undefined) {
      res.status(400).json({ error: 'ID parameter is missing' });
      return;
    }
   let items = await ItemsModule.deleteItem(id);
   res.json(items);
};