const db = require('../utils/database');

class pay{
    async paynew(data){
        const { amount , id } = data.userID;
        const query = "insert into pay (amount , id) values (? ,?)"; 
        let res = await db.connection.execute(query ,[ amount , id ]);
        return res;
    }
}
module.exports = new pay();