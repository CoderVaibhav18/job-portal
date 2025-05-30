import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "*",
    Credential: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// import user routes
import userRoutes from "./routes/user.route.js";
app.use("/api/v1/users", userRoutes);

export default app;
