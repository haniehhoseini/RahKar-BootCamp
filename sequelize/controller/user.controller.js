const UserModule = require('../models/user');


exports.user = async (req , res ) =>{
    let checkMobile = /^(?:\+98|0)?9\d{9}$/;
    let mobile = req.body.mobile;
    let isValidMobile = checkMobile.test(mobile);

    if (isValidMobile) {
        try {
            const data = await UserModule.create({
                firstName: req.body.firstName,
                mobile: req.body.mobile
            });
    
            res.json(data);
        } catch (error) {
            console.error('Error adding user data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
      res.status(400).json("The mobile number entered is incorrect");
    }
};




