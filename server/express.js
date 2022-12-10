import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";

const app = express();

/*.....configure express..... */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

export default app;
