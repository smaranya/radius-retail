const userModel = require('../models/userModel');

class UserController {
    async createUser(req, res) {
        const { name, phone, password } = req.fields;
        
        try {
            const result = await userModel.createUser(name,phone,password);
            res.status(201).json({ result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred while creating the user.' });
        }
    }
}

module.exports = new UserController();
