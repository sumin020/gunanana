const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'database-1.c3uyg6imsa4q.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'dailyviva',
  database: 'DB',
  port: 3306, 
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
