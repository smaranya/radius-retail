const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

class UserController {
  createUser(req, res) {
    const { name, phone, password } = req.fields || req.body;

    userModel.createUser(name, phone, password)
      .then(result => {
        if (result === 400) {
          res.status(400).json({status: 400, message: 'Error while creating user' });
        } else {
          res.status(201).json({ status: 201,message: 'User created successfully' });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the user' });
      });
  }

  loginUser(req, res) {
    const { phone, password } = req.fields || req.body;

    userModel.loginUser(phone, password)
      .then(result => {
        if (result.rowCount === 1) {
        
          const accessToken = jwt.sign(
            {
              id: result.rows[0].uid,
              name: result.rows[0].name
            },
            JWT_SECRET,
            {expiresIn:'1m'}
          );  
          
          res.status(200).header('Authorization',  accessToken).json({
            message: 'Logged in as ' + result.rows[0].name,
            accessToken,
          });
        } else {
          res.status(401).json({
            message: 'Authentication failed. Invalid phone or password.',
          });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during login.' });
      });
  }
  homepage(req,res){

    
    res.status(200).json({message: "Authenticated user here"});
  }
}


module.exports = new UserController();
