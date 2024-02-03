const SaveTitleAndNameModule = require('../models/savetitleandname');

exports.SaveTitleAndName = async (req , res ) =>{
    let items = await SaveTitleAndNameModule.create(
        {
            PhotoName: req.body.PhotoName,
            Title: req.body.Title,
        }
    );
    res.json(items);
};

