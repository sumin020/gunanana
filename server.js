const express = require('express');
const todoRouter = require('./route/todoRouter');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', todoRouter);

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});