const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST || 'localhost',
    database: process.env.NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT || 5432,
});
console.log("Database Connected");
module.exports = {
    query: (text, params) => pool.query(text, params),
};
