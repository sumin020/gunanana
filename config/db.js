const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, 
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0
});

// 연결 테스트
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL 연결 실패:', err);
    return;
  }
  console.log('✅ MySQL RDS 연결 성공!');
  connection.release();
});

module.exports = pool;

