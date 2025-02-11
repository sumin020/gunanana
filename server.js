<<<<<<< HEAD
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

=======
require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerConfig");
const todoRouter = require("./src/routes/todoRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", todoRouter);

// ✅ Swagger UI 설정
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
  console.log(`📄 Swagger 문서: http://localhost:${PORT}/api-docs`);
});
>>>>>>> 5f219fad8ef1f46b32bd213e5bad671c0b4f36e9
