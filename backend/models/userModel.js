const db = require('../database');

class UserModel {
    async createUser(name,phone,password) {
        try {
            // Define your SQL query
            const query = 'INSERT INTO Users(UID,Name, Phone, Password, isChatting) VALUES($1, $2, $3, $4,$5);';
            const values = [2,name, phone, password,false];
            

            // Execute the query and return the result
           return await db.query(query, values).then(()=>{console.log("User created")});            
        } catch (error) {
            console.error(error);
            throw error; // You can throw the error to be caught by the controller
        }
    }
}

module.exports = new UserModel();
