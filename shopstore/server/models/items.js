const db = require('../utils/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Hanieh"


class ItemsModule{

    async exitRegister(user){
        const { username } = user;
        const query = "select * from user where username = ?"; 
        let [res] = await db.connection.execute(query ,[ username ]);
        if (res.length > 0) {
            return false;
        }else{return true;}
    }

    async register(items){
        if (await this.exitRegister(items)) {
            const { username , password } = items;
            const query = "insert into user (username , password ) values (? , ? )"; 
            const hashpassword = await bcrypt.hashSync(password , 10)
            console.log(hashpassword);
            let res = await db.connection.execute(query ,[ username , hashpassword ])
            return res;
        }else{console.log("user exits");}

    }

    async login(items){
        const {username , password } = items;
        console.log(password);
        const query = "select password from user where username = ?";
        let [ list ] = await db.connection.execute(query ,[ username ]);
        const truePassword = await bcrypt.compareSync(password , list[0].password);
        if (truePassword) {
            const token = jwt.sign({ username }, secret , { expiresIn: "1h" });
            console.log("success");
            return token;
        }else {console.log("Invalid credentials")}
    }

    async wallet(items){
        const { price } = items;
        const query = "insert into transaction (amount) values (?)";
        let res = await db.connection.execute(query ,[ price ])
        return res;
    }
}

module.exports = new ItemsModule();
