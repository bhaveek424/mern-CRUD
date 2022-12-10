import config from "../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL

mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(config.port, () =>
      console.log(`Server running on port: ${config.port}`)
    )
  )
  .catch((error) => console.log(error.message));

//mongoose.set("useFindAndModify", false);
/*mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${CONNECTION_URL}`);
}); */

/*app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server started on port %s.", PORT);
}); */
