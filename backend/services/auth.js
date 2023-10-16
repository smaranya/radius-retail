const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split("Bearer ")[1];
    if (!token) {
        return res.status(403).json({ msg: "Missing auth header" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    
    if (decoded && decoded.id) {
        
        req.userId = decoded.id;
        next();
    } else {
        return res.status(403).json({ msg: "Incorrect token" });
    }
}

module.exports = auth; 
