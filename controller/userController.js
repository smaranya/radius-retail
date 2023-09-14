const userModel = require('../models/userModel');

class UserController {
    async createUser(req, res) {
        const { username, phone, password } = req.body;
        res.status(201).json({message:"API working"});
        // try {
        //     const result = await userModel.createUser(username, email);
        //     res.status(201).json({message:"API working"});
        // } catch (error) {
        //     console.error(error);
        //     res.status(500).json({ message: 'An error occurred while creating the user.' });
        // }
    }
}

module.exports = new UserController();
