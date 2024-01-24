const db = require('../utils/database');


class ItemsModule{

    async new(items){
        const { textMemory } = items;
        const query = "insert into memory (textMemory) values (?)"; 
        let res = await db.connection.execute(query ,[ textMemory])
        return res;
    }

    async read(items){
        const {id , textMemory } = items;
        const query = "select id from memory where textMemory = ?";
        let res = await db.connection.execute(query ,[ textMemory ]);
        return res;
    }

    async edit(items){
        const {id , textMemory } = items;
        const query = "update memory set textMemory = ? where id =?";
        let res = await db.connection.execute(query ,[ id , textMemory ]);
        return res;
    }

    async delete(items){
        const { id } = items;
        const query = "delete from memory where id =?";
        let res = await db.connection.execute(query ,[ id , textMemory ]);
        return res;
    }
}

module.exports = new ItemsModule();