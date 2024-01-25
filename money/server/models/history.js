const db = require('../utils/database');

class history{
    async Buy(id){
        const {amount} = data.amount;
        const query = "insertr into buy (amountOfBuy , id ) values (? ,?)"; 
        let res = await db.connection.execute(query ,[ amount , data.userID ]);
        return res;
    }

    async allPayment(){
        
    }
}
module.exports = new history();