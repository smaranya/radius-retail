const userModel = require('../models/userModel');

class UserController {
    async createUser(req, res) {

        const { name, phone, password } = req.fields || req.body;
        
            const result = await userModel.createUser(name,phone,password);
            if(result === 400){
                res.status(400).json({message: "Phone number already exsists"});
            }
            else {
                res.status(201).json({message:"User created sucessfully"});
            }
    }
    async loginUser(req, res){
        const {phone, password} = req.fields || req.body;

        const result = await userModel.loginUser(phone, password);
        
        res.status(200).json(result.rowCount?{message: "Logged in as "+result.rows[0].name}:{message: result});
    }
}

module.exports = new UserController();
