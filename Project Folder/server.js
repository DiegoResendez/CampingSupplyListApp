
require('dotenv').config();




let connection = mysql.createConnection({
    password: process.env.DB_PASSWORD
});