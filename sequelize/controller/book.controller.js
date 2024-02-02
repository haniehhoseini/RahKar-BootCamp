const BookModule = require('../models/book');
const UserModule = require('../models/user');
require('../models/association');


exports.book = async (req , res ) =>{
    let items = await BookModule.create(
        {
            user_id: req.body.user_id,
            Name: req.body.Name,
            price: req.body.price
        }
    );
    res.json(items);
};

exports.joinedTables = async (req, res) => {
    try {
        let data = await BookModule.findAll({ include: UserModule });
        res.json(data);
      } catch (error) {
        console.error('Error fetching joined tables:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };