const db = require('../utils/database');

class ItemsModule{

    async addItem(items){
        const { title } = items;
        console.log(title);
        const query = "insert into shoppinglist (title) values (?)"; 
        let res = await db.connection.execute(query ,[ title ] )
        return res;
    }

    async readItem(){
        const query = "select * from shoppinglist";
        let [ list ] = await db.connection.execute(query);
        return list;
    }

    async updateItem(items){
        const { title , id } = items;
        const query = "update shoppinglist set title = ? where id = ? ";
        let res = await db.connection.execute(query , [ title ,id ] )
        return res;
    }

    async deleteItem(id){
        const query = "delete from shoppinglist where id = ?";
        let res = await db.connection.execute(query ,[ id ]);
        return res;
    }

}

module.exports = new ItemsModule();