import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import app from "./app.js";
import { mongodbConnection } from "./db/db.js";
const PORT = process.env.PORT || 5618;

mongodbConnection()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error " + error);
    });
    app.listen(PORT, () => {
      console.log(`Server running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection error!!" + err);
  });
