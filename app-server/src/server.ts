import express from "express";
import morgan from "morgan";
import { default as fn } from "./fn/";
import { logErrors, errorHandler } from "./services/error";

const app = express();

// https://github.com/expressjs/morgan#dev
// :method :url :status :response-time ms - :res[content-length]
app.use(morgan("dev"));

app.use("/", fn);

app.use(logErrors);
app.use(errorHandler);

if (typeof jest === "undefined") {
  app.listen(3000, () => {
    console.log(Date(), "Functions server is up and running");
  });
}

export default app;
