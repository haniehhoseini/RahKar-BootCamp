const ItemsModule = require('../models/book');


exports.book = async (req , res ) =>{
    let items = await ItemsModule.create(
        {
            user_id: req.body.user_id,
            title: req.body.title,
            price: req.body.price
        }
    );
    res.json(items);
};