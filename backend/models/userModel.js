const db = require('../database');

var result ;
class UserModel {
    
    async createUser(name,phone,password) {
        try {
            const query = 'INSERT INTO Users(UID,Name, Phone, Password, isChatting) VALUES($1, $2, $3, $4,$5);';

            const values = [`U${Math.floor(Math.random() * (10000 - 2000 + 1) + 2000)}`,name, phone, password,false];

            result =  await db.query(query, values);
                     
        } catch (error) {
            // result = error.code;

            result = 400;
        }
        finally{
            return result;
        }
    }
}

module.exports = new UserModel();
