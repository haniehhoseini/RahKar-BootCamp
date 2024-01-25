const db = require('../utils/database');

class history{
    async buy(data){
        const { amount, userID, name } = data;
        const query = "insert into buy (amountOfBuy , id , name ) values (? ,? , ?)"; 
        let res = await db.connection.execute(query ,[ amount, userID, name  ]);
        return res;
    }

    async allPayment(){

    }
}
module.exports = new history();