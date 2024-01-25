const db = require('../utils/database');

class pay{
    async paynew(data){
        const {amount} = data.amount;
        const query = "insert into pay (amount , id ) values (? ,?)"; 
        let res = await db.connection.execute(query ,[ amount , data.userID ]);
        return res;
    }
}
module.exports = new pay();