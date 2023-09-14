const db = require('../database');

class UserModel {
    async createUser(username, phone, password) {
        const query = 'INSERT INTO Users(Name, Phone, Password, isChatting) VALUES(?, ?, ?, false);';
        const values = [username, phone, password];
        return await db.query(query, values).then(()=>{console.log("User created")});
    }
}

module.exports = new UserModel();
