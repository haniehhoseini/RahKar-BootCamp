const upload = require('../models/upload');

exports.addPhoto = async (req , res) => {
    try {
        let data = await upload.create(
            {

                PhotoName: req.body.PhotoName,
                urlPhoto: req.body.urlPhoto

            });

            res.json(data , 200);

    } catch (error) {

        res.json({message:error} , 400);

    }
  }