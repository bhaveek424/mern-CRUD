import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import Template from "../template";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

/*.....configure express..... */
// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//mount routes
app.use("/", userRoutes);
app.use("/", authRoutes);

app.use("/", (req, res) => {
  res.status(200).send(Template());
});

// Catch unauthorized errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ":" + err.message });
    console.log(err);
  }
});

export default app;
