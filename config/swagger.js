import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DailyVivea API",
      version: "1.0.0",
      description: "DailyVivea 프로젝트의 API 문서",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "로컬 서버",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./swaggerDocs/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(" Swagger 문서: http://localhost:3000/api-docs");
};

export default swaggerDocs;

