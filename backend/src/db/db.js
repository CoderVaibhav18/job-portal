import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const mongodbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log("Mongodb host name " + connectionInstance.connection.host);
  } catch (err) {
    console.log("erroe is: " + err);
    process.exit(1);
  }
};
