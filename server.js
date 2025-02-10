// const express = require('express')
// const app = express()
// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host: 'database-1.c3uyg6imsa4q.ap-northeast-2.rds.amazonaws.com',
//     user: 'admin',
//     password: 'dailyviva',
//     port: 3306,
// });
// connection.connect((err) => {
//     if (err) {
//       console.error('❌ Database connection failed:', err);
//       return;
//     }
//     console.log('✅ Connected to Amazon RDS');
//     });

require("dotenv").config();  // ✅ 환경 변수 로드

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

const reportRoutes = require("./src/router/reportRoutes");
app.use("/reports", reportRoutes);

app.listen(port, () => {
    console.log(`서버가 실행중입니다 서버 주소 http://localhost:${port}.`);
});

