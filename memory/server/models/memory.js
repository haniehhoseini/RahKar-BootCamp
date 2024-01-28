const db = require('../utils/database');


class MemoryModule{

    async newMemory(items){
        const query = "insert into Memory (textMemory) values (?)"; 
        let res = await db.connection.execute(query ,[ items.text])
        return res;
    }

    async readMemoryForList(items){
        const {id , textMemory } = items;
        const query = "select id from Memory where textMemory = ?";
        let res = await db.connection.execute(query ,[ textMemory ]);
        return res;
    }

    async editMemory(items){
        const {id , textMemory } = items;
        const query = "update Memory set textMemory = ? where id =?";
        let res = await db.connection.execute(query ,[ id , textMemory ]);
        return res;
    }

    async deleteMemory(items){
        const { id } = items;
        const query = "delete from Memory where id =?";
        let res = await db.connection.execute(query ,[ id , textMemory ]);
        return res;
    }
}

module.exports = new MemoryModule();