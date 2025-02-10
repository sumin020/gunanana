const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Todo API Documentation",
    version: "1.0.0",
    description: "Daily Vivea Todo 부분 관련 Swagger입니다.",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "로컬",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["../route/todoRouter.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
