const db = require('../utils/database');


class MemoryModule{

    async newMemory(items){
        const query = "insert into Memory (textMemory) values (?)"; 
        let res = await db.connection.execute(query ,[ items.text])
        return res;
    }

    async readMemoryForList(){
        const query = "select * from Memory";
        let res = await db.connection.execute(query);
        return res;
    }

    async editMemory(items){
        const {id , textMemory } = items;
        const query = "update Memory set textMemory = ? where id =?";
        let res = await db.connection.execute(query ,[ textMemory ,id ]);
        return res;
    }

    async readMemoryWithSpecificID(items){
        const { id } = items;
        const query = "select textMemory from Memory where id =?";
        let res = await db.connection.execute(query,[ id ]);
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