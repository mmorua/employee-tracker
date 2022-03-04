// Import npm packages
const mysql = require('mysql2');

// Import .env file, overriding any existing environmental variables
require('dotenv').config({ override: true });

// Create connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jackjack0803!',
  database: 'employee_db',
});

// Start server after database connection
db.connect(err => {
  if (err) throw err;
  console.info('Database connected.');
});

// Export the module
module.exports = db;
