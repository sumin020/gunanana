const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: 'database-1.c3uyg6imsa4q.ap-northeast-2.rds.amazonaws.com',
    port:'3306',
    user: 'admin',
    password: 'dailyviva',
    database: 'DB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.connect((error) => {
  if (error) {
    console.error("Database connection failed: " + error.stack);
    return;
  }
  console.log("Connected to the database as ID " + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;
