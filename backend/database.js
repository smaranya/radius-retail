const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Create a new instance of the Pool with your database configuration.
const pool = new Pool({
    
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT || 5432,
});

// Handle database connection errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1); // Exit the application on database errors
});

// Test the database connection and log a message when it's connected.
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
    } else {
        console.log('Database connected');
    }
    done(); // Release the client back to the pool
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
