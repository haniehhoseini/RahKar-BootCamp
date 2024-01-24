const ItemsModule = require('../models/user');
const BookModule = require('../models/book');


exports.user = async (req , res ) =>{
    let items = await ItemsModule.create(
        {
            firstName: req.body.firstName,
            mobile: req.body.mobile
        }
    );
    res.json(items);
};

exports.join = async (req, res) => {
    let user = await ItemsModule.findAll(
        {include: BookModule.user_id}
    )   
    res.json(user);
};


