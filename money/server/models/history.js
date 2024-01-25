const db = require('../utils/database');

class history{
    async buy(data){
        const { amount, userID, name } = data;
        const query = "insert into buy (amountOfBuy , id , name ) values (? ,? , ?)"; 
        let res = await db.connection.execute(query ,[ amount, userID, name ]);
        return res;
    }

    async allPaymentBuy(data){
        const { userID } = data;
        console.log(userID);
        const query = "SELECT buy.name, buy.amountOfBuy FROM buy INNER JOIN auth ON auth.id = buy.id  WHERE auth.id = ?";
        let [res] = await db.connection.execute(query, [userID] );
        return res;
    }

    
    async allPaymentPay(data){
        const { userID } = data;
        console.log(userID);
        const query = "SELECT pay.amount FROM pay INNER JOIN auth ON auth.id = pay.id  WHERE auth.id = ?";
        let [res] = await db.connection.execute(query, [userID] );
        return res;
    }
}
module.exports = new history();
