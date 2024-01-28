const db = require('../utils/database');

class history{
    async buy(data){
        const { amount, id, name } = data;
        console.log(id);

        const query = "insert into buy (amountOfBuy , id , name ) values (? ,? , ?)"; 
        let res = await db.connection.execute(query ,[ amount, id, name ]);
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

    async sumOfPayAndBuy(data){
        const { userID } = data;
        const queryBuy = "SELECT SUM(buy.amountOfBuy) as sumbuy FROM buy INNER JOIN auth ON auth.id = buy.id  WHERE auth.id = ?";
        const queryPay = "SELECT SUM(pay.amount) as sumpay FROM pay INNER JOIN auth ON auth.id = pay.id  WHERE auth.id = ?";
        let resBuy = await db.connection.execute(queryBuy, [userID] );
        let resPay = await db.connection.execute(queryPay, [userID] );
        const sumbuy = parseFloat(resBuy[0][0].sumbuy);
        const sumpay = parseFloat(resPay[0][0].sumpay);

        if (!isNaN(sumbuy) && !isNaN(sumpay)) {
            const baghimandeh = sumpay - sumbuy;
            console.log(baghimandeh);
            return baghimandeh;
        } else {
            console.log("Error in decimal");
            return 0;
        }
        
    }
}
module.exports = new history();
