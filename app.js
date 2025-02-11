require('dotenv').config(); 

console.log('JWT_SECRET:', process.env.JWT_SECRET);  // JWT_SECRET 값 확인


const express = require("express");
const app = express();
const userRoutes = require("./src/routes/userRoutes");

app.use(express.json()); // JSON 요청 처리
app.use("/api", userRoutes); // 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
