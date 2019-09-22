import express from "express";
import bodyParser from "body-parser";
import task from "./routes/task";
import swaggerUiExpress from "swagger-ui-express";
import cors from "./cors";
const swaggerDocument = require("../../swagger.json");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.get("/", (_, res) => {
  res.status(200).send(`This project is alive.`);
});

app.use(cors);

app.use("/api/v1", task);

export default app;
