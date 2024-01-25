const db = require('../utils/database');

class history{
    async buy(data){
        const { amount, userID, name } = data;
        const query = "insert into buy (amountOfBuy , id , name ) values (? ,? , ?)"; 
        let res = await db.connection.execute(query ,[ amount, userID, name  ]);
        return res;
    }

    async allPayment(id){
        console.log(id);
        const query = "SELECT buy.name, buy.amountOfBuy, pay.amount FROM buy INNER JOIN auth ON auth.id = buy.id INNER JOIN pay ON pay.id = auth.id WHERE auth.id = ?";
        let [res] = await db.connection.execute(query, id );
        return res;
    }
}
module.exports = new history();