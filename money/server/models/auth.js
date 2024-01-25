const db = require('../utils/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Hanieh"

class auth{
    async exitRegister(user){
        const { email } = user;
        const query = "select * from auth where email = ?"; 
        let [res] = await db.connection.execute(query ,[ email ]);
        if (res.length > 0) {
            return false;
        }else{return true;}
    }
    
    async register(items){
        if (await this.exitRegister(items)) {
            const { email , password , name } = items;
            const query = "insert into auth (email , password , name ) values (? , ? , ? )"; 
            const hashpassword = await bcrypt.hashSync(password , 10);
            let res = await db.connection.execute(query ,[ email , hashpassword , name ])
            return res;
         }else{console.log("user exits");}
    
    }
    async login(items){
        const {email , password } = items;
        const query = "select password , id from auth where email = ?";
        let [ list ] = await db.connection.execute(query ,[ email ]);
        const truePassword = await bcrypt.compareSync(password , list[0].password);
        if (truePassword) {
            const userId = list[0].id;
            const token = jwt.sign({ email }, secret , { expiresIn: "1h" });
            console.log("success");
            const info = {
                token,
                userId
            }
            return info;
        }else {console.log("Invalid credentials")}
    }
}

module.exports = new auth();