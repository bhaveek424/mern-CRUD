import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import Template from "../template";
import cors from "cors";
import helmet from "helmet";

const app = express();

/*.....configure express..... */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.use("/", (req, res) => {
  res.status(200).send(Template());
});

export default app;
